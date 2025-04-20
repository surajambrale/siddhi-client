import { Component } from '@angular/core';
import { OurCoachesComponent } from '../our-coaches/our-coaches.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OurCoachesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
