import { Component} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs-compat/Observable';


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
