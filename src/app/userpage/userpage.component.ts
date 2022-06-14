import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent implements OnInit {

  user!:User;
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.loadRandomUser().subscribe((data:User) => this.user = data)
  }

}
