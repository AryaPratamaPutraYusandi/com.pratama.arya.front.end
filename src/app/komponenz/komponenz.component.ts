import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { Publisher } from '../model/publisher';
import { MasterService } from '../services/master.service';
import { Author } from '../model/author';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';



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
      'authorId' : new FormControl (null, [Validators.required, Validators.min (10000)]) ,
      'authorName' : new FormControl (null, [Validators.required, Validators.minLength (7)]) ,
    })
  }

  simpan(): void {
    if(this.formAddEdit.valid){
    let author =new Author();
    author.authorId = this.formAddEdit.controls["authorId"].value;
    author.authorName = this.formAddEdit.controls["authorName"].value;
    this.marterService.saveAuthor(author)
  console.log(this.formAddEdit.controls['authorId'].value+" : "+
  this.formAddEdit.controls['authorName'].value)
  this.marterService.saveAuthor(author).subscribe({
    next: hasil=>{
    alert(hasil.pesan);
  }, error: salah =>{
    alert(salah.error)
  }
})

}else{
  alert('harus di isi!')
}

}

  ngOnInit(): void {
    this.activateRouter.params.subscribe( param =>{
      this.id = param['id']
      if(this.id){
        this.marterService.getAuthor(parseInt(this.id))
        .subscribe({
          next: value =>{
            this.formAddEdit.controls["authorId"].setValue(value.authorId)
            this.formAddEdit.controls["authorName"].setValue(value.authorName)
          }
        })
      }
    } )

    
    
    }
  }