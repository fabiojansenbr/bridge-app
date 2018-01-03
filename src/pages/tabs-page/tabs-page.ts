import { Component } from '@angular/core';

import { NavParams, NavController } from 'ionic-angular';
import { MyEventsPage } from '../myEvents/myEvents';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
import { UserData } from '../../providers/user-data';
import { LoginPage } from '../login/login';

@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MapPage;
  tab4Root: any = MyEventsPage;
  mySelectedIndex: number;
  isLoggedIn: boolean = false;
  navParams: NavParams;
  constructor(public userData: UserData, public navCtrl: NavController) {
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.loggedIn(hasLoggedIn === true);
    });
  }
  loggedIn(isLoggedIn:boolean){
    this.isLoggedIn = isLoggedIn;
    if(!this.isLoggedIn){
      this.navCtrl.push(LoginPage);
    }
  }
}
