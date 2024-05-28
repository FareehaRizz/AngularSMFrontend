import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostLike } from '../Models/post-like';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
   
  private apiUrl='http://localhost:3000/api/users';
  constructor(private http:HttpClient) { }
  

  //method for gettinng the posts likes
  getPostLikes(): Observable<PostLike[]>{
    return this.http.get<PostLike[]>(this.apiUrl);
  }

  //making a method to get  a particular post with like
  getPostLike(id: number): Observable<PostLike>{
    return this.http.get<PostLike>('${this.apiUrl}/${id}');
  }

}
