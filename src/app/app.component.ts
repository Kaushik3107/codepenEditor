import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  htmlCode: string = '<h1>Hello World</h1>';
  cssCode: string = 'h1 { color: red; }';
  jsCode: string = 'console.log("Hello World");';

  @ViewChild('previewFrame', { static: false })
  previewFrame!: ElementRef;

  ngAfterViewChecked() {
    this.updatePreview();
  }

  updatePreview() {
    const document = this.previewFrame.nativeElement.contentDocument;
    const content = `
      <html>
        <head>
          <style>${this.cssCode}</style>
        </head>
        <body>
          ${this.htmlCode}
          <script>${this.jsCode}<\/script>
        </body>
      </html>
    `;
    document.open();
    document.write(content);
    document.close();
  }
}
