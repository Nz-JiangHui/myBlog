import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  encapsulation:ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles.css','./app.component.css']
})
export class AppComponent implements OnInit{
  title= 'Tour of Heroes'
  constructor(){

  }
  ngOnInit():void{}

}
