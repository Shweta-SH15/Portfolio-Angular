import { Component, Input } from '@angular/core';
import { Footer,Header } from '../interfaceCP';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    standalone: false
})
export class FooterComponent {
  @Input() technologies: Footer[] = [];
  cdate = new Date();
  @Input() headerInfo!:Header;
  @Input() darkMode: boolean = false;
}