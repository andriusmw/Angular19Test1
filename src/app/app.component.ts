import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClassComponent } from "./components/ng-class/ng-class.component";
import { GetApiComponent } from "./components/API/get-api/get-api.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClassComponent, GetApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular19Test1';
}
