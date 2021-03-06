import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpParams, HttpClient, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { SharedService } from './shared.service';

const apiUrl = 'http://test.lrdr.ru/b/api/';

@Injectable()
export class HttpService extends HttpClient {
    responding: Subject<boolean> = new Subject();

    constructor(handler: HttpHandler, private shared: SharedService) {
        super(handler);

        const match = window.location.href.match(/token=(.)+/);
        if (match) {
            localStorage.setItem('token', match[0].substr(6));
        }
        // localStorage.setItem('token', 'ABRAKADABRA');
    }

    request(req: string | HttpRequest<any>, url?: string, options: any = {}): Observable<any> {
        this.shared.requests$.next(this.shared.requests$.getValue() + 1);
        let headers = options.headers || new HttpHeaders();
        headers = headers.set('Authorization', `token ${localStorage.getItem('token')}`);
        options.headers = headers;
        url = apiUrl + url;
        return super.request(req as any, url as string, options)
            .finally(() => this.shared.requests$.next(this.shared.requests$.getValue() - 1));
    }

    setSearch(params?): HttpParams {
        let search = new HttpParams();
        if (params) {
            Object.keys(params).forEach(key => {
                if (params[key]) {
                    Array.isArray(params[key]) ?
                        params[key].filter(k => k).forEach(v => search = search.append(key, v)) :
                        search = search.append(key, params[key]);
                }
            });
        }
        return search;
    }
}
