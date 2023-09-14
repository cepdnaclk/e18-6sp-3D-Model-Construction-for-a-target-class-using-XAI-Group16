import { Component } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  mlDivFont = "font-Size: 35px; background-color: #1A5276; color: white";
  tlDivFont = "font-Size: 30px;";
  constructor(public router: Router){
  }

  goToMlModel(){
    this.mlDivFont = "font-Size: 35px; background-color: #1A5276; color: white";
    this.tlDivFont = "font-Size: 30px;";
    this.router.navigate(['/ML-model']);
  }
  goTo3DModel(){
    this.mlDivFont = "font-Size: 30px;";
    this.tlDivFont = "font-Size: 35px; background-color: #1A5276; color: white";
    this.router.navigate(['/3D-reconstruction']);
  }
}
