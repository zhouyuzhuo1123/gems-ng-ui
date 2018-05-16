import { Directive,HostListener} from '@angular/core';

@Directive({
    selector: '[counting]'
})
export class CountClicks {
    numberOfClicks = 0;
    @HostListener('click', ['$event.target'])
    onClick(btn: HTMLElement) {
       // console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
    }

    @HostListener('document:scroll', ['$event'])
    onScroll(btn: Event) {
       // console.log(btn)
    }
}