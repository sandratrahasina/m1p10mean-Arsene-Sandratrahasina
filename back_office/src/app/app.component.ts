import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isCollapsed = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Access route parameters or other route-related information here
  }

  
}
