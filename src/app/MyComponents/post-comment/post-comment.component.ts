import { Component } from '@angular/core';
import { PostComment } from '../../Models/post-comment';
import { CommentService } from '../../Services/comment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-comment.component.html',
  styleUrl: './post-comment.component.css'
  
})
export class PostCommentComponent {

  //making an empty array to store the comments on the post
  comments: PostComment[]=[]

  //making a cconstructor for using the service
  constructor(private commentService: CommentService){}

  //defing the ngOnInit life hook which will be initiated as soon as the application runs and it will execute the getPostcomments methods
  ngOnInit(): void{
    this.commentService.getPostComments().subscribe(comment => this.comments = comment);
  }

}
