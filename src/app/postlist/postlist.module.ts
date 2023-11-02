import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './List/list.component';
import { PostComponent } from './Post/post.component';
import { AddPostButtonComponent } from '../addpost/AddPostButton/addPostButton.component';

@NgModule({
  declarations: [ListComponent, PostComponent],
  imports: [CommonModule],
  exports: [ListComponent],
})
export class PostListModule {}
