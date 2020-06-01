import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  { path: 'messages', component: MessageListComponent },
  { path: 'message/:id', component: MessageComponent },
  { path: '**', redirectTo: '/messages', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
