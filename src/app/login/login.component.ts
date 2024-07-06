import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  AmplifyAuthenticatorModule,
  translations,
} from '@aws-amplify/ui-angular';
import { generateClient } from 'aws-amplify/data';
import { I18n } from 'aws-amplify/utils';
import { Schema } from '../../../amplify/data/resource';

const client = generateClient<Schema>();

I18n.putVocabularies(translations);
I18n.setLanguage('pt');

I18n.putVocabularies({
  pt: {
    'Reset Password': 'Redefinir a senha',
    'Enter your email': 'Insira o e-mail',
    'O email': 'E-mail',
  },
});

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, AmplifyAuthenticatorModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  protected logoIMG: string = 'assets/img/logo.png';

  constructor() {}

  ngOnInit(): void {}
}
