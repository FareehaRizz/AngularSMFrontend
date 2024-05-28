import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './MyComponents/user-profile/user-profile.component'; 
import { UserPostComponent } from './MyComponents/user-post/user-post.component';
import { PostCommentComponent } from './MyComponents/post-comment/post-comment.component';
import { PostLikeComponent } from './MyComponents/post-like/post-like.component';
import { profile } from 'console';


export const routes: Routes = [
{path:'userProfiles', component: UserProfileComponent},
{path:'userPosts', component: UserPostComponent},
{path:'postLikes', component:PostLikeComponent},
{path:'comments', component:PostCommentComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}