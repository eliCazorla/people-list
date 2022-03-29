import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Person } from './interfaces/Person';
import { LoggingService } from './LoggingService.service';

// para permitir que se inyecte un servicio dentro de otro.
@Injectable()
export class PeopleService {
  people: Person[] = [];

  greet = new EventEmitter<number>();

  constructor(private loggingService: LoggingService, private dataService: DataService) {}

  setPeople(people: Person[]): void {
    this.people = people;
  }

  getPeople(): Observable<Person[]> {
    return this.dataService.loadPeople();
  }

  addPerson(person: Person): void {
    this.loggingService.sendMessageToConsole(`person added: ${person.name}.`);
    if (this.people == null) {
      this.people = [];
    }
    this.people.push(person);
    this.dataService.savePeople(this.people);
  }

  findPerson(index: number): Person {
    let person: Person = this.people[index];
    return person;
  }

  editPerson(index: number, personToSave: Person) {
    let person = this.people[index];
    person.name = personToSave.name;
    person.lastName = personToSave.lastName;
  }

  deletePerson(index: number): void {
    this.people.splice(index, 1);
  }
}
