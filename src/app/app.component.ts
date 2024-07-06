import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { Amplify } from 'aws-amplify';
import { PrimeNGConfig } from 'primeng/api';
import outputs from '../../amplify_outputs.json';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, TodosComponent],
})
export class AppComponent {
  title = 'amplify-angular-template';

  constructor(private config: PrimeNGConfig) {}

  ngOnInit(): void {
    this.config.zIndex = {
      modal: 1100,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100,
    };
    //this.translateService.setDefaultLang('pt-br');
  }

  translate(lang: string) {
    // this.translateService.use(lang);
    // this.translateService
    //   .get('primeng')
    //   .subscribe((res) => this.config.setTranslation(res));
  }
}
