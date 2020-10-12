import { HttpClient, HttpParams } from "@angular/common/http";
import {  Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class MedicineService{

    constructor(private httpclient:HttpClient, @Inject('BASE_URL') private baseUrl: string){

    }

    addMedicine(medicine:IMedicine):Observable<boolean>{
        return this.httpclient.post<boolean>(this.baseUrl + "api/medicine/addMedicine", medicine);
    }

    getMedicine(search:string):Observable<IMedicine[]>{
        const params = new HttpParams({
            fromString: `search=${search}`
          });
        return this.httpclient.get<IMedicine[]>(this.baseUrl + "api/medicine/getMedicine",{params:params});
    }
}