import { Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostCreationComponent } from './components/post-creation/post-creation.component';
import { PostsComponent } from './components/posts/posts.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'posts',
        pathMatch: 'full'
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'post/:Id',
        component: PostComponent
    },
    {
        path: 'post-creation',
        component: PostCreationComponent
    },
];
