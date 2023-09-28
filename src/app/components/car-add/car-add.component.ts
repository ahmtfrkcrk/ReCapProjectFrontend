import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup;


  constructor(private formBuilder:FormBuilder,
              private carService:CarService,
              private toastrService:ToastrService){}

  ngOnInit(): void {
    
    this.createCarAddForm();

  }
  createCarAddForm(){
    this.carAddForm=this.formBuilder.group({
      brandId : ["",Validators.required],
      modelId : ["",Validators.required],
      colorId : ["",Validators.required],
      modelYear : ["",Validators.required],
      dailyPrice : ["",Validators.required],
      description : ["",Validators.required]
    })
  }
  add(){
    if(this.carAddForm.valid){
      console.log("Form is valid :",this.carAddForm.value)
    let carModel=Object.assign({},this.carAddForm.value)
    this.carService.add(carModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı");
    },
    //Aynı marka ismi tekrar eklenemez mukerrer kontrol yapıyorum.
    (responseError: any) => {
      if (responseError.error && responseError.error.message) {
        this.toastrService.error(responseError.error.message, "Hata");
      } else if (responseError.error && responseError.error.ValidationErrors) {
        (responseError.error.ValidationErrors as any[]).forEach((error) => {
          this.toastrService.error(error.message, "Doğrulama Hatası");
        });
      }
    })
  }else
  {
    this.toastrService.error("Formunuz eksik","Dikkat");
  }
  }
}
