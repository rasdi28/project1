import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field'

const MaterialComponents = [
  MatButtonModule,
  MatGridListModule,
  MatTableModule,
  MatFormFieldModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})


export class MaterialModule { }
