import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
// import { Injectable } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  user = {username: '', password: '', remember: false};
 

  constructor(  public dialogref: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('User: ', this.user);
    this.dialogref.close();
  }

}
