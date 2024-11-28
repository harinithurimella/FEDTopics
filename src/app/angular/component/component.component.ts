import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
   async copyParagraph(paragraph: HTMLTextAreaElement) {
    const text = paragraph.value || '';  // Use 'value' to get textarea content
    console.log('Text to be copied:', text);
    
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Paragraph copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy text.');
      });
  }
  }
  

