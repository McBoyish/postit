import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostButtonComponent } from './AddPostButton/addPostButton.component';
import { AddPostFormComponent } from './AddPostForm/addPostForm.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AddPostFormComponent, AddPostButtonComponent],
  imports: [CommonModule, AppRoutingModule, MatButtonModule, MatInputModule],
  exports: [AddPostFormComponent, AddPostButtonComponent],
})
export class AddPostModule {}
