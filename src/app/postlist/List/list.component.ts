import { Component } from '@angular/core';
import { Post } from '../Post/post.component';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(private postService: PostService, private router: Router) {}

  currentPage: number = 0;

  hasMorePage: boolean = false;

  posts: Post[] = [];

  requestPage(page: number) {
    this.postService.getPosts(page, 30).subscribe((res) => {
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

  redirectToAddPost() {
    this.router.navigate(['add-post']);
  }
}
