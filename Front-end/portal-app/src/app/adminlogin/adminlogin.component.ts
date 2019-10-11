import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AdminloginService } from './adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styles: []
})
export class AdminloginComponent implements OnInit {

  users: User[];
  usr:String = null;
  pwd:String = null;
  validate():void{

    if(this.usr == 'admin' && this.pwd == 'admin')
    {
      location.href = '/admin';
      window.localStorage.setItem('loginType','admin');
    }
    else if(this.usr == null && this.pwd == null)
    {
      alert("Please enter the Username or Password");
    }
    else{
      alert("Invalid credentials entered Username or Password");
    }
  }

  constructor(private router: Router, private adminloginService: AdminloginService) {

  }

  ngOnInit() {

    if (window.localStorage.getItem('loginType')=='admin') {
      window.location.href="/";
    }

    this.adminloginService.getUsers()
    .subscribe( data => {
      this.users = data;
    });
  };

  deleteUser(user: User): void {
    this.adminloginService.deleteUser(user)
    .subscribe( data => {
      this.users = this.users.filter(u => u !== user);
    })
  };

}


