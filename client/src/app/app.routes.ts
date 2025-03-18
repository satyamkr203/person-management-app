import { Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { CreatePersonComponent } from './create-person/create-person.component';

export const routes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'create', component: CreatePersonComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: '**', redirectTo: '' }
];