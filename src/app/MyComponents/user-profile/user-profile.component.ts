import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../Models/user-profile';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
//making an empty array to contain all the user profiles

userProfiles: UserProfile[]=[];
constructor (private userService:UserService){}

ngOnInit():void{
  this.userService.getUserProfiles().subscribe(profiles => this.userProfiles = profiles);
}


}
