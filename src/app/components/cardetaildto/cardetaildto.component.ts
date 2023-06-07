import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/cardetaildto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';

@Component({
  selector: 'app-cardetaildto',
  templateUrl: './cardetaildto.component.html',
  styleUrls: ['./cardetaildto.component.css']
})
export class CardetaildtoComponent implements OnInit{

  carDetails:CarDetailDto[]=[]
  dataLoaded=false;
  constructor(private carDetailDtoService:CarDetailDtoService){}

  ngOnInit(): void {
    this.getDetails();

  }
  getDetails(){
    this.carDetailDtoService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
  }
}
