import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  formAddEdit! : FormGroup;
  
  constructor(private formaBuild :FormBuilder,
    private marterService: MasterService,
    private ruter:Router,
    private activateRouter: ActivatedRoute) { 
    this.formAddEdit = this.formaBuild.group({
      'publisherID' :  new FormControl (null, [Validators.required, Validators.min (10000)]) ,
      'publisherName' :  new FormControl (null, [Validators.required, Validators.minLength (7)]) ,
    })
  }

  simpan(): void {

    if(this.formAddEdit.valid){
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
}else{
  alert('form wajib di lengkapi!')
}
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

