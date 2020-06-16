import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


type Product = {
  fruit: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Output() fruitList = new EventEmitter();

  products: Product[] = [];

  product: Product = {
    fruit: '',
    quantity: 0,
    price: 0
  }

  constructor() { }

  ngOnInit(): void {

  }

  dataFromList(product: Product) {
    this.products.push(product);
    this.product = {
      fruit: '',
      quantity: 0,
      price: 0
    }
    this.fruitList.emit(this.products);
  }

}
