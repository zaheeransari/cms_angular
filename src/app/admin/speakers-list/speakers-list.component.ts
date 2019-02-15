import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { Speakers } from '../../model/speakers';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { PartialSpeakerFormComponent } from 'src/app/partial/partial-speaker-form/partial-speaker-form.component';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.css']
})
export class SpeakersListComponent implements OnInit {

  loading = false;
  speakerItem: Speakers[];
  PageSize: Array<any> = [];
  bsmodalRef: BsModalRef;
  constructor(
    private rest: RestService,
    private _router: Router,
    private bsmodalService: BsModalService
  ) { }

  ngOnInit() {
    this.getSpeakers(1);
  }

  getSpeakers(id) {
    var items: number[] = [];
    this.loading = true;
    this.rest.fetch("Speakers/Get/" + id)
      .subscribe(res => {
        this.speakerItem = res[0].Speakers;
        for (var i = 1; i <= res[0].TotalPage; i++) {
          items.push(i);
        }
        this.PageSize = items;
        this.loading = false;
        console.log(this.speakerItem);
        console.log(this.PageSize);
      })
  }

  showItem(items: Speakers) {
    debugger;
    const initialState = { items };
    this.bsmodalRef = this.bsmodalService.show(PartialSpeakerFormComponent, { initialState });
    this.bsmodalRef.content.closeBtnName = 'Close';
    console.log(initialState);
    //this._router.navigate(['/speakerform/Edit']);
  }
  spkItem(item: Speakers){
    debugger;
  }

  view(id) {
    this._router.navigate(["/admin/speakerlist/" + id]);
  }
  onClickPage(id) {
    this.getSpeakers(id)
  }

}
