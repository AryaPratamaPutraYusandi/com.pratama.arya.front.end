import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';
import { Publisher } from 'src/app/model/publisher';
@Component({
  selector: 'app-listpublisher',
  templateUrl: './listpublisher.component.html',
  styleUrls: ['./listpublisher.component.css'],
  providers: [MasterService]
})
export class ListpublisherComponent implements OnInit {
  daftarPublisher!: Publisher[]
  constructor(private master: MasterService) { }

  ngOnInit(): void {
    this.master.listPublsher().subscribe(
      {
        next:hasil =>{
          this.daftarPublisher = hasil
        },
        error: err =>{
          console.log(err);
        }
      }     
    )
  }     
}
