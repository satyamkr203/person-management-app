import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
  _id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  mobile: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class PersonService {
  private apiUrl = 'http://localhost:5000/api/person';

  constructor(private http: HttpClient) { }

  // Get all persons
  getAllPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  // Create new person
  createPerson(personData: Omit<Person, '_id'>): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, personData);
  }

  // Update existing person
  updatePerson(id: string, personData: Partial<Person>): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${id}`, personData);
  }

  // Delete person
  deletePerson(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  // Get single person by ID
  // handle for single 
  getPersonById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }
}