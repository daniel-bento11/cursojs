import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CampoComponent } from './campo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CampoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mundo';
  nome= 'Daniel';
}
