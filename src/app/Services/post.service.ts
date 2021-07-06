import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'post';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl ='https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) { }

  getData(body:Post):Observable<Post>{
    const Url = `${this.apiUrl}/${body.id}`;
    return this.http.get<Post>(Url)
  }

  deletePost(post:Post):Observable<Post>{
    const Url = `${this.apiUrl}/${post.id}`;
    return this.http.delete<Post>(Url)
  }

}
