import { Component, OnInit } from '@angular/core';
import { SetupserviceService } from 'src/app/setupservice.service';

@Component({
  selector: 'app-invoice-info',
  templateUrl: './invoice-info.component.html',
  styleUrls: ['./invoice-info.component.css']
})
export class InvoiceInfoComponent implements OnInit {

  public dataTest :any

  constructor(private _setUpService: SetupserviceService) { }

  ngOnInit() {

   this._setUpService.getContext()
   .subscribe(data => this.dataTest = data.items);
   console.log(this.dataTest);

  }

}
