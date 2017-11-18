import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class FileService {
  constructor(private http: HttpService) { }

  remove(id) {
    return this.http.delete(`file/${id}`);
  }
  take(code: string) {
    return this.http.get(`file/${code}`);
  }
  create(file: File) {
    return this.http.post('file', file);
  }
}
