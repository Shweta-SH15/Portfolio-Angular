import { Component, Input } from '@angular/core';
import {About} from '../interfaceCP';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent {
  @Input() aboutInfo!: About;
}