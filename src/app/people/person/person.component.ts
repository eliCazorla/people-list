import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../interfaces/Person';
import { PeopleService } from '../../people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  // Property Binding between components.
  @Input() person: Person = {} as Person;
  @Input() index: number = 0;
  
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
  }

  greet(): void {
    this.peopleService.greet.emit(this.index);
  }
}
