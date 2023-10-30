import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
var swiper = new Swiper('.swiper-container', {
slidesPerView: 3,
loop:true,
spaceBetween: -20,
    });
    
  }
//var swiper = new Swiper('.swiper-container', {
//slidesPerView: 3,
}
