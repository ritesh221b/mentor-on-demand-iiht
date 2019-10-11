import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { TrainercompletedService } from './trainercompleted.service';

@Component({
  selector: 'app-trainercompleted',
  templateUrl: './trainercompleted.component.html',
  styles: []
})
export class TrainercompletedComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private trainercompletedService: TrainercompletedService) {

  }

  ngOnInit() {
    this.trainercompletedService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.trainercompletedService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


