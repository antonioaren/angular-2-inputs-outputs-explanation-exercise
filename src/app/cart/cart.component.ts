import { Component, OnInit, Input } from '@angular/core';

type Product = {
  fruit: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
