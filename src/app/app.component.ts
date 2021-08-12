import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  template: `<div class="inventory-app">
    <!-- $event is a special variable here that represents the thing sent to the output. -->
    <products-list
      [productList]="products"
      (onProductSelected)="productWasSelected($event)"
    ></products-list>
  </div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[];
  title = 'inventory-app';

  constructor() {
    this.products = [
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessoried', 'Hats'],
        29.9
      ),
      new Product(
        'NICEHAT2',
        'A Nice Black Hat',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessoried', 'Hats'],
        29.9
      ),
      new Product(
        'NICEHAT3',
        'A Nice Black Hat',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessoried', 'Hats'],
        29.9
      ),
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
