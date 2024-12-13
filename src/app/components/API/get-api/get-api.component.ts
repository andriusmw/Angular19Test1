import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any[]= [];
$index: any;

  constructor(private http:HttpClient) {

  }

  getUsers() {
    this.http.get("https://json-placeholder.mock.beeceptor.com/users").
      subscribe((results:any) => {
        this.userList = results;
      })
  }


}
