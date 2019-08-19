import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[apDarkOnHover]'
})
export class DarkenOnHoverDiretive{

    constructor(private el: ElementRef, private render: Renderer){

    }

    @HostListener('mouseover')
    darkenOn(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }

}