import { Component } from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private sanitizer: DomSanitizer,
    private mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.addSvgIcon('lecture', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/lecture.svg'));
    mdIconRegistry.addSvgIcon('tutorial', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/tutorial.svg'));
    mdIconRegistry.addSvgIcon('lab', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/lab.svg'));
  }
}
