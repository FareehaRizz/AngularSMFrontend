import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPost } from '../Models/user-post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  
   private apiUrl='http://localhost:3000/api/users';

  constructor(private http:HttpClient) { }
  
  //a method to get/retrive the userposts , all of them in an observable type array

  getUserPosts(): Observable<UserPost[]>{
    return this.http.get<UserPost[]>(this.apiUrl);
  }

  //writing a method to get/retrive a particular user post by specifying the id of the user post
  getUserPost(id: number): Observable<UserPost>{
    return this.http.get<UserPost>('${this.apiUrl}/${id}');
  }
}
