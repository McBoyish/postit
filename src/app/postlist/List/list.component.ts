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

  ngOnInit() {
    this.http.get('http://localhost:8080/post').subscribe((res) => {
      this.posts = res as Post[];
    });
  }

  posts: Post[] = [];
}
