import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { UsermenuService } from './usermenu.service';

@Component({
  selector: 'app-login',
  templateUrl: './usermenu.component.html',
  styles: []
})
export class UsermenuComponent implements OnInit {

  users: Training[];

  constructor(private router: Router, private usermenuService: UsermenuService) {

  }

  ngOnInit() {
    this.usermenuService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: Training): void {
    this.usermenuService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


