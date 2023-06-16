import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-carDetailDto',
  templateUrl: './carDetailDto.component.html',
  styleUrls: ['./carDetailDto.component.css']
})
export class CarDetailDtoComponent implements OnInit{

  carDetails:Car[]=[]
  carImages:CarImage[]=[];
  imageUrl:string="https://localhost:44326/uploads/images/";
  currentCar:Car;
  dataLoaded=false;
  constructor(private carService:CarService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(params=>{
      this.getCarById(params["carId"]);
      this.getImagebyCarId(params["carId"]);
    })

  }
  getImagebyCarId(carId:number){
    this.carImageService.getImagebyCarId(carId).subscribe(response => {
      this.carImages = response.data;
      this.dataLoaded = true;
  });
}
getImagePath(carImage: CarImage) {
  let path = this.imageUrl + carImage.imagePath;
  return path;
}
getCarById(id:number) {
  this.carService.getCarById(id).subscribe(response => {
  this.carDetails = response.data;
  this.dataLoaded = true;
  });
} 
setCurrentCar(car:Car){
  this.currentCar=car;
}
}
