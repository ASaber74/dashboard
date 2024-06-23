import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.css'],
})
export class AudienceComponent implements OnInit, AfterViewInit {
  @ViewChild('content', { static: false }) content: ElementRef;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.content.nativeElement.addEventListener(
      'scroll',
      this.onScroll.bind(this)
    );
  }

  onScroll(): void {
    const el = this.content.nativeElement;
    const sections = el.querySelectorAll('div[id]');
    let activeSectionId: string | null = null;

    sections.forEach((section: HTMLElement, index: number) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;
      const sectionId = section.getAttribute('id');

      if (index === sections.length - 1) {
        if (el.scrollTop > sectionTop - 50) {
          activeSectionId = sectionId;
        }
      } else {
        if (
          el.scrollTop >= sectionTop &&
          el.scrollTop < sectionTop + sectionHeight
        ) {
          activeSectionId = sectionId;
        }
      }
    });

    if (activeSectionId) {
      document.querySelectorAll('.nav-stacked li').forEach((li) => {
        li.classList.remove('active');
      });
      document
        .querySelector(`a[href="#${activeSectionId}"]`)
        ?.parentElement?.classList.add('active');
    }
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// constructor( private route: ActivatedRoute, private router: Router) {

// }
// ngOnInit(): void {
//   this.route.fragment.subscribe(fragment => {
//     this.scrollToSection(fragment);
//   });
// }

// ngAfterViewInit(): void {
//   this.route.fragment.subscribe(fragment => {
//     this.scrollToSection(fragment);
//   });
// }

// private scrollToSection(fragment: string | null): void {
//   if (fragment) {
//     const element = document.getElementById(fragment);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   }
// }
