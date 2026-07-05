import { Component, OnInit, inject } from '@angular/core';
import { BlogPost } from '../../models/models';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../servicies/api.service';
@Component({
  selector: 'app-posts',
  imports: [NgFor, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: BlogPost[] = [];
  crudeApis = inject(ApiService);
  baseUrl: string = "https://localhost:7119/Posts";

   ngOnInit(): void {
    this.getCourses();
  }

   getCourses() {
    this.crudeApis.getAllData(this.baseUrl).subscribe(response => {
      this.posts = response;
    });
  }
}
