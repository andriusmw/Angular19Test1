import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClassComponent } from "./components/ng-class/ng-class.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular19Test1';
}
