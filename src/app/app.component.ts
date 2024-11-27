import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AngularComponent } from './angular/angular.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AngularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularprojectPractice';
}
