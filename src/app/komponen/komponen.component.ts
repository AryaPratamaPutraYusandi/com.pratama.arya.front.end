import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { Publisher } from '../model/publisher';
import { MasterService } from '../services/master.service';


@Component({
  selector: 'app-komponen',
  templateUrl: './komponen.component.html',
  styleUrls: ['./komponen.component.css'],
  providers:[MasterService],
})
export class KomponenComponent implements OnInit {
 id! : string;
  formAddEdit!:FormGroup;
  
  constructor(private formaBuild :FormBuilder,
    private marterService: MasterService,
    private ruter:Router,
    private activateRouter: ActivatedRoute) { 
    this.formAddEdit = this.formaBuild.group({
      'publisherID' : [null],
      'publisherName' : [null],
    })
  }

  simpan(): void {
    let publish =new Publisher();
    publish.publisherId = this.formAddEdit.controls["publisherID"].value;
    publish.publisherName = this.formAddEdit.controls["publisherName"].value;
    this.marterService.savePublisher(publish)
  console.log(this.formAddEdit.controls['publisherID'].value+" : "+
  this.formAddEdit.controls['publisherName'].value)
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

