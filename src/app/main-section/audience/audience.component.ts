import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.css']
})
export class AudienceComponent implements OnInit, AfterViewInit {

  constructor( private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      this.scrollToSection(fragment);
    });
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      this.scrollToSection(fragment);
    });
  }

  private scrollToSection(fragment: string | null): void {
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

}
