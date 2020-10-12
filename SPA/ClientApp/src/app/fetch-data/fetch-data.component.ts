import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MedicineService } from '../services/medine.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public medicines: IMedicine[];

   constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,private medicineService:MedicineService) {
  //   http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
  //     this.forecasts = result;
  //   }, error => console.error(error));
  this.medicineService.getMedicine('').subscribe(result =>{
    this.medicines = result;
  });
  }

  search(){
    var text = ((document.getElementById("search") as HTMLInputElement).value);
    this.medicineService.getMedicine(text).subscribe(result =>{
this.medicines = result;
    });
  }
}


