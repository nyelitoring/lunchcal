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
  caterers: Observable<any[]>;

  newCaterer;
  newComments = "";
  newImage = "";
  newDate = new Date();
  newLink = "";
  db;
  dbRef;
  dbName = "lunches"
  catererDbRef;


constructor(db: AngularFireDatabase){
  this.db = db;
  this.dbRef = db.list(this.dbName);
  this.lunches = this.dbRef.snapshotChanges();
  this.catererDbRef = db.list("caterers");
  this.caterers = this.catererDbRef.valueChanges();
}


save(adminForm: NgForm){
  this.dbRef.push({caterer: this.newCaterer, comments: this.newComments, image: this.newImage, date: this.newDate.getTime(), link: this.newLink})
  adminForm.reset();
}

delete(key: string){
  this.dbRef.remove(key);
}

apply(caterer: any){
  this.newCaterer = caterer.name;
  this.newImage = caterer.image;
  this.newLink = caterer.link;
}

}
