import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { DoReqService } from '../services/do-req.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { SingleCarComponent } from '../components/single-car/single-car.component';
import { Car } from '../car';
import { MatDialog } from '@angular/material/dialog';
import { EditCarComponent } from '../components/edit-car/edit-car.component';

/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'action'];
  data: Car[] = null;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private DoReq: DoReqService, private _bottomSheet: MatBottomSheet, public dialog: MatDialog) {}

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.DoReq!.getCars(this.sort.active, this.sort.direction, this.paginator.pageIndex);
          }),
        map(data => {
          // Flip flag to show that loading has finished.
         this.isLoadingResults = false;
         this.isRateLimitReached = false;
         this.resultsLength = Object.keys(data).length;
         return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe((data: Car[]) => {
        console.log(data);
        this.data = data;

      });
  }

  view(car: Car) {
    // console.log(car);
    this._bottomSheet.open(SingleCarComponent, { data : car , panelClass : 'width-for-bottom-card1'});
  }

  edit(car: Car) {
    const dialogRef = this.dialog.open(EditCarComponent, {
      /*width: '250px',*/
      data: car
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  delete(car) {
    console.log(car);
  }
}
