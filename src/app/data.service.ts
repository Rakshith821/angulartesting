import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from './model/posts.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public ROOT_URL = 'http://jsonplacehoder.typicode.com'
  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get<Post[]>(`${this.ROOT_URL}/posts`)
  }
}
