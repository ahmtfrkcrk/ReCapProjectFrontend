import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css'],
})
export class CarImageComponent implements OnInit {
  carImages: CarImage[] = [];
  dataLoaded = false;
  constructor(
    private carImageService: CarImageService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getByImagesCarId(params['carId']);
      } else if (params['carImage']) {
        this.getImagePath(params["carImages"])
      } else {
        this.getCarImages();
      }
    });
  }
  getImagePath(carImage: string) {
    this.carImageService.getImagePath(carImage).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }
  getCarImages() {
    this.carImageService.getCarImages().subscribe((response) => {
      this.carImages = response.data;
    });
  }
  getByImagesCarId(carId: number) {
    this.carImageService.getImagebyCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }
}
