import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from "./components/student/student";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentComponent, Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('studentApp');
}
