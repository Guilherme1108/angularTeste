import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteeComponent  } from './testee/testee';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TesteeComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularTeste');
}
