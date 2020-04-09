import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from 'src/app/car';
import { NgForm } from '@angular/forms';
import { DoReqService } from 'src/app/services/do-req.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  mySubscription: any;
  constructor(public dialogRef: MatDialogRef<EditCarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Car,
              private DoReq: DoReqService, private router: Router) { }

              filedata: any;
              form = {
                name : null,
                description : null,
                price : null,
                id : null
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
                this.form = {
                  name : this.data.name,
                  description : this.data.description,
                  price : this.data.price,
                  id : this.data.id
                };
              }



              onSubmit(f: NgForm) {
                const myFormData = new FormData();
                myFormData.append('image', this.filedata);
                myFormData.append('name', this.form.name);
                myFormData.append('description', this.form.description);
                myFormData.append('price', this.form.price);
                myFormData.append('id', this.form.id);

                this.DoReq.upDateCar(myFormData).subscribe(data => {
                  this.dialogRef.close();

                  this.router.navigateByUrl('/admin', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['/admin/all-cars']);
                });
             }, err => this.handleError(err));

              }

                handleError(err) {
                  // console.log(err);
                  this.error = err.error.errors;
                }
}
