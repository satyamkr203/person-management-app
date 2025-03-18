export interface Person {
  _id: string; // unique id->number mongogDB _id-> id: number 
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  mobile: string;
  email: string;
}