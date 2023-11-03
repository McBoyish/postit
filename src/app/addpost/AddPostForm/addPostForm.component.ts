import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './addPostForm.component.html',
  styleUrls: ['./addPostForm.component.css'],
})
export class AddPostFormComponent {
  constructor(private postService: PostService, private router: Router) {}
  title: string = '';
  content: string = '';
  setTitle(title?: string) {
    this.title = title || '';
  }
  setContent(content?: string) {
    this.content = content || '';
  }
  addPost(dummy: string) {
    this.postService.addPost(this.title, this.content, '').subscribe(() => {
      this.router.navigate(['/home']);
    });
    this.title = '';
    this.content = '';
  }
  cancel() {
    this.router.navigate(['home']);
    this.title = '';
    this.content = '';
  }
}
