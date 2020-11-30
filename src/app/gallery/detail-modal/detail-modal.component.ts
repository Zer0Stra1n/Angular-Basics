import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnChanges {
  @Input() selected: string;
  @Output() modalClose = new EventEmitter<boolean>();
  movieDetail: any;

  constructor(private service: GalleryService, private sanitizer: DomSanitizer){}

  ngOnChanges(change: SimpleChanges) {
    if (change.selected && change.selected.currentValue !== change.selected.previousValue){
      this.movieDetail = undefined;
      this.getDetails();
    }
  }

  closeModal(){
    this.modalClose.emit(true);
  }

  getDetails() {
    this.service.getDetails(this.selected).subscribe((data) => {
      this.movieDetail = data;
    });
  }

  sanitizeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movieDetail.trailer);
  }
}
