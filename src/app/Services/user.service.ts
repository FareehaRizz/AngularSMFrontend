import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../Models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl= 'http://localhost:3000/api/users';

  constructor(private http:HttpClient) { }
   

  //method for getting the all the userprofiles by using the HTTPClient functionality

  getUserProfiles(): Observable<UserProfile[]>{
    
    return this.http.get<UserProfile[]>(this.apiUrl);
  }

  //writing  amethod to get/retrive a particular user profile by speco=ifying the id
  getUserProfile(id:number): Observable<UserProfile>{
    return this.http.get<UserProfile>('${this.apiUrl}/${id}');
  }

}
