import { Component } from '@angular/core';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './addPostForm.component.html',
  styleUrls: ['./addPostForm.component.css'],
})
export class AddPostFormComponent {
  title: string = '';
  content: string = '';
  setTitle(title?: string) {
    this.title = title || '';
  }
  setContent(content?: string) {
    this.content = content || '';
  }
  addPost() {
    console.log('adding post', this.title, this.content);
    this.title = '';
    this.content = '';
  }
}
