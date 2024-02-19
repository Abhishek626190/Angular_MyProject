import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyhttpuseServiceService {
url="http://localhost:3000/Employee"
  constructor(public myhttpClient:HttpClient) { }
  getData()
  {
    return this.myhttpClient.get(this.url)
  }
  deleteData(id:any):Observable<any>
  {
    return this.myhttpClient.delete<any>(this.url+"/"+id).pipe(
      catchError(this.errorHandler)
    )
  }
saveData(emp:any):Observable<any>
{
  let empdata={id:emp.id,name:emp.name,salary:parseInt(emp.salary)}
  return this.myhttpClient.post<any>(this.url,empdata).pipe(
    catchError(this.errorHandler)
  )
}

public updateEmp(id:any,emp:any):Observable<any>
{
  return this.myhttpClient.put<any>(`${this.url}/${id}`,emp).pipe(

    catchError(this.errorHandler)
  )
}

  errorHandler(error:any)
  {
    console.log(error);

    let errorMessage=""
    if(error.error instanceof ErrorEvent)
    {
      console.log(error.error);
      console.log(error.error.message);
      errorMessage=error.error.message
    }
    else{
      errorMessage=`Error Code:${error.status}\n Message:${error.message}`
    }
     return throwError(()=> new Error(errorMessage))
  }
}
