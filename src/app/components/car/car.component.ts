import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  cars : Car[]=[];
  brands: Brand[]=[];
  colors : Color[]=[];
  filterText="";
  
  imageUrl="https://localhost:44326/uploads/images/";
  carImages:CarImage[]=[];
  
  dataLoaded = false ;
  currentCar:Car | null;

  
  constructor(private httpClient:HttpClient,
    private activatedRouted:ActivatedRoute,
    private carImageService:CarImageService,private brandService:BrandService,
    private colorService:ColorService,private carService:CarService
    )
    {}


  ngOnInit(): void {
    this.activatedRouted.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"] ){
        this.getCarByColor(params["colorId"])
      }
      else if (params["carId"]) {
        this.getCarById(params["carId"])
      }
      else{
        this.getCars();
        this.getBrands();
        this.getColors();
      }
    });
   
  }
 
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
    });
  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    });
  }
  getCarByColor(colorId:number){
    this.carService.getCarByColor(colorId)
    .subscribe((response)=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  getCarImage(car:Car){
    if (car.imagePath == null) {
      let path = this.imageUrl + "DefaultImage.jpg"
      return path;

    }
    else{
      let path = this.imageUrl + car.imagePath;
      return path;
    }
  }
  setCurrentCar(car:Car){
    this.currentCar=car;
  }
  getCarById(carId:number){
    this.carService.getCarsByBrand(carId).subscribe(response => {
      this.cars = response.data;
      
    })
  }
  getCarsByColorAndBrand(brandId:number, colorId:number){
    this.carService.getCarsByColorAndBrand(brandId, colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
  reset(){
    this.currentCar = null;

  }

}
