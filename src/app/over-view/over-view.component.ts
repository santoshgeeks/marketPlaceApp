import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.scss']
})
export class OverViewComponent implements OnInit {
  dataSource1: any = new MatTableDataSource<any>();
  displayedColumns1: string[] = ['basket1', 'basket2', 'myopp', 'outcome'];
  dataSource2: any = new MatTableDataSource<any>();
  displayedColumns2: string[] = ['channel', 'item', 'cripto'];
  dataSource3: any = new MatTableDataSource<any>();
  displayedColumns3: string[] =['channel', 'item', 'Cripto'];
  dataSource4: any = new MatTableDataSource<any>();
  displayedColumns4: string[] = ['Date&Time', 'Deliver', 'Deposite', 'outcome'];
  constructor(private commonService:CommonService) {
   
   }

  ngOnInit(): void {
  }

}
