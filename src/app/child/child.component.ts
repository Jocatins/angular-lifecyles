import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  Input,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  ContentChild,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  counter = 0;
  interval: any;

  @Input()
  channelName = '';

  @ContentChild('projectContent', { static: false }) projectContent: any;

  constructor() {
    console.log('Child Constructor is called');
  }

  ngOnInit(): void {
    console.log('Child OnInit  is called');
    console.log('OnInit -afterInit' + this.projectContent);
    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 1000);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('Child OnChanges is called');
    console.log('OnChanges -afterInit - ' + this.projectContent);
  }
  ngDoCheck() {
    console.log('Parent DoCheck is called');
    console.log('DoCheck afterInit -' + this.projectContent);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log('Child OnDestroy  is called');
    console.log('OnDestroy - afterInit - ' + this.projectContent);
  }
  ngAfterContentInit(): void {
    console.log('Child ng after content Init');
    // The content can only be accessed when the content has been initialized
    console.log('After Content Init - ' + this.projectContent);
  }
  ngAfterContentChecked(): void {
    console.log('Child AfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('Child AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Child AfterViewChecked');
  }
}
