import { Component } from '@angular/core';
import { Post } from '../postlist/Post/post.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  post: Post | null = null;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.postService.getPost(id).subscribe((res) => {
      this.post = res;
      console.log(this.post);
    });
  }
}
