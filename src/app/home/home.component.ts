import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public textEngVersion: string = `I am a little Georgian Son of the Caucasus Mountains And you will be somewhere else I prefer to die here! Kartl, Kakheti, Imereti, Guria and Samegrelo, Racha-Lechkhum-Javakheti and Meskhetian name; Khevi, Tush-Pshav, Khevsureti, Svaneti and Abkhazia; ancient tao, reign Saingilo and Lazet; Mtiuleti Saarako and Sea and meadow of Adjara; all are my homeland Dear Georgia, The eye of the country, this country It belongs to the mother of God Part There have been many bitter days and has seen many sweet Sometimes if the enemy was surprised, He was bitter with tears; The glorious time has come the time of David and Tamar, I am a little Georgian A son of a famous nation And I want Mergo's name I life and Death!`


  isGeo: boolean = true;
  // @ts-ignore
  form: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      input: ['', Validators.required]
    })
  }

  comp: boolean = false;
  compare() {
    if (this.textEngVersion.includes(this.form.value.input.trim())) {
      this.comp = true;
    } else {
      window.alert('Nothing was found, check spelling, Big-small Letters and spaces')
    }
  }

  returnDef() {
    this.comp = false;
  }
}
