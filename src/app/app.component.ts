import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SingletonService } from './singleton.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Login';
  arrayBuffer: any;
  register = false;
  data = [];

  constructor() {
  }

  onAction(event) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      const data = new Uint8Array(this.arrayBuffer);
      const arr = new Array();
      for (let i = 0; i < data.length; ++i) {
        arr[i] = String.fromCharCode(data[i]);
      }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, { type: 'binary' });
      const first_sheet_name = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[first_sheet_name];
      this.data = XLSX.utils.sheet_to_json(worksheet, { raw: true });
    };
    fileReader.readAsArrayBuffer(event.file);
  }
}
