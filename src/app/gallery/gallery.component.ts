import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from './gallery.service';
import { Gallery } from './models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  mediaList: Gallery = new Gallery([]);

  constructor(private service: GalleryService, private router: Router) { }

  ngOnInit(): void {
    this.getMedia();
  }

  getMedia() {
    this.service.getMedia().subscribe((data: Gallery) => {
      this.mediaList = data;
    }, error => {
      this.router.navigateByUrl('error');
    });
  }

  identity(index: number, item: any) {
    return item.id;
  }
}
