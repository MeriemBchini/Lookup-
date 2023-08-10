import { Component } from '@angular/core';
import { whoisService } from '../whois.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  searchValue : string = "";
  infos : any;


  constructor(private whois : whoisService ,private router : Router){

  } 

  onSearch(searchValue:string){

    this.whois.getInfo(searchValue).subscribe(
      (results)=>{this.infos=results
                  console.log(results)
      }
    )
  }


 
}



