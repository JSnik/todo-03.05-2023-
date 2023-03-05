import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public textGeoVersion: string =
    `მე პატარა ქართველი ვარ,
  კავკასიის მთების შვილი
  და განცხრომით სხვაგან ყოფნას
  მირჩევნია აქ სიკვდილი!
  ქართლ, კახეთი, იმერეთი,
  გურია და სამეგრელო,
  რაჭა-ლეჩხუმ-ჯავახეთი და
  მესხეთი სასახელო;
  ხევი, თუშ-ფშავ, ხევსურეთი,
  სვანეთი და აფხაზეთი;
  ძველი ტაო, იმერხევი,
  საინგილო და ლაზეთი;
  მთიულეთი საარაკო და
  აჭარის ზღვა და მდელო;
  ყველა ჩემი სამშობლოა,
  საყვარელი საქართველო,
  ქვეყნის თვალი, ეს ქვეყანა
  ღვთის მშობლისა არის
  წილი
  ბევრ მწარე დღეს მოსწრებია
  და უნახავს ბევრიც ტკბილი,
  ხან თუ მტერი აოხრებდა,
  იყო მღვრელი ცრემლის ცხარის;
  ბრწყინვალე დროც დადგომია,
  დრო, დავითის და თამარის,
  მე პატარა ქართველი ვარ,
  სახელოვან ერის შვილი
  და მსურს მერგოს სასახელო
  მე სიცოცხლე და
  სიკვდილი!;`

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

  compare() {
    console.log(this.form.value.input, this.textGeoVersion);
    for (let i = 0; i <= this.textGeoVersion.length; i++) {

    }
  }
}
