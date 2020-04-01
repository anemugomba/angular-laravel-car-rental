import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { DoReqService, Car } from '../services/do-req.service';

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
  data = null;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private DoReq: DoReqService) {}

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
      ).subscribe((data) => {
        console.log(data);
        this.data = data;

      });
  }

  view(car) {
    console.log(car);
  }

  edit(car) {
    console.log(car);
  }

  delete(car) {
    console.log(car);
  }
}
