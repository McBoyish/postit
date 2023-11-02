import { Component, Input } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  content: string;
  imgUrl: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post!: Post;

  openPost() {
    // redirect to post
  }
}
