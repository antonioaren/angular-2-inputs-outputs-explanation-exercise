import { Component } from '@angular/core';

type Product = {
  fruit: string;
  quantity: number;
  price: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits : Product[] = [];
  showTicket: Boolean = false;
  invoice: number = 0;

  getFruitList(fruitList: Product[]) {
    this.fruits = JSON.parse(JSON.stringify(fruitList));
    this.invoice = this.fruits.reduce((acc, current) => current.price * current.quantity + acc, 0);
  }

}
