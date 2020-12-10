import { Component } from '@angular/core';
import { FatchuserdataService } from './fatchuserdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any;
  pageOfItems: Array<any>;
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];
constructor(private fetchData: FatchuserdataService) {}
  ngOnInit() {
    this.fetchPosts();
  }
  fetchPosts() {
    this.fetchData.getData().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }

  onTableDataChange(event) {
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}
