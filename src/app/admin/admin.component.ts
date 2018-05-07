import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{
  lunches: Observable<any[]>;

  newCaterer;
  newComments = "";
  newImage = "";
  newDate = new Date();
  db;
  dbRef;
  dbName = "lunches"

constructor(db: AngularFireDatabase){
  this.db = db;
  this.dbRef = db.list(this.dbName);
  this.lunches = this.dbRef.snapshotChanges();
}


save(adminForm: NgForm){
  console.log("I saved!");
  this.dbRef.push({caterer: this.newCaterer, comments: this.newComments, image: this.newImage, date: this.newDate.getTime()})
  adminForm.reset();
}

delete(key: string){
  this.dbRef.remove(key);
}

}
