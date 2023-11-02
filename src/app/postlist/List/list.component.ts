import { Component } from '@angular/core';
import { Post } from '../Post/post.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(private http: HttpClient) {}

  currentPage: number = 0;

  hasMorePage: boolean = false;

  posts: Post[] = [];

  requestPage(page: number) {
    this.http
      .post('http://localhost:8080/post/find-all', { page, pageSize: 1 })
      .subscribe((res: any) => {
        this.posts = [...this.posts, ...res.content];
        this.hasMorePage = !res.last;
      });
  }

  ngOnInit() {
    this.requestPage(this.currentPage);
  }

  loadMore() {
    this.currentPage++;
    this.requestPage(this.currentPage);
  }
}
