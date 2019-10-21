import { Router } from '@angular/router';
import { PostsService } from './../services/posts.service';
import { Subscription } from 'rxjs/';
import { Post } from './../models/Post.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLikes: number;
  @Input() postDate: Date;

  postsSubscription: Subscription;


  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  getClass() {
    if (this.postLikes > 0) {
      return 'list-group-item-success';
    } else if (this.postLikes < 0) {
      return 'list-group-item-danger';
    }
  }

  onLoveIt() {
    this.postLikes ++;
    console.log("love it")
  }

   onDontLoveIt() {
    this.postLikes --;
    console.log("don't love it")
  }

  onRemovePost() {
    this.postsService.removePost();
    console.log("remove post");
  }

}
