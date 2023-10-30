import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements AfterViewInit {
  @ViewChild('card') cardElement: ElementRef | undefined;
  
  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    this.animateCardIn();
  }

  animateCardIn() {
    if (this.cardElement) {
      const cardElement = this.cardElement.nativeElement;

      const animation = this.animationCtrl
        .create()
        .addElement(cardElement)
        .duration(1000) // Animation duration in milliseconds (adjust as needed)
        .fromTo('opacity', 0, 1) // Opacity from 0 to 1
        .fromTo('transform', 'translateY(100%)', 'translateY(0)'); // Translate from bottom to top

      animation.play();
    }
  }
}
