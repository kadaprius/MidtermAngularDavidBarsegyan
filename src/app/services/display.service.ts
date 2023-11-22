import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  displayUsers(users: any[]): any {
    console.log('Array is displayed by Display service');
    console.log(users);
  }
}
