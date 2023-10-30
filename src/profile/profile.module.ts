import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ProfilePageRoutingModule,
    RouterModule.forChild([{ path: '', component: ProfilePageModule }])
  ],
  declarations: [ProfilePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ProfilePageModule {}
