import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostButtonComponent } from './AddPostButton/addPostButton.component';
import { AddPostFormComponent } from './AddPostForm/addPostForm.component';

@NgModule({
  declarations: [AddPostFormComponent, AddPostButtonComponent],
  imports: [CommonModule],
  exports: [AddPostFormComponent, AddPostButtonComponent],
})
export class AddPostModule {}
