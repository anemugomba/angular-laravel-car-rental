import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DoReqService } from '../services/do-req.service';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private DoReq: DoReqService) { }

  filedata: any;
  form = {
    name : null,
    description : null,
    price : null
  };

  myFile;

    public error = {
      name : null,
      description : null,
      price : null,
      image : null
    };

    fileEvent(e) {
        this.filedata = e.target.files[0];
    }

  ngOnInit(): void {
    this.DoReq.getCars().subscribe(data => console.log(data), error => console.error(error));
  }



  onSubmit(f: NgForm) {
    const myFormData = new FormData();
    myFormData.append('image', this.filedata);
    myFormData.append('name', this.form.name);
    myFormData.append('description', this.form.description);
    myFormData.append('price', this.form.price);
    this.DoReq.upload(myFormData).subscribe(data => {
      console.log(data);
 }, err => this.handleError(err));

  }

  handleError(err) {
      this.error = err.error.errors;
  }
}
