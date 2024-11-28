import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-angularinfo',
  standalone: true,
  imports: [],
  templateUrl: './angularinfo.component.html',
  styleUrls: ['./angularinfo.component.css'] // Corrected "styleUrl" to "styleUrls"
})
export class AngularinfoComponent implements OnInit {
  constructor(private route: ActivatedRoute ) {}
  activeFragment: String | null = null;
  ngOnInit(): void {
    // Subscribe to fragment changes
   
    this.route.fragment.subscribe(fragment => {
      this.activeFragment = fragment
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          // Scroll to the element with the given fragment id
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }); // Close the subscribe method here
  } // Close the ngOnInit method here
}
