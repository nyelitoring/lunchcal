import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-lunch-list',
  templateUrl: './lunch-list.component.html',
  styleUrls: ['./lunch-list.component.css']
})
export class LunchListComponent{

  lunches: Observable<any[]>;

  constructor(db: AngularFireDatabase){
    this.lunches = db.list('lunches').valueChanges();
  }

  goTo(link: string){
    window.open(link, "_blank");
  }
}
