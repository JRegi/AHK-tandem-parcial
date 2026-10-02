export class Country {
  constructor(id: number, name: string, region: string) {
    this.id = id;
    this.name = name;
    this.region = region;
  }

  id: number;
  name: string;
  region: string;
}
