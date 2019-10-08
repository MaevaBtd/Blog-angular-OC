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

  constructor() { }

  ngOnInit() {
  }

  getClass() {
    if(this.postLikes > 0) {
      return 'list-group-item-success';
    } else if(this.postLikes < 0) {
      return 'list-group-item-danger';
    }
  }

  onLoveIt() {
    this.postLikes ++
    console.log("love it")
  }

   onDontLoveIt() {
    this.postLikes --
    console.log("don't love it")
  }

}