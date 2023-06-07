import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/rentaldetaildto';
import { RentalDetailDtoService } from 'src/app/services/rental-detail-dto.service';

@Component({
  selector: 'app-rentaldetaildto',
  templateUrl: './rentaldetaildto.component.html',
  styleUrls: ['./rentaldetaildto.component.css'],
})
export class RentalDetailDtoComponent implements OnInit {
  rentalDetails: RentalDetailDto[] = [];
  dataLoaded = false;

  constructor(private rentalDetailService:RentalDetailDtoService) {}

  ngOnInit(): void {

    this.getRentalDetails();

  }
  getRentalDetails(){

    this.rentalDetailService.getRentalDetails().subscribe(response=>{
      this.rentalDetails=response.data;
      this.dataLoaded=true;
    })
  }
 
  }
