import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListModule } from './postlist/postlist.module';
import { AddPostModule } from './addpost/addpost.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PostListModule, AddPostModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
