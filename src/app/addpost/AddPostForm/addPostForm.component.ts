import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './addPostForm.component.html',
  styleUrls: ['./addPostForm.component.css'],
})
export class AddPostFormComponent {
  constructor(private http: HttpClient) {}
  title: string = '';
  content: string = '';
  setTitle(title?: string) {
    this.title = title || '';
  }
  setContent(content?: string) {
    this.content = content || '';
  }
  addPost(dummy: string) {
    this.http
      .post('http://localhost:8080/post', {
        title: this.title,
        content: this.content,
        imgUrl: '',
      })
      .subscribe();
    this.title = '';
    this.content = '';
  }
}
