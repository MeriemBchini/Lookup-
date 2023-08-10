import { Component, OnInit } from '@angular/core';
import { whoisService } from '../whois.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit{
  
  data : any[] = [];
  list : any[] = [];
  blockedList : String[] = [];

  constructor(private whoisService : whoisService){
    
  }


  ngOnInit(): void {
    this.whoisService.getAll().subscribe(
      (result)=>{this.list=result;
        console.log(this.list)
        let blockedList : any[] = [];
        for(let j=0;j<this.list.length;j++){
          let cpt=0;
          let blocked = false;
          for(let k=0;k<blockedList.length;k++){
              if(blockedList[k]===this.list[j].url){
                blocked = true;
              }
          }
          console.log("blocked :"+ blocked)
          if(!blocked){
            for(let i=0;i<this.list.length;i++){
              if(this.list[i].url==this.list[j].url){
                cpt++;
              }
              }
              blockedList.push(this.list[j].url);
              console.log(blockedList)
          }
          if(cpt>0){
          this.data.push(cpt);
          }
        }
        console.log(this.data);
        this.blockedList = this.blockedList
        this.barChart(blockedList);
      }
    )
    
    
  }


  barChart(blockedList: any[]){

    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: blockedList,
          datasets: [{
            label: 'Les liens les plus cherchés',
              data: this.data,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }


}
