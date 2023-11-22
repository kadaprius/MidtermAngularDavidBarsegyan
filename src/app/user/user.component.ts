import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChildUser } from '../child-user';
import { ParentUser } from '../parent-user';
import { DisplayService } from '../services/display.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(public displayService: DisplayService) {}

  displayparentUsers(): void {
    this.displayService.displayUsers(this.parentusers);
  }
  displaychildUsers(): void {
    this.displayService.displayUsers(this.childUsers);
  }

  @Input() parentusers: ParentUser[] = [];
  @Output() childUsersEvent = new EventEmitter<ChildUser[]>();
  childUsers:ChildUser[]=[
    {id:6,firstName: 'Johntwe', lastName: 'Doasde', dateOfBirth: new Date('11-02-1998'),phoneNumber: 2384138497,email: 'asryyd@gmail.com'},
    {id:7,firstName: 'Johnqwe', lastName: 'Doqwer', dateOfBirth: new Date('12-03-1989'),phoneNumber: 2384138497,email: 'astrd@gmail.com'},
    {id:8,firstName: 'Johnasd', lastName: 'Dofsde', dateOfBirth: new Date('05-04-2020'),phoneNumber: 2384138497,email: 'ahrtfhsd@gmail.com'}
  ]
  ngOnInit() {
    this.childUsersEvent.emit(this.childUsers);
  }
}
