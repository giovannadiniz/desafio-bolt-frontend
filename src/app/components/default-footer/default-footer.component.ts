import {Component} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-default-footer',
  standalone: true,
  imports: [
  ],
  templateUrl: './default-footer.component.html',
  styleUrl: './default-footer.component.scss'
})
export class DefaultFooterComponent {

  redirectToLinkedin() {
    window.open(environment.URL_LINKEDIN, '_blank');
  }

}
