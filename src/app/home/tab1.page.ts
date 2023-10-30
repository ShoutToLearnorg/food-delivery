import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  ngOnInit() {
    var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    loop:true,
    spaceBetween: -20,
        });
      }

}
