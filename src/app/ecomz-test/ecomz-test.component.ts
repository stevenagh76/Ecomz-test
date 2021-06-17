import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ecomz-test',
  templateUrl: './ecomz-test.component.html',
  styleUrls: ['./ecomz-test.component.css']
})
export class EcomzTestComponent implements OnInit {

  constructor(private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  Execute(){

    this._router.navigate(["/execution"],{relativeTo: this._activatedRoute});

    
  }
}
