import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PersonService, Person } from '../services/person.service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private personService = inject(PersonService);
  
  personForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    age: [0, [Validators.required, Validators.min(1), Validators.max(120)]],
    gender: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
  });

  personId!: string;
  isLoading = true;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      if (!this.isValidMongoId(id)) {
        this.router.navigate(['/']);
        return;
      }

      this.personId = id!;
      this.loadPersonData();
    });
  }

  private loadPersonData(): void {
    this.personService.getPersonById(this.personId).subscribe({
      next: (person) => {
        this.personForm.patchValue(person);
        this.isLoading = false;
      },
      error: () => {
        this.router.navigate(['/']);
      }
    });
  }

  private isValidMongoId(id: string | null): boolean {
    return !!id && /^[0-9a-fA-F]{24}$/.test(id);
  }

  onSubmit(): void {
    if (this.personForm.valid && this.personId) {
      const updatedData = this.personForm.value as Partial<Person>;
      
      // Correct service call with two arguments
      this.personService.updatePerson(this.personId, updatedData).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => alert('Update failed: ' + (err.error?.message || 'Unknown error'))
      });
    }
  }
}