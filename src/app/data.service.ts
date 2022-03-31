import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './interfaces/Person';
import { LoginService } from './login/login.service';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient, private loginService: LoginService) {}

    //Load people.
    loadPeople(): Observable<Person[]> {
        const token = this.loginService.getIdToken();
        return this.httpClient.get<Person[]>(`https://list-people-a0da3-default-rtdb.firebaseio.com/data.json?auth=${token}`);
    }

    //Save people.
    savePeople(people: Person[]): void {
        const token = this.loginService.getIdToken();
        this.httpClient.post<Person[]>(`https://list-people-a0da3-default-rtdb.firebaseio.com/data.json?auth=${token}`, people)
            .subscribe({
                next: (response) => console.log('Result of saving people', response),
                error: (err) =>  console.log('Error while saving people', err),
                complete: () => console.log('complete')
            });
    }

    //Modify person
    modifyPerson(index: number, person: Person): void {
        const token = this.loginService.getIdToken();
        let url: string;
        url = `https://list-people-a0da3-default-rtdb.firebaseio.com/data/${index}.json?auth=${token}`;
        this.httpClient.put<Person>(url, person)
            .subscribe({
                next: (response) => console.log('result of modifying person', response),
                error: (err) =>  console.log('Error while modifying people', err),
            });
    }

    //Delete person.
    deletePerson(index: number): void {
        const token = this.loginService.getIdToken();
        let url: string;
        url = `https://list-people-a0da3-default-rtdb.firebaseio.com/data/${index}.json?auth=${token}`;
        this.httpClient.delete(url)
            .subscribe({
                next: (response) => console.log('result of deleting person', response),
                error: (err) =>  console.log('Error while deleting people', err),
            });
    }
}