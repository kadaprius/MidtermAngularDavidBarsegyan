import { Component } from '@angular/core';
import { User } from './user';
import { ParentUser } from './parent-user';
import { ChildUser } from './child-user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DavidBarsegyan';

  formgroup!: FormGroup;

  get fname(){
    return this.formgroup.get('firstName');
  }

  get lname(){
    return this.formgroup.get('lastName');
  }

  get id(){
    return this.formgroup.get('id');
  }
  get phoneNumber(){
    return this.formgroup.get('phoneNumber');
  }
  get email(){
    return this.formgroup.get('email');
  }

  constructor(private fb: FormBuilder){}
  
  ngOnInit(): void {
    this.formgroup = this.fb.group({
      id: [null,Validators.required], 
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: [null, Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.minLength(8)]]
      })
  } 

  users = [
    {firstName: 'John', lastName: 'Doe', age: 21},
    {firstName: 'Johnas', lastName: 'Doevi', age: 22},
    {firstName: 'Johna', lastName: 'Doeva', age: 23},
    {firstName: 'Johno', lastName: 'Doevos', age: 18},
    {firstName: 'Adios', lastName: 'Pajasos', age: 17}
  ]
  parentUsers: ParentUser[] = [
    {id:1,firstName: 'John', lastName: 'Doe', dateOfBirth:new Date('01-02-2004') ,phoneNumber: 2384138497,email: "asqwetd@gmail.com"},
    {id:2,firstName: 'Johnas', lastName: 'Doevi', dateOfBirth: new Date('01-02-2014'),phoneNumber: 2384157,email: "asdqweasd@gmail.com"},
    {id:3,firstName: 'Johna', lastName: 'Doeva', dateOfBirth: new Date('25-02-2000'),phoneNumber: 233453438497,email: "asasdasdd@gmail.com"},
    {id:4,firstName: 'Johno', lastName: 'Doevos', dateOfBirth: new Date('11-02-1994'),phoneNumber: 238465497,email: "asasdd@gmail.com"},
    {id:5,firstName: 'Adios', lastName: 'Pajasos', dateOfBirth: new Date('21-02-1995'),phoneNumber: 23834538497,email: "aseqwed@gmail.com"}
  ]

  childUsers: ChildUser[] = [];

  childUsersEvent(users: ChildUser[]) {
    this.childUsers = users;
  }
}
