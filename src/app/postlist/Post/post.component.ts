import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  @Input() post!: Post;

  displayContent: string = this.post?.content.slice(0, 100);

  openPost() {
    this.router.navigate(['post', this.post.id]);
  }
}
