import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-post-button',
  templateUrl: './addPostButton.component.html',
  styleUrls: ['./addPostButton.component.css'],
})
export class AddPostButtonComponent {
  @Input() disabled!: boolean;
  @Output() addPostEvent = new EventEmitter();
}
