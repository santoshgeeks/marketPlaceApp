import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  avgPerItem = 1000
  remainingValue = 0
  weekSelection=false
  weekWiseData: any = [
    {
      weekName: "Week 1", isWeekSelected: false, data: [
        { id:"ID1week1", channel: "01", item: "Actor1",
         selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 150 },
        { id:"ID2week1", channel: "01", item: "Actor2", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 150 },
        { id:"ID3week1", channel: "01", item: "Acto3", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 10 },
        { id:"ID4week1", channel: "01", item: "Actor4", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 250 },
        { id:"ID5week1", channel: "01", item: "Actor5", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 350 },
        { id:"ID6week1", channel: "01", item: "Actor6", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 20 },
        { id:"ID7week1", channel: "02", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 30 },
        { id:"ID8week1", channel: "02", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 200 },
        { id:"ID9week1", channel: "02", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 10 },
        { id:"ID10week1", channel: "02", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 15 },
        { id:"ID11week1", channel: "03", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 140 },
        { id:"ID12week1", channel: "03", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 110 },
        { id:"ID13week1", channel: "03", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 120 },
        { id:"ID14week1", channel: "03", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 100 },
        
        { id:"ID15week1", channel: "04", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 110 },
        { id:"ID16week1", channel: "04", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 120 },
        { id:"ID17week1", channel: "04", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 140 },
        { id:"ID18week1", channel: "04", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 160 },
        { id:"ID19week1", channel: "04", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 170 },
        
        { id:"ID20week1", channel: "05", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 110 },
        { id:"ID21week1", channel: "05", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 190 },
        { id:"ID22week1", channel: "05", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 110 },
        { id:"ID23week1", channel: "05", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 130 },
        { id:"ID24week1", channel: "05", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 110 },
        
        { id:"ID25week1", channel: "06", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 340 },
        { id:"ID26week1", channel: "06", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 120 },
        { id:"ID27week1", channel: "06", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 120 },
        { id:"ID28week1", channel: "06", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 110 },
        { id:"ID29week1", channel: "06", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 30 },
        { id:"ID30week1", channel: "06", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 50 },
      
      ]
    },
    {
      weekName: "Week 2", isWeekSelected: false, data: [
        { id:"ID1week2", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 300 },
        { id:"ID2week2", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 300 },
        { id:"ID3week2", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 300 },
        { id:"ID4week2", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 300 },
        { id:"ID5week2", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 300 },
        { id:"ID6week2", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 300 },
        { id:"ID7week2", channel: "02", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 300 },
        { id:"ID8week2", channel: "02", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 300 },
        { id:"ID9week2", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 300 },
        { id:"ID10week2", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 300 },
        { id:"ID11week2", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 300 },
        { id:"ID12week2", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 300 },
        { id:"ID13week2", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 300 },
        { id:"ID14week2", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 300 },
        { id:"ID15week2", channel: "02", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 300 },
        { id:"ID16week2", channel: "02", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 300 },
        { id:"ID17week2", channel: "02", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 300 },
        { id:"IDw18eek2", channel: "02", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 300 },
        { id:"ID19week2", channel: "03", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 300 },

      ]
    },
    {
      weekName: "Week 3", isWeekSelected: false, data: [
        { id:"ID1week3", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 250 },
        { id:"ID2week3", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 250 },
        { id:"ID3week3", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 250 },
        { id:"ID4week3", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 250 },
        { id:"ID5week3", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 250 },
        { id:"ID6week3", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 250 },
        { id:"ID7week3", channel: "02", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 250 },
        { id:"ID8week3", channel: "02", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 250 },

        { id:"ID9week3", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 250 },
        { id:"ID10week3", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 250 },
        { id:"ID11week3", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 250 },
        { id:"ID12week3", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 250 },
        { id:"ID13week3", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 250 },
        { id:"ID14week3", channel: "03", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 250 },

      ]
    },
    {
      weekName: "Week 4", isWeekSelected: false, data: [
        { id:"ID1week4", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 450 },
        { id:"ID2week4", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 450 },
        { id:"ID3week4", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 450 },
        { id:"ID4week4", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 450 },
        { id:"ID5week4", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 450 },
        { id:"ID6week4", channel: "01", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 450 },
        { id:"ID7week4", channel: "02", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 450 },
        { id:"ID8week4", channel: "02", item: "Actor", selected: false, office: "BJ", postal: "ZD", cripto: "05", budget: 450 },

        { id:"ID9week4", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 450 },
        { id:"ID10week4", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 450 },
        { id:"ID11week4", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 450 },
        { id:"ID12week4", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 450 },
        { id:"ID13week4", channel: "01", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 450 },
        { id:"ID14week4", channel: "03", item: "Actress", selected: false, office: "BJ", postal: "BD", cripto: "05", budget: 450 },

      ]
    },

  ]
  weekWiseTable: any = []
  vertualBasket: any = []
  displayedColumns1: string[] = ['channel', 'item', 'office', 'postal', 'cripto', 'budget', 'action'];

  dataSource1: any = new MatTableDataSource<any>();
  displayedColumns2: string[] = ['channel', 'item', 'office', 'postal', 'cripto', 'budget', 'action'];

  dataSource2: any
  channel1: any = []
  channel2: any = []
  channel3: any = []
  channel4: any = []
  channel5: any = []
  channel6: any = []
  totalBudgetAdded = 0
  avgPerItemspent = 0
  selectedweekAndMonth:any
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(public dialog: MatDialog) { 
    var datePipe = new DatePipe("en-US");
    let month = datePipe.transform(new Date(), 'MMMM');
    let year= new Date().getFullYear()
    this.selectedweekAndMonth=month+" "+year
  }
  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  selectWeek(weekList: any, index: any) {
    this.dataSource1 = []
    var datePipe = new DatePipe("en-US");
    let month = datePipe.transform(new Date(), 'MMMM');
    let year= new Date().getFullYear()
    this.selectedweekAndMonth=weekList.weekName+","+month+" "+year
    for (let i = 0; i < this.weekWiseData.length; i++) {
      this.weekWiseData[i].isWeekSelected = false
      if (weekList.weekName == this.weekWiseData[i].weekName) {
        this.weekWiseTable = this.weekWiseData[i].data
        this.dataSource1 = new MatTableDataSource<any>(this.weekWiseTable);
        this.resetPagination()
      }
    }
    this.weekWiseData[index].isWeekSelected = true
    this.clear()
  }
  calculations(data: any) {
    for(let i=0; i<this.weekWiseTable.length; i++){
      if(data.id==this.weekWiseTable[i].id){
        this.weekWiseTable[i].selected = true
      }
    }
    this.totalBudgetAdded += data.budget
    this.avgPerItemspent = this.avgPerItem - this.totalBudgetAdded
    this.remainingValue = this.avgPerItemspent
  }
  disableIfGreaterThan3(data: any) {
    this.resetPagination()
    for (let i = 0; i < this.weekWiseTable.length; i++) {
      if (data.channel == this.weekWiseTable[i].channel) {
        this.weekWiseTable[i].selected = true
      }
    }
  }
  enableIfLessThan3(data: any) {
    for (let i = 0; i < this.weekWiseTable.length; i++) {
      if (data.channel == this.weekWiseTable[i].channel) {
        this.weekWiseTable[i].selected = false
      }
    }
  }
  RemoveElementFromArray(channel:any,element: any) {
    channel.forEach((value:any,index:any)=>{
        if(value==element) 
        channel.splice(index,1);
    });
}
  removeBasket(index:any,data:any){
    for(let i=0; i<this.channel1.length; i++){
      if(this.channel1[i].id==this.vertualBasket[index].id){
        this.remainingValue=this.remainingValue+this.vertualBasket[index].budget
        this.channel1.splice(i,1)
      }
    }
   for(let i=0; i<this.channel2.length; i++){
      if(this.channel2[i].id==this.vertualBasket[index].id){
        this.remainingValue=this.remainingValue+this.vertualBasket[index].budget
        this.channel2.splice(i,1)
      }
    }
    for(let i=0; i<this.channel3.length; i++){
      if(this.channel3[i].id==this.vertualBasket[index].id){
        this.remainingValue=this.remainingValue+this.vertualBasket[index].budget
        this.channel3.splice(i,1)
      }
    }
    for(let i=0; i<this.channel4.length; i++){
      if(this.channel4[i].id==this.vertualBasket[index].id){
        this.remainingValue=this.remainingValue+this.vertualBasket[index].budget
        this.channel4.splice(i,1)
      }
    }
    for(let i=0; i<this.channel5.length; i++){
      if(this.channel5[i].id==this.vertualBasket[index].id){
        this.remainingValue=this.remainingValue+this.vertualBasket[index].budget
        this.channel5.splice(i,1)
      }
    }
    for(let i=0; i<this.channel6.length; i++){
      if(this.channel6[i].id==this.vertualBasket[index].id){
        this.remainingValue=this.remainingValue+this.vertualBasket[index].budget
        this.channel6.splice(i,1)
      }
    }
    
    if(this.channel1.length<3){
      this.weekWiseTable.map((item:any)=>{
        const getValue=this.channel1.find((chItem:any)=>chItem.id==item.id)
        if(!getValue && item.channel=="01"){
          item.selected=false
          console.log(getValue);
        }
      })
    }
    if(this.channel2.length<3){
      this.weekWiseTable.map((item:any)=>{
        const getValue2=this.channel2.find((chItem:any)=>chItem.id==item.id)
        if(!getValue2 && item.channel=="02"){
          item.selected=false
          console.log(getValue2);
        }
      })
    }
    if(this.channel3.length<3){
      this.weekWiseTable.map((item:any)=>{
        const getValue3=this.channel3.find((chItem:any)=>chItem.id==item.id)
        if(!getValue3 && item.channel=="03"){
          item.selected=false
          console.log(getValue3);
        }
      })
    }
    if(this.channel4.length<3){
      this.weekWiseTable.map((item:any)=>{
        const getValue4=this.channel4.find((chItem:any)=>chItem.id==item.id)
        if(!getValue4 && item.channel=="04"){
          item.selected=false
          console.log(getValue4);
        }
      })
    }
    if(this.channel5.length<3){
      this.weekWiseTable.map((item:any)=>{
        const getValue5=this.channel5.find((chItem:any)=>chItem.id==item.id)
        if(!getValue5 && item.channel=="05"){
          item.selected=false
          console.log(getValue5);
        }
      })
    }
    if(this.channel6.length<3){
      this.weekWiseTable.map((item:any)=>{
        const getValue6=this.channel6.find((chItem:any)=>chItem.id==item.id)
        if(!getValue6 && item.channel=="06"){
          item.selected=false
          console.log(getValue6);
        }
      })
    }
    if(this.remainingValue==this.avgPerItem){
      this.remainingValue=0
      this.totalBudgetAdded =0
      this.avgPerItemspent = 0
      this.remainingValue = 0
      }
    this.vertualBasket.splice(index, 1)
    this.dataSource1= new MatTableDataSource<any>(this.weekWiseTable);
    this.dataSource2= new MatTableDataSource<any>(this.vertualBasket);
    this.resetPagination()
  }
  pageEvent:any
  onPaginateChange(event:any){
    console.log(event);
    
  }
  addIntoVertualBasket(data: any, index: any) {
    console.log(data);
    if (data.budget < this.remainingValue || this.remainingValue == 0) {
      if (this.totalBudgetAdded < this.avgPerItem) {
        if (data.channel == '01' && this.channel1.length < 3) {
          this.channel1.push(data)
          this.calculations(data)
          if (this.channel1.length == 3){
            this.disableIfGreaterThan3(data)
            
          }
        }
        if (data.channel == '02' && this.channel2.length < 3) {
          this.channel2.push(data)
          console.log(index);
          this.calculations(data)
          if (this.channel2.length == 3){
            this.disableIfGreaterThan3(data)
          }
           
        }
        if (data.channel == '03' && this.channel3.length < 3) {
          console.log(index);
          this.channel3.push(data)
          this.calculations(data)
          if (this.channel3.length == 3){
            this.disableIfGreaterThan3(data)
          }
         
        }
        if (data.channel == '04' && this.channel4.length < 3) {
          this.channel4.push(data)
          this.calculations(data)
          if (this.channel4.length == 3){
            this.disableIfGreaterThan3(data)
          }
          
        }
        if (data.channel == '05' && this.channel5.length < 3) {
          this.channel5.push(data)
          this.calculations(data)
          if (this.channel5.length == 3){
            this.disableIfGreaterThan3(data)
          }
        }
        if (data.channel == '06' && this.channel6.length < 3) {
          this.channel6.push(data)
          this.calculations(data)
          if (this.channel6.length == 3){
            this.disableIfGreaterThan3(data)
          }
        }
        let temp = []
        temp = [...this.channel1, ...this.channel2, ...this.channel3, ...this.channel4, ...this.channel5, ...this.channel6]
        this.vertualBasket = temp
        console.log(temp);
        this.dataSource2 = new MatTableDataSource<any>(this.vertualBasket);
      }
    } else {
      this.openDialog()
    }
    this.dataSource1 = new MatTableDataSource<any>(this.weekWiseTable);
    this.resetPagination()
  }
  beforeFilterDataSourece1: any = []
  clearFilter() {
    this.filterEvent = ""

  }
  filterEvent = ""
  applyFilter(event: Event) {
    this.dataSource1.filter = this.filterEvent.trim().toLowerCase();

  }
  @ViewChild(MatPaginator,{static:true}) paginatorsetToFirst:any;
  resetPagination() {
    this.dataSource1.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.resetPagination()
  }
  clear() {
    for (let i = 0; i < this.weekWiseTable.length; i++) {
      this.weekWiseTable[i].selected = false
    }
    this.vertualBasket = []
    this.dataSource2 = new MatTableDataSource<any>();
    this.dataSource1 = new MatTableDataSource<any>(this.weekWiseTable);
    this.paginatorsetToFirst.pageIndex = 0;
    this.totalBudgetAdded = 0
    this.avgPerItemspent = 0
    this.remainingValue = 0
    this.channel1 = []
    this.channel2 = []
    this.channel3 = []
    this.channel4 = []
    this.channel5 = []
    this.channel6 = []
    this.resetPagination()
  }
  ngOnInit(): void {
  }

}
