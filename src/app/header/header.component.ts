import { Component, OnInit } from '@angular/core';
import {ServicealquranService} from '../service/servicealquran.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  datasurat:any =[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private servicealquran:ServicealquranService) {
    this.servicealquran.getData().subscribe(data=>{
      console.log(data);
      this.datasurat = data;
    })
   }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasurat.filter = filterValue.trim().toLowerCase();
  }

}
