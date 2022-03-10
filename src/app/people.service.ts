import { EventEmitter, Injectable } from '@angular/core';
import { Person } from './interfaces/Person';
import { LoggingService } from './LoggingService.service';

// para permitir que se inyecte un servicio dentro de otro.
@Injectable()
export class PeopleService {
  people: Person[] = [
    { name: 'Juan', lastName: 'Perez' },
    { name: 'Laura', lastName: 'Juarez' },
    { name: 'Karla', lastName: 'Lara' },
  ];

  greet = new EventEmitter<number>();

  constructor(private loggingService: LoggingService) {}

  addPerson(person: Person): void {
    this.loggingService.sendMessageToConsole(`person added: ${person.name}.`);
    this.people.push(person);
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
