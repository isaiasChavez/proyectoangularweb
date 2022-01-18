import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.sidenav').sidenav();
      $(".dropdown-trigger").dropdown({coverTrigger:false});
    });
  }

}
