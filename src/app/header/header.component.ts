import { Component, Input } from '@angular/core';
import { Header,Contact} from '../interfaceCP'; 

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent {
  @Input() headerInfo!:Header;
  @Input() contact: Contact[] =[];

  @Input() darkMode: boolean = false;
}