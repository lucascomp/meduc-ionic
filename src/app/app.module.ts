import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerfilCarregarPage } from '../pages/perfil-carregar/perfil-carregar';
import { PerfilCriarPage } from '../pages/perfil-criar/perfil.criar';
import { PerfilMenuPage } from '../pages/perfil-menu/perfil-menu';
import { PerfilNivelPage } from '../pages/perfil-nivel/perfil-nivel';
import { PerguntaPage } from '../pages/pergunta/pergunta';

import { ProfileComponent } from '../components/profile/profile.component';
import { PerguntaComponent } from '../components/pergunta/pergunta.component';
import { OpcaoComponent } from '../components/opcao/opcao.component';

import { QuestionService } from '../providers/question/question.service';
import { ProfileService } from '../providers/profile/profile.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilCarregarPage,
    PerfilCriarPage,
    PerfilMenuPage,
    PerfilNivelPage,
    PerguntaPage,
    ProfileComponent,
    PerguntaComponent,
    OpcaoComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilCarregarPage,
    PerfilCriarPage,
    PerfilMenuPage,
    PerfilNivelPage,
    PerguntaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuestionService,
    ProfileService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
