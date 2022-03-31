import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './people/form/form.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  {path: '', component: PeopleComponent},
  {path: 'people', component: PeopleComponent, children: [
    {path: 'add', component: FormComponent},
    {path: ':id', component: FormComponent}
  ]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
