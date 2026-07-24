import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductsComponent } from "../../products/products.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductsComponent, RouterLink, RouterLinkActive],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShopComponent {

}
