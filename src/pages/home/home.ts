import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { DayInfoPage } from '../day-info/day-info';


@Component({
  templateUrl: 'setup-questions.html',
})
export class NavigationDetailsPage {
  item;
  public event = {
    month: '1990-02-19',
    timeStarts: '06:00',
    timeEnds: '1990-02-20'
  }


  constructor(params: NavParams,public navCtrl: NavController) {
    this.item = params.data.item;
	}
	goToDayInfo(item){
	 this.navCtrl.push(DayInfoPage);
  }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openNavDetailsPage(item){

   this.navCtrl.push(NavigationDetailsPage, { item: item });
  
  }

}
