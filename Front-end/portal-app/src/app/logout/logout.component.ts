import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		// Clear Session Storage
		window.sessionStorage.clear();
		window.localStorage.clear();
		setTimeout(r=>{
			window.location.href = "/";
		},1500);
	}

}
