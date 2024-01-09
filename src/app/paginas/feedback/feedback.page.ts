// feedback.page.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage {
  userName: string = '';
  userEmail: string = '';
  userFeedback: string = '';

  constructor(
    private http: HttpClient,
    private alertController: AlertController
  ) {}

  async enviarFeedback() {
    const feedback = {
      name: this.userName,
      email: this.userEmail,
      feedback: this.userFeedback,
    };

    // Enviar feedback para um serviço de backend
    try {
      const response = await this.http.post('URL_DO_SEU_BACKEND', feedback).toPromise();
      console.log('Feedback enviado:', response);
      this.mostrarAlerta('Feedback Enviado', 'Obrigado pelo seu feedback!');
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
      this.mostrarAlerta('Erro', 'Não foi possível enviar o feedback. Tente novamente mais tarde.');
    }
  }

  async mostrarAlerta(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
