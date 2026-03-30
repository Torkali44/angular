import { Component, signal } from '@angular/core';
import { OrderComponent } from "./order/order";
import { RouterLink,RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, OrderComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('product');
}
