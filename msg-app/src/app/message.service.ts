import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Message } from './message';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient
  ) { }

  getMessages = () => this.http.get<Message[]>(environment.API_URL)
  getMessage = (id: number) => this.http.get<Message>(`${environment.API_URL}/${id}`)
  newMessage = (message: Message) => this.http.post<Message>(environment.API_URL, message)
  updateMessage = (message: Message) => this.http.put<Message>(`${environment.API_URL}/${message.id}`, message)
  deleteMessage = (id: number) => this.http.delete<Message>(`${environment.API_URL}/${id}`)
}
