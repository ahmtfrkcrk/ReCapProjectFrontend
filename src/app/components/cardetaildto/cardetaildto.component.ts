import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';

@Component({
  selector: 'app-carDetailDto',
  templateUrl: './carDetailDto.component.html',
  styleUrls: ['./carDetailDto.component.css']
})
export class CarDetailDtoComponent implements OnInit{

  carDetails:CarDetailDto[]=[]
  dataLoaded=false;
  constructor(private carDetailDtoService:CarDetailDtoService,
  private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getDetailsByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getDetailsByColor(params["colorId"]);
      }
      else{
        this.getDetails();
      }
    })

  }
  getDetails(){
    this.carDetailDtoService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
  }
  getDetailsByBrand(brandId:number){
    this.carDetailDtoService.getCarDetailsByBrand(brandId).subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
  }
  getDetailsByColor(colorId:number){
    this.carDetailDtoService.getCarDetailsByColor(colorId).subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
  }

}
