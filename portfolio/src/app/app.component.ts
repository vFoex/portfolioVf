import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    translate.setDefaultLang('en');
    translate.use('en');

    this.matIconRegistry.addSvgIcon(
        "linkedin",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linkedin.svg")
    );

    this.matIconRegistry.addSvgIcon(
        "github",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/github.svg")
    );
  }
}