import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Comment {
  id: number;
  postId: number;
  content: number;
  datetime: number;
}

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {}
  getComments(postId: number, cursor?: number) {
    return this.http.post<Comment[]>(
      'http://localhost:8080/comment/find-all-by-post-id',
      {
        postId,
        cursor,
      }
    );
  }

  addComment(postId: number, content: string) {
    return this.http.post<Comment>('http://localhost:8080/comment/save', {
      postId,
      content,
    });
  }
}
