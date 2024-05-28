import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostComment } from '../Models/post-comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  private apiUrl='http://localhost:3000/api/users';
  constructor(private http:HttpClient) { }

  //defining the methods for getting post comments
  getPostComments(): Observable<PostComment[]>{
    return this.http.get<PostComment[]>(this.apiUrl);
  }

  //defining methos for getting the specified comment on post by giving its unique id
  getPostComment(id: number): Observable<PostComment>{
    return this.http.get<PostComment>('${thi.apiUrl}/${id}');
  }
}
