import { Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit{
  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    let headers = new HttpHeaders();

    headers=headers.set('content-type','application/json');
    headers=headers.set('Access-Control-Allow-Origin','*');
    headers=headers.set('Access-Control-Allow-Headers','*');
    headers=headers.set('Access-Control-Allow-Methods',' GET, DELETE, POST, OPTIONS');

    // const headers = {
    //   // 'Authorization': 'Basic ' + btoa(username + ":" + password),
    //   'Access-Control-Allow-Origin': true,
    //   'Content-Type': 'application/json; charset=utf-8',
    //   "X-Requested-With": "XMLHttpRequest"
    // }
    //console.log(this.http.get('http://41.219.14.123:5779/api/marcheEnDirect/GetProfondeursMarche').subscribe());
    //http://10.10.10.20:5779/api/marcheEnDirect/GetProfondeursMarche
    this.http
      .get('https://api.publicapis.org/entries', {
        headers: headers
      })
      .subscribe(data => {
        console.log(data);
      });

    //console.log(headers);


  }




}
