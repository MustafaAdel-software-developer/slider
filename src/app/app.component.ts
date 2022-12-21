import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngSlider';
  previewImg: any = '';
  iOfPreviewImg: number = 0;
  images: any[] = [];
  constructor() {}
  ngOnInit(): void {}

  getImage(img: any) {
    let files: any[] = img.target.files;
    let reader = new FileReader();

    for (let index = 0; index < files.length; index++) {
      reader.readAsDataURL(files[index]);
      reader.onload = () => {
        this.images.push(reader.result);
      };
    }
    console.log(this.images);
  }

  display(id: number): void {
    this.iOfPreviewImg = id;
    this.previewImg = this.images[id];
  }

  delete() {
    this.images.splice(this.iOfPreviewImg, 1);
    if (this.images.length == this.iOfPreviewImg) {
      --this.iOfPreviewImg;
      this.previewImg = this.images[this.iOfPreviewImg];
    } else {
      this.previewImg = this.images[this.iOfPreviewImg];
    }
  }
  displayAfter() {
    ++this.iOfPreviewImg;
    this.previewImg = this.images[this.iOfPreviewImg];
  }
  displayPrev() {
    --this.iOfPreviewImg;
    this.previewImg = this.images[this.iOfPreviewImg];
  }
}
