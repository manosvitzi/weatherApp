import { Component, OnInit } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  

  constructor(private weatherService: WeatherService) {

  }

  cityName: string = 'Naxos';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSumbit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';

  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }
}
