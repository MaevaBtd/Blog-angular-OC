import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyA_zItRKf9WCBUXWoLCCSBJxLL7db-hkjk",
      authDomain: "exercice-oc-blog.firebaseapp.com",
      databaseURL: "https://exercice-oc-blog.firebaseio.com",
      projectId: "exercice-oc-blog",
      storageBucket: "exercice-oc-blog.appspot.com",
      messagingSenderId: "458763166561",
      appId: "1:458763166561:web:ce136875e9277e0a8c1b20"
    };
    firebase.initializeApp(config);
  }

}
