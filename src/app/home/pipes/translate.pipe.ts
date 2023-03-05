import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  textEng: string =
    `  I am a little Georgian
      Son of the Caucasus Mountains
      And you will be somewhere else
      I prefer to die here!
      Kartl, Kakheti, Imereti,
      Guria and Samegrelo,
      Racha-Lechkhum-Javakheti and
      Meskhetian name;
      Khevi, Tush-Pshav, Khevsureti,
      Svaneti and Abkhazia;
      ancient tao, reign
      Saingilo and Lazet;
      Mtiuleti Saarako and
      Sea and meadow of Adjara;
      all are my homeland
      Dear Georgia,
      The eye of the country, this country
      It belongs to the mother of God
      Part
      There have been many bitter days
      and has seen many sweet
      Sometimes if the enemy was surprised,
      He was bitter with tears;
      The glorious time has come
      the time of David and Tamar,
      I am a little Georgian
      A son of a famous nation
      And I want Mergo's name
      I life and
      Death!
    `
  transform(value: unknown, ...args: unknown[]): unknown {
    return this.textEng
  }

}
