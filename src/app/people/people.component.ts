import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../interfaces/Person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    // this.people = this.peopleService.people;

    this.peopleService.getPeople()
      .subscribe({
        next: (people) => {
          this.people = people;
          this.peopleService.setPeople(people);
        },
        error: (err) => console.log('error', err),
      });
  }

  addPerson(person: Person): void {
    // this.people.push(person);
    this.peopleService.addPerson(person);
  }

  add(): void {
    this.router.navigate(['people/add']);
  }
}
