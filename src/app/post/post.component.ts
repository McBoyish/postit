import { Component } from '@angular/core';
import { Post } from '../postlist/Post/post.component';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Comment } from '../services/comment.service';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService
  ) {}

  comment: string = '';

  comments: Comment[] = [];

  post: Post | null = null;

  hasMoreComments: boolean = false;

  setComment(comment: string) {
    this.comment = comment;
  }

  addComment() {
    if (!this.post || this.comment === '') {
      return;
    }
    this.commentService
      .addComment(this.post.id, this.comment)
      .subscribe((comment: Comment) => {
        this.comments = [comment, ...this.comments];
        this.comment = '';
      });
  }

  fetchMore() {
    if (!this.hasMoreComments) return;
    if (!this.post) return;
    const cursor = this.comments[this.comments.length - 1].id;
    this.commentService.getComments(this.post.id, cursor).subscribe((res) => {
      if (res.length < 100) this.hasMoreComments = false;
      this.comments = [...this.comments, ...res];
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.postService.getPost(id).subscribe((res) => {
      this.post = res;
    });
    this.commentService.getComments(id).subscribe((res) => {
      if (res.length === 100) this.hasMoreComments = true;
      this.comments = [...this.comments, ...res];
    });
  }
}
