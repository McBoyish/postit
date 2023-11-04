import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PostComponent } from './post.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
  ],
  exports: [],
})
export class PostModule {}
