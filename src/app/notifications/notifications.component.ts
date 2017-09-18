import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<NotificationsComponent>, @Inject(MD_DIALOG_DATA) public data : any) { }

  ngOnInit() {
    this.dialogRef
    .updateSize('400px', '400px')
    .updatePosition({ top: '50px', right: '650px' });
  }

}
