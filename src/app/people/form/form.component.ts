import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../../interfaces/Person';
import { LoggingService } from '../../LoggingService.service';
import { PeopleService } from '../../people.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  // Event Binding between components
  //@Output() personCreated = new EventEmitter<Person>();

  //me traigo los inputs desde la plantilla a traves de el Viewchild.
  //@ViewChild('nameInput') nameInput: ElementRef;
  //@ViewChild('lastNameInput') lastNameInput: ElementRef;

  nameInput: string = '';
  lastNameInput: string = '';
  index: number;
  editMode: boolean;

  // Dependency Injection.
  constructor(
    private loggingService: LoggingService,
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //me subscribo a un evento del service que se emitio desde otro componente.
    this.peopleService.greet.subscribe((index: number) =>
      alert(`The index is ${index}`)
    );
  }
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    const editModeString = this.route.snapshot.queryParams['editMode'];
    this.editMode = editModeString === "true" ? true : false;
    // if (this.index) {
    //   let person: Person = this.peopleService.findPerson(this.index);
    //   this.nameInput = person.name;
    //   this.lastNameInput = person.lastName
    // }
    console.log(this.editMode);
    if (this.editMode != null && this.editMode) {
      let person: Person = this.peopleService.findPerson(this.index);
      this.nameInput = person.name;
      this.lastNameInput = person.lastName
    }
  }

  onSavePerson(): void {
    let personToSave = {
      name: this.nameInput,
      lastName: this.lastNameInput,
    } as Person;

    this.loggingService.sendMessageToConsole(
      `Person sent: ${personToSave.name}  ${personToSave.lastName}.`
    );

    console.log(this.editMode);

    if (this.editMode != null && !this.editMode) {
      this.peopleService.addPerson(personToSave);
    }else if (this.editMode != null && this.editMode) {
      this.peopleService.editPerson(this.index, personToSave);
    }

    //en vez de seguir emitiendolo, podria agregarlo por el servicio de personas de una.
    // this.personCreated.emit(personToAdd);

    this.router.navigate(['people']);
  }

  deletePerson(): void {
    if (this.index != null) {
      this.peopleService.deletePerson(this.index);
    }
    this.router.navigate(['people']);
  } 
}
