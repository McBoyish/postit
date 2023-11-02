import { Component } from '@angular/core';
import { Post } from '../Post/post.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  posts: Post[] = [
    {
      id: 0,
      title: 'Why are people tall',
      content: 'Pls answer',
      imgUrl: '',
    },
    {
      id: 1,
      title: 'Why are people tall',
      content: 'Pls answer',
      imgUrl: '',
    },
    {
      id: 2,
      title: 'Why are people tall',
      content: 'Pls answer',
      imgUrl: '',
    },
    {
      id: 3,
      title: 'Why are people tall',
      content: 'Pls answer',
      imgUrl: '',
    },
  ];
}
