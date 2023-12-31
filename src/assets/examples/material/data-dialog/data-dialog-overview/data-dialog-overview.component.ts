import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-data-dialog-overview',
  templateUrl: './data-dialog-overview.component.html',
  styleUrls: ['./data-dialog-overview.component.scss']
})
export class DataDialogOverviewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

}
