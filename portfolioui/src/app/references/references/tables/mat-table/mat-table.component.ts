// import { trigger, state, style, transition, animate } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Entries, Entry } from 'src/app/references/models/itunes-data.model';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css'],
  // animations: [
  //   trigger('detailExpand', [
  //     state('collapsed', style({ height: '0px', minHeight: '0' })),
  //     state('expanded', style({ height: '*' })),
  //     transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  //   ]),
  // ],
})
export class MatTableComponent implements OnInit, AfterViewInit {
  @Input() topAlbums!: Entry[];

  // Table Value
  displayedColumns = [
    'select',
    'image',
    'artist',
    'latestAlbum',
    'category',
    'releaseDate',
    'price',
    'actions'
  ];
  dataSource!: MatTableDataSource<Entries>;

  // Pagination
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Sorting
  @ViewChild(MatSort) sort!: MatSort;

  // Selection
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<Entries>(this.allowMultiSelect, this.initialSelection);

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.modifyData(this.topAlbums));
  }

  /*
  * Setting the Pagination and Sorting of the datasource after the view has been initialized 
  */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /*
  * This method Modifies the API data to have a synchronized {key: value} structure
    to enable sorting 
  */
  modifyData(originalData: Entry[]): Entries[] {
    const modifiedData: Entries[] = [];
    originalData.forEach(element => {
      modifiedData.push(new Entries(
        element['im:image'][0].label,
        element['im:image'][0].attributes.height,
        element['im:artist'].label,
        element['im:artist'].attributes ? element['im:artist'].attributes.href : undefined,
        element['im:name'].label,
        element.category.attributes.term,
        new Date(element['im:releaseDate'].attributes.label),
        element['im:price'].attributes.amount
      ));
    });
    return modifiedData;
  }

  /*
  * This method filters the data in dataSource based on the filter value
  */
  filterData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*
  * This method verifies whether all rows are selected 
  */
  isAllSelected(): boolean {
    const selected = this.selection.selected.length;
    const numberOfRows = this.dataSource.data.length;
    return selected === numberOfRows;
  }

  /*
  * This method toggles the main selection checkbox
  * It selects all rows if they are not selected; otherwise clear selection
  */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /*
  * This method triggers appropriate events for action buttons in the table
  * 'expand' expands the row
  * 'delete' deletes the row by slicing it and then re-assigning the data in dataSource
  */
  actionEvent(event: MouseEvent, element: Entries, action: string) {
    event.stopPropagation();
    if (action === 'expand') {
      // expandedElement = element if they are different. expandedElement = null if they expandedElement & element are similar
      // this.expandedElement = this.expandedElement === element ? null : element;
    }
    else if (action === 'delete') {
      const index = this.dataSource.data.indexOf(element);
      if(index > -1) this.dataSource.data.splice(index, 1);
      this.dataSource.data = this.dataSource.data;
    }
    else {
      // no code here 
    }
  }

  /*
  * This method returns the total price from selected row's price in the table
  * 't.price' is converted from string to number using '+' operator 
  */
  getTotalPrice(): number {
    // return this.dataSource.data.map(t => +t.price).reduce((acc, value) => acc + value, 0);
    return this.selection.selected.map(t => +t.price).reduce((acc, value) => acc + value, 0);
  }

}
