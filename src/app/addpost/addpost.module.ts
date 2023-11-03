import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostButtonComponent } from './AddPostButton/addPostButton.component';
import { AddPostFormComponent } from './AddPostForm/addPostForm.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [AddPostFormComponent, AddPostButtonComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [AddPostFormComponent, AddPostButtonComponent],
})
export class AddPostModule {}
