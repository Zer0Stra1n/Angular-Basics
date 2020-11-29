import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from './gallery.service';
import { MovieBasics } from './models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  mediaList: MovieBasics[];
  selectedMovie: string;
  showModal = false;

  constructor(private service: GalleryService, private router: Router) { }

  ngOnInit(): void {
    this.getGallery();
  }

  getGallery() {
    this.service.getMediaList().subscribe((data: MovieBasics[]) => {
      this.mediaList = data;
    }, error => {
      this.router.navigateByUrl('error');
    });
  }

  setSelected(id) {
    this.selectedMovie = id;
    this.showModal = true;
  }

  resetModal(event){
    this.showModal = false;
  }

  identity(index: number, item: any) {
    return item.id;
  }
}
