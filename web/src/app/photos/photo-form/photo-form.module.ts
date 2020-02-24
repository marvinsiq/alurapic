import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule,
        VmessageModule, 
        ReactiveFormsModule
    ]
})
export class PhotoFormModule { }