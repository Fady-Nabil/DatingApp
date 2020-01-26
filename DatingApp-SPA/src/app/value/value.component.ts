import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  // this method will return data from api and we need to subscribe this data.
  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
          this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
