import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { Publisher } from '../model/publisher';
import { MasterService } from '../services/master.service';


@Component({
  selector: 'app-komponenz',
  templateUrl: './komponenz.component.html',
  styleUrls: ['./komponenz.component.css']
  
})

  
export class KomponenzComponent implements OnInit {
  id! : string;
  formAddEdit!:FormGroup;

  constructor(private formaBuild :FormBuilder,
    private marterService: MasterService,
    private ruter:Router,
    private activateRouter: ActivatedRoute) { 
    this.formAddEdit = this.formaBuild.group({
      'authorId' : [null],
      'auhorName' : [null],
    })
  }

  simpan(): void {
    let publish =new Publisher();
    publish.publisherId = this.formAddEdit.controls["authorId"].value;
    publish.publisherName = this.formAddEdit.controls["authorName"].value;
    this.marterService.savePublisher(publish)
  console.log(this.formAddEdit.controls['authorId'].value+" : "+
  this.formAddEdit.controls['authorName'].value)
  this.marterService.savePublisher(publish).subscribe({
    next: hasil=>{
    alert(hasil.pesan);
  }, error: salah =>{
    alert(salah.error)
  }
})
  
}


  ngOnInit(): void {
    this.activateRouter.params.subscribe( param =>{
      this.id = param['id']
      if(this.id){
        this.marterService.getPublisher(parseInt(this.id))
        .subscribe({
          next: value =>{
            this.formAddEdit.controls["publisherID"].setValue(value.publisherId)
            this.formAddEdit.controls["publisherName"].setValue(value.publisherName)
          }
        })
      }
    } )

    
    
    }
  }