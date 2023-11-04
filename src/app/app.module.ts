import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListModule } from './postlist/postlist.module';
import { AddPostModule } from './addpost/addpost.module';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    PostListModule,
    AddPostModule,
    HttpClientModule,
  ],
  providers: [PostService, CommentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
