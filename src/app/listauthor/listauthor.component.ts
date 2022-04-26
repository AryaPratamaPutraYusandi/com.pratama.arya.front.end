import { Component, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';
import { Author } from '../model/author';


@Component({
  selector: 'app-listauthor',
  templateUrl: './listauthor.component.html',
  styleUrls: ['./listauthor.component.css'],
  providers: [MasterService]
})
export class ListauthorComponent implements OnInit {
  daftarAuthor!: Author[]
  constructor(private author: MasterService)  { }

  ngOnInit(): void {
    this.author.listauthor().subscribe( 
      
      {
        next:hasil =>{
          this.daftarAuthor = hasil
        },
        error: err =>{
          console.log(err);
        }
      }     
    )
  }     
}
