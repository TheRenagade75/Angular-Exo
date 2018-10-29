import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

isHidden: boolean;


  constructor() {


  }
user: any;
  ngOnInit() {
    this.isHidden = false;
    this.user = {
      name : 'Doe',
      firstName : 'John',
      age : 25,
      quote : '',
      photo : 'http://static1.purebreak.com/articles/3/92/81/3/@/418834-gif-de-noel-624x0-1.gif'
    };
  }
show() {
  this.isHidden = !this.isHidden;
}

}


