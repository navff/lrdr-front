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
    // localStorage.setItem('token', 'ABRAKADABRA');
    }

    request(request: Request, options?: RequestOptionsArgs): Observable<Response> {
        this.responding.next(true);
        request.url = apiUrl + request.url;
        request.headers.set('Authorization', `token ${localStorage.getItem('token')}`);
        return super.request(request, options)
            .finally(() => this.responding.next(false))
            .map((data) => data.json());
    }
}
