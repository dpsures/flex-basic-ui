import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<ProfileComponent>, @Inject(MD_DIALOG_DATA) public data : any) { }

  ngOnInit() {
    this.dialogRef
    .updateSize('400px', '400px')
    .updatePosition({ top: '50px', right: '500px' });
  }

}
