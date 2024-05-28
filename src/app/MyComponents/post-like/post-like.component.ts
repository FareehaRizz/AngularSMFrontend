import { Component } from '@angular/core';
import { UserPost } from '../../Models/user-post';
import { LikeService } from '../../Services/like.service';
import { PostLike } from '../../Models/post-like';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-like',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-like.component.html',
  styleUrl: './post-like.component.css'
})
export class PostLikeComponent {

  //making an empty array to contain all the like on the posts
  postLikes: PostLike[]=[];

  //this also uses the post service to interact with the backend
  constructor(private likeService: LikeService){}

  //now configuring the ngOnInit method
  ngOnInit(): void {
    this.likeService.getPostLikes().subscribe(likes => this.postLikes  = likes );
  }

}
