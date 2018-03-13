import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Mail } from './../mail';

@Injectable()
export class ContactoService {

    private baseUrl: string = 'https://medingenio-wa.azurewebsites.net/api/mail'

    constructor(private http: Http) {

    }

    post(mail: Mail): Observable<Response> {

        mail.subject = "Contacto desde pagina Web";
        mail.from = mail.email;
        mail.to = "contacto@aerocafeteros.com";
        mail.body = "Nombre: " + mail.name + ' ' + mail.lastName + '\n' + "Telefono: " + mail.phone + '\n' + 'Mensaje: ' + mail.message;
        mail.customer = "Aerocafeteros";


        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        let options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
        let body = this.serializeObj(mail);
        return this.http.post(`${this.baseUrl}`, body, options).map(res => res.json());

    }

    private serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }
}