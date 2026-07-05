import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BlogPost } from '../../models/models';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../servicies/api.service';
@Component({
  selector: 'app-post-creation',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './post-creation.component.html',
  styleUrl: './post-creation.component.css'
})
export class PostCreationComponent implements OnInit {

  apiService = inject(ApiService);
  router = inject(Router);
  postForm: FormGroup = new FormGroup({});
  postData: BlogPost = {
    id:0,
    title: "",
    content: "",
    createdAt: ""
  }; 

  baseUrl: string = "https://localhost:7119/Posts";
  

  ngOnInit(): void {
    this.intializecarFormGroup();
  }

  intializecarFormGroup() {
    this.postForm = new FormGroup({
      title: new FormControl(this.postData?.title),
      content: new FormControl(this.postData?.content),
    });
  }

  createPost() {
    this.postForm.addControl('createdAt', new FormControl(new Date().toISOString())); 

    this.apiService.create(this.baseUrl, this.postForm.value).subscribe(response => {
      console.log(response);
      this.router.navigate(['/posts']);     
    });
  }
}
