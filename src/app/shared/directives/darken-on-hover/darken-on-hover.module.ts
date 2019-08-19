import { NgModule } from '@angular/core';
import { DarkenOnHoverDiretive } from './darken-on-hover.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [DarkenOnHoverDiretive],
    exports: [DarkenOnHoverDiretive],
    imports: [CommonModule]
})
export class DarkenOnHoverModule{

}