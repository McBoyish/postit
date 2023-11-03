import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostFormComponent } from './addpost/AddPostForm/addPostForm.component';
import { ListComponent } from './postlist/List/list.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'home', component: ListComponent },
  { path: 'add-post', component: AddPostFormComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
