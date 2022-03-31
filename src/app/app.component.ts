import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'People List';

  constructor() {}

  ngOnInit(): void {
    initializeApp({
      apiKey: "AIzaSyDsMDx3TFhO7xecHMYgImZFG5qJBdzjeXY",
      authDomain: "list-people-a0da3.firebaseapp.com",
    });
  }

}
