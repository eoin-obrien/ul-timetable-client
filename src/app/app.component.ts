import {Component} from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Event as NavigationEvent, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = true;

  constructor(private router: Router,
              private sanitizer: DomSanitizer,
              private mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.addSvgIcon('lecture', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/lecture.svg'));
    mdIconRegistry.addSvgIcon('tutorial', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/tutorial.svg'));
    mdIconRegistry.addSvgIcon('lab', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/lab.svg'));
    router.events.subscribe((navigationEvent: NavigationEvent) => {
      this.navigationInterceptor(navigationEvent);
    });
  }

  private navigationInterceptor(navigationEvent: NavigationEvent): void {
    // Enter loading state when navigation starts
    if (navigationEvent instanceof NavigationStart) {
      this.loading = true;
    }

    // Leave loading state when navigation ends
    if (navigationEvent instanceof NavigationEnd
      || navigationEvent instanceof NavigationCancel
      || navigationEvent instanceof NavigationError) {
      this.loading = false;
    }
  }
}
