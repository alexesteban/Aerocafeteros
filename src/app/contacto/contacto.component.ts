import { Component, OnInit } from '@angular/core';
import { Mail} from './../mail';
import {ContactoService} from './contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  mail:Mail;
  getData:string;
  postData:string;

  constructor( public contactoService:ContactoService ) { }

  ngOnInit() {
    this.mail = new Mail();
  }

 post(){
   this.contactoService.post(this.mail).subscribe(
     data => this.postData = JSON.stringify(data),
     error => alert(error),
     () => console.log("Finished")
   );

 }

//  post(){
//    this.contactoService.getCurrentTime().subscribe(
//      data => this.postData = JSON.stringify(data),
//      error => alert(error),
//      () => console.log("Finished")
//    );

//  }

 

} 
