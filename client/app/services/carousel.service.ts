import { Injectable } from '@angular/core';
import { Img } from './img';
import { Images } from './images';

@Injectable()
export class CarouselService {
  getCarousel(): Promise <Img[]> {
    return Promise.resolve(Images);
  }
}
