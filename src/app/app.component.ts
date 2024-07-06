import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
   Cognito: {
     userPoolId: 'us-east-2_G9QG5fcus',
     userPoolClientId: '44gvu2i3e8ghl940mrnoocrn89',
   }
  }
});
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, TodosComponent],
})
export class AppComponent {
  title = 'amplify-angular-template';
}
