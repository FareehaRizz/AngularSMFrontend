import { Component } from '@angular/core';
import { UserPost } from '../../Models/user-post';
import { PostService } from '../../Services/post.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-post.component.html',
  styleUrl: './user-post.component.css'
})
export class UserPostComponent {
  //making an empty array to store all the user posts
  userPosts: UserPost[]=[];

  //making a constructor
  constructor(private postService: PostService){}

  //maikng a ngOnInit life hook which will be intialized as soon as the application runs and it will  execute the getUserPosts function
  ngOnInit(): void{
    this.postService.getUserPosts().subscribe(posts => this.userPosts = posts);
  }

}
