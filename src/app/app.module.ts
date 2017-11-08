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

import { QuestionService } from '../providers/question/question.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilCarregarPage,
    PerfilCriarPage
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
    PerfilCriarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuestionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
