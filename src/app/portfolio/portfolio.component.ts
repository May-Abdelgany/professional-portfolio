import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  imageArray: string[] = ["cabin.png", "cake.png", "circus.png", "game.png", "safe.png", "submarine.png"];
  titleArray: string[] = ["LOG CABIN", "TASTY CAKE", "CIRCUS TENT", "CONTROLLER", "LOCKED SAFE", "SUBMARINE"];
  descriptionArray: string[] = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam1.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.2'
    , 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam3.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam4.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam5.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam6.']
  caption: string = "";
  path: string = "";
  description: string = "";
  ngOnInit(): void {
  }
  data(index: number) {
    this.caption = this.titleArray[index];
    this.path = this.imageArray[index];
    this.description = this.descriptionArray[index];
    $('.body').css({ 'background-color': 'rgb(0, 0, 0,0.5)', 'height': '900px' });
    $('.data').removeClass('d-none');
    $('.data').addClass('d-block');
    $('.parent').not().addClass('d-none');
  }
  close() {
    $('.data').addClass('d-none');
    $('.data').removeClass('d-block');
    $('.body').css({ 'background-color': 'rgb(255, 255, 255)', 'height': 'auto' });
    $('.parent').removeClass('d-none');
  }
  exit(event: Event) {
    let window1 = document.querySelector('.close');
    let window2 = document.querySelector('.body');
    if (window1 == event.target || window2 == event.target) {
      this.close();
    }
  }
}
