import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Training } from '../models/training.model';
import { Payment } from '../models/payment.model';
import { User } from '../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrainingService {

  id: string;

  constructor(private http:HttpClient) {}

  private trainingUrl = 'http://localhost:8071/training';
  private paymentUrl = 'http://localhost:8071/payment';
  private userUrl = 'http://localhost:8071/user';
  //private userUrl = '/api';

  public getTrainingCompleted() {
    this.id=sessionStorage.getItem("id");
    return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByUsersIdAndStatusEquals/"+this.id+"/Completed");
  }

  public getPayments() {
    return this.http.get<Payment[]>(this.paymentUrl);
  }

  public getTrainings(id) {
    return this.http.get<Training>(this.trainingUrl+"/"+id);
  }

  public setAmount(amount,Remark,Pid)
  {
    return this.http.get<Payment[]>(this.paymentUrl+"/"+amount+"/"+Remark+"/"+Pid);
  }

  public setCommission(commission,Tid){
    return this.http.get<Training>(this.trainingUrl+"/ChangeCommission/"+commission+"/"+Tid);
  }

  public getTrainingCurrent(){
    this.id=sessionStorage.getItem("id");
    return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByUsersIdAndStatusEquals/"+this.id+"/InProgress");
  }

  public getTrainingByUsersId(){
    this.id=sessionStorage.getItem("id");
    return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByUsersId/"+this.id);
  }

  public getTrainingByMentorId(){
    this.id=sessionStorage.getItem("id");
    return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByMentorId/"+this.id);
  }
  
  public getTraining() {
    return this.http.get<Training[]>(this.trainingUrl);
  }
  
  public deleteTraining(training) {
    return this.http.delete(this.trainingUrl + "/"+ training.id);
  }

  public createTraining(training) {
    return this.http.post<Training>(this.trainingUrl, training);
  }

  public getUserTraining() {
    this.id=sessionStorage.getItem("id");
    // alert(this.userUrl+"/"+this.id);
    return this.http.get<User[]>(this.userUrl+"/"+this.id);
  }

}
