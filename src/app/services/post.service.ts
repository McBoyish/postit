import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../postlist/Post/post.component';

interface GetPostsResponse {
  content: Post[];
  last: boolean;
}

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}
  getPost(id: number) {
    return this.http.get<Post>(`http://localhost:8080/post/${id}`);
  }

  getPosts(page: number, pageSize: number) {
    return this.http.post<GetPostsResponse>(
      'http://localhost:8080/post/find-all',
      {
        page,
        pageSize,
      }
    );
  }

  addPost(title: string, content: string, imgUrl: string) {
    return this.http.post<Post>('http://localhost:8080/post/save', {
      title,
      content,
      imgUrl,
    });
  }
}
