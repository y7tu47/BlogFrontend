import { Component, inject, OnInit } from '@angular/core';
import { BlogPost } from '../../models/models';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../servicies/api.service';
@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  crudeApis = inject(ApiService);
  activatedRoute = inject(ActivatedRoute);

  baseUrl: string = "https://localhost:7119/Posts/";
  post: BlogPost = {
    id:0,
    title : "",
    content: "",
    createdAt:""
  };
  courseId: string | null = "" ;

   ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('Id');
    this.getCourseById();
  }

  getCourseById() {
    this.crudeApis.getDataById(this.baseUrl+this.courseId).subscribe(response => {
      this.post = response;
    });
  }
}
