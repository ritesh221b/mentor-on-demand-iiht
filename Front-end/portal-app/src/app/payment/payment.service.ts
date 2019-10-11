import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Payment } from '../models/payment.model';
import { Training } from '../models/training.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PaymentService {

  constructor(private http:HttpClient) {}

  private paymentUrl = 'http://localhost:8071/payment';
  private trainingUrl = 'http://localhost:8071/training';
  //private userUrl = '/api';

  public getPayments() {
    return this.http.get<Payment[]>(this.paymentUrl);
  }

  public getTraining1(id) {
    return this.http.get<Training>(this.trainingUrl+"/"+id);
  }

  public setAmount(amount,Remark,Pid)
  {
    return this.http.get<Payment[]>(this.paymentUrl+"/"+amount+"/"+Remark+"/"+Pid);
  }

  public setCommission(commission,Tid){
    return this.http.get<Training>(this.trainingUrl+"/ChangeCommission/"+commission+"/"+Tid);
  }
  
  public getPayment() {
    return this.http.get<Payment[]>(this.paymentUrl);
  }
  
  public getTrainings(){
    return this.http.get<Payment[]>(this.paymentUrl);
  }

  public deletePayment(payment) {
    return this.http.delete(this.paymentUrl + "/"+ payment.id);
  }

  public createPayment(payment) {
    return this.http.post<Payment>(this.paymentUrl, payment);
  }

}
