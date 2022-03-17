import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'veterinarian2203';

  constructor(private translateService: TranslateService) {}

  changeLang(lang: string): void {
    this.translateService.use(lang);
  }

  getEnv(): string {
    return environment.production ? 'PROD' : 'DEV';
  }
}
