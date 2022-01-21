import { BrandService } from './../../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand-add-component',
  templateUrl: './brand-add-component.component.html',
  styleUrls: ['./brand-add-component.component.css']
})
export class BrandAddComponentComponent implements OnInit {
  brandAddForm:FormGroup
  constructor(private brandService:BrandService, private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }
  createBrandAddForm(){
    this.brandAddForm=this.formBuilder.group({ 
      name:["",Validators.required]
    })
  }
  add(){
    if(this.brandAddForm.valid){
      let brandModel=Object.assign({},this.brandAddForm.value)
      this.brandService.add(brandModel).subscribe(response=>{
        if(response.success){
          this.toastrService.success(response.message,"Succesfull !")
        }
        else{
            this.toastrService.error(response.message,"Error !!");
        }
      })
    }
  }

}
