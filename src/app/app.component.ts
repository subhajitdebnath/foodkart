import { Component } from '@angular/core';
import { WeatherService } from './core/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  weather: any[] = [];
  filteredItmes = [];
  mapping: any = {};
  filtercondition = ['06:00', '09:00', '14:00', '20:00'];
  
  constructor(
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.weatherService.getweather().subscribe((res: any) => {
      res.hourly.time.forEach((item: any, index: number) => {
        this.mapping[item] = res.hourly.temperature_2m[index];
      });
      console.log('mapping', this.mapping)

      this.filteredItmes = res.hourly.time.filter((date: string) => this.filtercondition.includes(date.slice(-5)));

      console.log('filteredItmes', this.filteredItmes);

    }, (err: any) => {
      console.log(err);
    });
  }

}
