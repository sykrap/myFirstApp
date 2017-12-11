import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seoyoung',
  templateUrl: './seoyoung.component.html',
  styleUrls: ['./seoyoung.component.css']
})
export class SeoyoungComponent implements OnInit {
  title = 'Hackathon Video Platform journey';
  showHackathonIdea:boolean = false;
  numberOfClicks:number = 10;
  showInitialDesign:boolean = false;
  showDevelopedUI:boolean = false;
  showWhatILearntToday:boolean = false;

  hackathonIdea(){
    console.log("hello");
    console.log("this.showHackathonIdea1",this.showHackathonIdea);
    this.showHackathonIdea = !this.showHackathonIdea;
    console.log("this.showHackathonIdea2",this.showHackathonIdea);
    this.numberOfClicks = this.numberOfClicks*2;
  }
  initialDesign(){
    console.log("intialdesign");
    this.showInitialDesign = !this.showInitialDesign;
  }
  developedUI(){
    this.showDevelopedUI = !this.showDevelopedUI;
  }
  whatILearntToday(){
    this.showWhatILearntToday = !this.showWhatILearntToday;
  }
  constructor() { }

  ngOnInit() {
  }

}
