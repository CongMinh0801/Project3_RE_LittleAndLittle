import React from 'react';
import './App.css';
import "./assets/css/base.css"
import { Navbar } from './layout/navbar/navbar';
import { TagInfo } from './layout/tag_info/tag_info';
import { ContactForm } from './layout/contact_form/contact_form';
import { SendContactMessage } from './layout/send_contact_message/send_contact_message';
import { PayFail } from './layout/pay_fail/pay_fail';
import { PayTicketItem } from './layout/pay_ticket_item/pay_ticket_item';
import { PayTicket } from './layout/pay_ticket/pay_ticket';
import { BookTicket } from './layout/book_ticket/book_ticket';
import { Event } from './layout/event/event';
import { ViewContact } from './view/view_contact/view_contact';
import { ViewEvent } from './view/view_event/view_event';
import { ViewHome } from './view/view_home/view_home';
import { ViewActive } from './view/view_active/view_active';
import { ViewPay } from './view/view_pay/view_pay';
import { ViewPaySuccess } from './view/view_pay-success/view_pay-success';
import { EventInfo } from './layout/event_info/event_info';

function App() {
  return (
    <div className="App">
      <ViewActive/>
    </div>
  );
}

export default App;