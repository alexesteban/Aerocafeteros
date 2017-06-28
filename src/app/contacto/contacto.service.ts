import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Mail } from './../mail';

@Injectable()
export class ContactoService {

    private baseUrl: string = 'https://medingenio-wa.azurewebsites.net/api/mail'

    constructor(private http: Http) {

    }

    post(mail:Mail): Observable<Response> {

        mail.subject = "Contacto desde pagina Web";
        mail.from = mail.email;
        mail.to = "contacto@aerocafeteros.com";
        mail.body = "Nombre: " + mail.name + ' ' + mail.lastName + '\n' + "Telefono: " + mail.phone + '\n' + 'Mensaje: ' + mail.message;
        mail.customer = "Aerocafeteros";

        var json = JSON.stringify(mail);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.baseUrl}`,json,{headers:headers}).map(res => res.json());

        }
}