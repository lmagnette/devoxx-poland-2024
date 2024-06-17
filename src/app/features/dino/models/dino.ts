export interface Dino{
  id:number;
  name:string;
  type: 'herbivorous'|'carnivorous'|'omnivorous'
  description:string;
  height:number;
  length:number;
  weight:number;
  imageUrl:string;
}
