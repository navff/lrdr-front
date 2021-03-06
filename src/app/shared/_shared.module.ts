import { AutoFocusDirective } from './directives/autofocus.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { DatePipe } from './_date.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { UploadComponent } from './components/upload/upload.component';
import { StaticComponent } from './components/static/static.component';

const Modules = [HttpClientModule, FormsModule, ReactiveFormsModule,
  MaterialModule, MdNativeDateModule, RouterModule, CommonModule];

const Components = [DatePipe, FooterComponent, ButtonComponent, ProgressBarComponent, UploadComponent, StaticComponent,
  AutoFocusDirective];

@NgModule({
  imports: [Modules],
  declarations: [Components],
  exports: [Modules, Components]
})
export class SharedModule { }
