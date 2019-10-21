import { Router } from '@angular/router';
import { PostsService } from './../services/posts.service';
import { Subscription } from 'rxjs/';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  postsSubscription: Subscription;


  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }
}
