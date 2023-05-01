import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input("srvElement") element: {
    type: string,
    name: string,
    content: string,
  }

  @Input() name: string;

  constructor() { 
    console.log('constructor called!')
  }

  ngOnInit(): void {
    console.log('ngOnInit called!')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes, 'ngOnChanges called!')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!')

  }
}
