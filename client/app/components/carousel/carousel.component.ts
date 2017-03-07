import { Component, OnInit } from '@angular/core';
import {Image} from './image.interface';



@Component({
  moduleId: module.id,
  selector: 'carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.css']

})

export class CarouselComponent {
  public images = IMAGES;
}
var IMAGES: Image[] = [
	{ "title": "Attract new customers & increase revenue with gift cards.", "url": "img/cash-management.jpg" },
	{ "title": "Track all cash movements from cash float to register closure.", "url": "img/gift-cards.jpg" },
	{ "title": "The beautifully fast web-based checkout experience. Try it now!", "url": "img/register.jpg" },
	{ "title": "Retail ebooks, guides, live events, webinars and training.", "url": "img/vend-u.jpg" },
  { "title": "Attract new customers & increase revenue with gift cards.", "url": "img/cash-management.jpg" }
];
