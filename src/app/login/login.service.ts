import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable()
export class LoginService {
    token: string;

    constructor(private router: Router) {}

    login(email: string, password: string) {
        const authInstance = getAuth();
        signInWithEmailAndPassword(authInstance, email, password)
            .then(
                (response: any) => {
                    authInstance.currentUser?.getIdToken()
                        .then(
                            (token: any) => {
                                this.token = token;
                                this.router.navigate(['/']);
                            }
                        );
                }
            );   
    }

    getIdToken(): string {
        return this.token;
    }
}
