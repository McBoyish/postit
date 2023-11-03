import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './List/list.component';
import { PostComponent } from './Post/post.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ListComponent, PostComponent],
  imports: [CommonModule, AppRoutingModule, MatButtonModule, MatCardModule],
  exports: [ListComponent],
})
export class PostListModule {}
