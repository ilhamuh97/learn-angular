import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

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
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph ') paragraph: ElementRef;

  constructor() { 
    console.log('constructor called!')
  }

  ngOnInit(): void {
    console.log('ngOnInit called!')
    console.log("text content:" + this.header.nativeElement.textContent)
    console.log("text content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes, 'ngOnChanges called!')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log("text content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!')
    console.log("text content:" + this.header.nativeElement.textContent)
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!')

  }
}
