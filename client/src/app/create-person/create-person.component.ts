import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PersonService } from '../services/person.service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private personService = inject(PersonService);

  genderOptions: ('Male' | 'Female' | 'Other')[] = ['Male', 'Female', 'Other'];
  
  personForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    age: [null as number | null, [Validators.required, Validators.min(1)]],
    gender: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    email: ['', [Validators.required, Validators.email]]
  });

  onSubmit() {
    if (this.personForm.valid) {
      this.personService.createPerson(this.personForm.value as any).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => alert('Creation failed: ' + err.error?.message)
      });
    }
  }
}