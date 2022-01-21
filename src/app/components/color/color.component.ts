import { BrandService } from './../../services/brand.service';
import { ColorListModel } from './../../models/colorListModel';
import { ColorService } from './../../services/color.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: ColorListModel[] = []

  constructor(private colorService: ColorService, private brandService:BrandService) { }

  ngOnInit(): void {
    this.getColors()
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data


    })
  }
}
