import { Router } from '@angular/router';
import { PostsService } from './../services/posts.service';
import { Subscription } from 'rxjs/';
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
  @Input() postDate: string;
  @Input() postIndex: number;

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

  onLoveIt(index) {
    this.postsService.loveIt(index);
  }

   onDontLoveIt(index) {
    this.postsService.dontloveIt(index);
  }

  onRemovePost(index) {
    this.postsService.removePost(index);
  }

}
