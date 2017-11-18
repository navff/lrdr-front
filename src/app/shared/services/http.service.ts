import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, XHRBackend, Request, RequestOptionsArgs, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

const apiUrl = 'http://test.lrdr.ru/b/api/';

@Injectable()
export class HttpService extends Http {
    responding: Subject<boolean> = new Subject();

    constructor(backend: XHRBackend, options: RequestOptions) {
        super(backend, options);

        const match = window.location.href.match(/token=(.)+/);
        if (match) {
            localStorage.setItem('token', match[0].substr(6));
        }
    }

    request(request: Request, options?: RequestOptionsArgs): Observable<Response> {
        this.responding.next(true);
        request.url = apiUrl + request.url;
        // 85eb7c96918534cb6830a9ef9010d2eb9de267483ede1f001b2c0c75ac1dd017
        request.headers.set('Authorization', `token ${localStorage.getItem('token')}`);
        return super.request(request, options)
            .finally(() => this.responding.next(false));
    }

    get(url: string, options?: RequestOptions) {
        return super.get(url, options).map((data) => data.json());
    }

    delete(url: string, options?: RequestOptions) {
        return super.delete(url, options).map((data) => data.json());
    }

    post(url: string, body = null, options?: RequestOptions) {
        return super.post(url, body, options).map((data) => data.json());
    }

    put(url: string, body = null, options?: RequestOptions) {
        return super.put(url, body, options).map((data) => data.json());
    }

}
