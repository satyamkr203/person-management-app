import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person.model';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  private personService = inject(PersonService);
  private router = inject(Router);
  
  people$ = this.personService.getAllPersons();

  deletePerson(id: string): void {
    if (confirm('Are you sure you want to delete this person?')) {
      this.personService.deletePerson(id).subscribe({
        next: () => {
          this.people$ = this.personService.getAllPersons();
        },
        error: (err) => console.error('Delete failed:', err)
      });
    }
  }

  onEditClick(person: Person): void {
    this.router.navigate(['/edit', person._id]);
  }
}