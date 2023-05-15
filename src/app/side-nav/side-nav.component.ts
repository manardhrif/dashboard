import { Component, OnInit } from '@angular/core';
import {
  faDashboard,
  faUser,
  faCalendar,
  faMessage,
  faContactBook,
  faRightLeft,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{
 faDashboard= faDashboard;
 faUser= faUser;
 faCalendar= faCalendar;
 faMessage= faMessage;
 faContactBook= faContactBook;
 faRightLeft= faRightLeft;
 constructor(){}
 ngOnInit(): void {
   
 }
}
