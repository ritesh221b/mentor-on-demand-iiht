import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'cooool';
	loginType = window.localStorage.getItem('loginType');
	constructor(private route:ActivatedRoute,public router: Router) {
	}
}
