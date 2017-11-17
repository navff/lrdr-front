import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { DatePipe } from './_date.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { UploadComponent } from './components/upload/upload.component';

const Modules = [HttpModule, FormsModule, ReactiveFormsModule,
  MaterialModule,
  RouterModule,
  CommonModule];

const Components = [DatePipe, FooterComponent, ButtonComponent, ProgressBarComponent, UploadComponent];

@NgModule({
  imports: [Modules],
  declarations: [Components],
  exports: [Modules, Components]
})
export class SharedModule { }
