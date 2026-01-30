import {Component} from '@angular/core';
import {DefaultHeaderComponent} from '../deafult-header/default-header.component';
import {DefaultFooterComponent} from '../default-footer/default-footer.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    DefaultHeaderComponent,
    DefaultFooterComponent
  ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

}
