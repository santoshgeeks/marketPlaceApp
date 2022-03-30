import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-submitted-basket',
  templateUrl: './submitted-basket.component.html',
  styleUrls: ['./submitted-basket.component.scss']
})
export class SubmittedBasketComponent implements OnInit {
@Input() basketDetails:any
  myBasket: any = []
  myOpp: any = [
    {
      springCollection: "Soup Rome",
      opsId:1,
      basketName:"basket 1",
      totatBasketValue:360,
      basketData: [
        {
        budget: 220,
        channel: "02",
        cripto: "05",
        id: "ID2week1",
        item: "Actor1",
        office: "BJ",
        postal: "ZD",
      },
      {
        budget: 130,
        channel: "02",
        cripto: "05",
        id: "ID2week1",
        item: "Actor2",
        office: "BJ",
        postal: "ZD",
      },
      ],
      channel: "04",
      cost: 10,
      weight: 1350,
      myopp:195,
    },
    {
      springCollection: "Major Tane",
      opsId:2,
      basketName:"basket 2",
      totatBasketValue:330,
      basketData: [
        {
        budget: 230,
        channel: "02",
        cripto: "05",
        id: "ID2week1",
        item: "Actor3",
        office: "BJ",
        postal: "ZD",
      },
      {
        budget: 100,
        channel: "02",
        cripto: "05",
        id: "ID2week1",
        item: "Actor4",
        office: "BJ",
        postal: "ZD",
      },
      ],
      channel: "04",
      cost: 10,
      weight: 1616,
      myopp:195,
    },
    {
      springCollection: "Wear Tex",
      opsId:3,
      basketName:"basket 3",
      totatBasketValue:400,
      basketData: [
        {
        budget: 260,
        channel: "02",
        cripto: "05",
        id: "ID2week1",
        item: "Actor5",
        office: "BJ",
        postal: "ZD",
      },
      {
        budget: 140,
        channel: "02",
        cripto: "05",
        id: "ID2week1",
        item: "Actor6",
        office: "BJ",
        postal: "ZD",
      },
      ],
      channel: "04",
      cost: 10,
      weight: 1723,
      myopp:195,
    }
  ]
  selectBasket: any = [
    {
      channel: "04",
      cost: 10,
      item: "tabke"
    },
    {
      channel: "04",
      cost: 320,
      item: "basket"
    },
    {
      channel: "04",
      cost: 140,
      item: "ducks"
    },
  ]
  weight: any = []
  reciept: any = []
  dataSourcemyBasket: any = new MatTableDataSource<any>();
  displayedColumnsmyBasket: string[] = ['channel', 'item', 'cost'];
  dataSourceMyOpp: any = new MatTableDataSource<any>();
  displayedColumnsMyopp: string[] = ['springCollection', 'weight'];
  dataSourceSelectedbasket: any = new MatTableDataSource<any>();
  displayedColumnsSelectedbasket: string[] = ['channel', 'item', 'cost'];
  dataSourceWeight: any = new MatTableDataSource<any>();
  displayedColumnsWeight: string[] = ['min', 'max'];
  dataSourceReciept: any = new MatTableDataSource<any>();
  displayedColumnsReciept: string[] = ['basketName', 'myOpp', 'Weight', 'action'];

  constructor(
    private commonService: CommonService,
    private cdr: ChangeDetectorRef,
    private _snackBar: MatSnackBar
  ) {

  }
  searchByItemControl = new FormControl("",Validators.required);
  options: string[] = ['Actor6', 'Actor5', 'Actor4','Actor3', 'Actor2', 'Actor1'];
  filteredOptions: Observable<any[]> | any;
  basketValue:any=0
  ngOnInit(): void {
    this.dataSourceMyOpp = this.myOpp
    this.filteredOptions = this.searchByItemControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  basketData=[
    {basketName: 'Old one ', basketData: [
      {
        budget: 250,
        channel: "02",
        cripto: "05",
        id: "ID2week1",
        item: "Actor1",
        office: "BJ",
        postal: "ZD",
      },
      {
        budget: 130,
        channel: "02",
        cripto: "05",
        id: "ID2week1",
        item: "Actor1",
        office: "BJ",
        postal: "ZD",
      },
    ], channel: '', cost: 200}
  ]
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes){
      this.basketValue=0
      let temp:any=[]
      temp=this.basketData
      this.basketDetails=changes["basketDetails"].currentValue.concat(temp)
     for(let i=0; i<this.basketDetails.length; i++){
      this.basketValue+=this.basketDetails[i].cost
     }
    }
    
  }
  onlyNumberKey(event:any) {
    let charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
  count=0
  selectOps(data:any, index:number){
    this.indexValue=index
    this.dataSourceSelectedbasket =data.basketData
    this.basketValueForSelected=0
    this.basketValueForSelected =data.totatBasketValue
    console.log(data);
    this.count +=1
    this.reciept.push(data)
    console.log(this.reciept);
    var uniqeSelction = this.reciept.map(function(obj:any) { return obj; });
    uniqeSelction = uniqeSelction.filter(function(v:any,i:any) { return uniqeSelction.indexOf(v) == i; });
    this.reciept=uniqeSelction
    this.dataSourceReciept =[...this.reciept]
    // console.log(ages);
    if(this.count>this.reciept.length){
      this._snackBar.open("Already you have slected", "Ok",{
        duration:1000
      })
    }
  }
  byValue=""
  byWeight=""
  filterdMyOpp:any
  search(){
    console.log(this.searchByItemControl.value);
    if(this.byValue!="" && this.byWeight!="" && this.searchByItemControl.valid){
      this.myOpp.filter((a:any)=>{
        for(let i=0; i<a.basketData.length; i++){
          if(a.weight==parseInt(this.byWeight) && a.totatBasketValue==parseInt(this.byValue) && a.basketData[i].item==this.searchByItemControl.value){
            console.log(a);
            this.filterdMyOpp=a
          }
        }
      })
    }else{
      this._snackBar.open("Filter fields can't be empty")
    } 
    let temp=[]
    temp.push(this.filterdMyOpp)
    // this.myOpp=temp
    this.dataSourceMyOpp=temp
  }
  clear(){
    this.byValue=""
    this.byWeight=""
    this.searchByItemControl.reset("")
    this.dataSourceMyOpp=this.myOpp
  }
  deleteReciepts(index:number){
    console.log(index);
    this.reciept.splice(index,1)
    this.dataSourceReciept =[...this.reciept]
  }
  indexValue=-1
  basketValueForSelected=0
  selectBaket(data:any,index:any){
    console.log(data);
    
  }

}
