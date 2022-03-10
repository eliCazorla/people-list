import { Component } from '@angular/core';
import { Person } from './interfaces/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'People List';
}
