import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { TrainercurrentService } from './trainercurrent.service';

@Component({
  selector: 'app-trainercurrent',
  templateUrl: './trainercurrent.component.html',
  styles: []
})
export class TrainercurrentComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private trainercurrentService: TrainercurrentService) {

  }

  ngOnInit() {
    this.trainercurrentService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.trainercurrentService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


