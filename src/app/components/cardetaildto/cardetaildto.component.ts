import { Component, OnInit } from '@angular/core';
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
