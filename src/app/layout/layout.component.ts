import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HomeComponent } from "../pages/home/home.component";
import { FooterComponent } from "../footer/footer.component"
import { register } from 'swiper/element/bundle';
import { RouterOutlet } from '@angular/router';
register();;
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
