import { Injectable } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FatchuserdataService {
  header: any;
  Url: 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {

  }
  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
