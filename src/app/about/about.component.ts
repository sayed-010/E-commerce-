import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule,RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule,CommonModule,RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
