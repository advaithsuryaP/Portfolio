import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Subscription } from 'rxjs';
import { ItunesData } from '../../models/itunes-data.model';
import { ItunesService } from '../../services/itunes.service';
import { TableFeaturesComponent } from './table-features/table-features.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit, OnDestroy {
  iTunesData!: ItunesData;
  isLoading: boolean = false;
  iTunesSub: Subscription | undefined;
  constructor(private itunesService: ItunesService, private bottomSheet: MatBottomSheet) {}

  ngOnInit() {
    this.isLoading = true;
    this.iTunesSub = this.itunesService.getItunesData().subscribe(
      (data: {feed: ItunesData}) => {
        this.isLoading = false;
        this.iTunesData = data.feed;
        console.log(data.feed);
      },
      (err) => {
        this.isLoading = false;
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    if(this.iTunesSub) this.iTunesSub.unsubscribe();
  }

  openItunes() {
    // open in same tab
    // window.location.href = this.iTunesData.link[0].attributes.href;
    // open in another tab
    window.open(this.iTunesData.link[0].attributes.href, '_blank');
  }

  showTableFeatures() {
    this.bottomSheet.open(TableFeaturesComponent);
  }
}
