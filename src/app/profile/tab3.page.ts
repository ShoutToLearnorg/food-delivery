// tab3.page.ts
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  contacts: any[] = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
  ];

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController
  ) {}

  showDetails(contact: any) {
    // Implement the details display logic here
    console.log('Showing details for contact:', contact);
    // You can open a modal, navigate to a details page, or take any other action you need.
  }

  editContact(contact: any) {
    // Implement the logic to edit the contact here
    console.log('Editing contact:', contact);
    // You can open an edit form, navigate to an edit page, or take any other relevant action.
  }

  deleteContact(contact: any) {
    // Implement the logic to delete the contact here
    console.log('Deleting contact:', contact);
    const index = this.contacts.indexOf(contact);
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
  }
}
