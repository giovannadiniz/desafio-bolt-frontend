import {Component} from '@angular/core';

@Component({
  selector: 'app-default-footer',
  standalone: true,
  imports: [],
  templateUrl: './default-footer.component.html',
  styleUrl: './default-footer.component.scss'
})
export class DefaultFooterComponent {

  urlLinkedin: string = 'https://www.linkedin.com/in/giovannadinizz/';

  redirectToLinkedin() {
    window.open(this.urlLinkedin, '_blank');
  }

}
