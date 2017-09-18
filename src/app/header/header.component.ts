import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material";

import { ProfileComponent } from "../profile/profile.component";
import { NotificationsComponent } from "../notifications/notifications.component";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  language = [
    {value: 'en', viewValue: 'English'},
    {value: 'es', viewValue: 'Spanish'}
  ];

  constructor(private dialog : MdDialog) { }

  ngOnInit() {
  }

  openProfile(){
    this.dialog.open(ProfileComponent,{
      data : {
        animal : "panda"
      }
    })
  }

  openNotifications(){
    this.dialog.open(NotificationsComponent,{
      data : {
        animal : "panda"
      }
    })
  }

}
