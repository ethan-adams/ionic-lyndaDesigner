import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import "rxjs/add/operator/map";
import { Http } from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private http: Http, public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.http.get('/assets/data.json')
      .map(response => response.json())
      .subscribe(data => console.log(data));
  }

}
