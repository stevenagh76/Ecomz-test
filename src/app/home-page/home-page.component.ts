import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }


  
  Contact(){




  }

    
}
