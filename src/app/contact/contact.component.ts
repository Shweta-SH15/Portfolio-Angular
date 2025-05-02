import { Component, Input } from '@angular/core';
import { Contact } from '../interfaceCP';
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: false
})
export class ContactComponent {
  @Input() contact: Contact[] =[];
}