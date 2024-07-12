import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleTresComponent } from './module-tres.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ModuleTresComponent },
    ])],
    exports: [RouterModule]
})
export class ModuleTresRoutingModule { }