import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrl: './addform.component.css'
})
export class AddformComponent implements OnInit {
  

  suggForm!:FormGroup

  categorie:string[]=[
    'sport','music','education'
  ]
  ngOnInit(): void {
     this.suggForm=new FormGroup({
    title:new FormControl('',Validators.required),
     description:new FormControl('',Validators.required),
      categorie:new FormControl('',Validators.required),
       date:new FormControl(new Date(),Validators.required),
        status:new FormControl('',Validators.required)
  })
  }


  add(){
    console.log(this.suggForm.value)
  }


}
