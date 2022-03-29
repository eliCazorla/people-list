import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './interfaces/Person';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) {}

    //Load people.
    loadPeople(): Observable<Person[]> {
        return this.httpClient.get<Person[]>('https://list-people-a0da3-default-rtdb.firebaseio.com/data.json');
    }

    //Save people.
    savePeople(people: Person[]): void {
        this.httpClient.put('https://list-people-a0da3-default-rtdb.firebaseio.com/data.json', people)
            .subscribe({
                next: (response) => console.log('Result of saving people', response),
                error: (err) =>  console.log('Error while saving people', err),
                complete: () => console.log('complete')
            });
    }
}