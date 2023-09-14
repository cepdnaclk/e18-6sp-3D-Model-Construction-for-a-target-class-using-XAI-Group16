import { HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent {
  private base64textString:String="";
  buttonName = "Try"
  output : any
  received = ""
  filename = ''
  url : any = null;
  prediction:any = "";
  ourfile:any;

  constructor(private httpClient: HttpClient){}


  onClickSubmit(event: any) {
    var files = event.target.files;
    var file = files[0];
    if (files && file) {
      this.url = "/assets/"+file.name;
      this.ourfile = file;
      console.log(this.ourfile);
//       var reader = new FileReader();
//       reader.onload =this._handleReaderLoaded.bind(this);
//       reader.readAsBinaryString(file);
    }else{
      this.url = null;
    }
    this.prediction = '';
  }

  checkFile(){
    const headers= new HttpHeaders()
      .set('ngrok-skip-browser-warning','test');
//       .set('responseType': 'blob' );

    this.prediction = "predicting...";
    var formData: any = new FormData();
    console.log("pre");
    formData.append('file', this.ourfile);
    console.log(formData.get('file'));
    this.httpClient.post<any>('https://47ae-34-138-161-192.ngrok-free.app/classify',formData,{'headers':headers})
          .subscribe(x => {
            console.log("done");
            console.log(x);
            this.prediction = x.result;
          });
    //send the request
  }

  }

