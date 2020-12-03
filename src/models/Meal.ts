export class Meal {
  public name = '';
  public imageUrl = '';
  public sourceUrl = '';

  constructor(name: string, imageUrl: string, sourceUrl: string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.sourceUrl = sourceUrl;
  }
}