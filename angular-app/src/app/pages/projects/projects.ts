import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}
