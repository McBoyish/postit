import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './List/list.component';
import { PostComponent } from './Post/post.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ListComponent, PostComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [ListComponent],
})
export class PostListModule {}
