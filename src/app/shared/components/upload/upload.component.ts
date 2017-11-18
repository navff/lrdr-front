import { Component, Input } from '@angular/core';

@Component({
  selector: 'lr-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.sass'],
})
export class UploadComponent {
  constructor() {}

  upload(event) {
    let file: File = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      let data = reader.result.replace(/^data:image\/[a-z]+;base64,/, '');
    };
  }

  remove() {
    (<HTMLScriptElement> document.getElementById('input'))['value'] = null;
  }
}
