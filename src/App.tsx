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

function App() {
  return (
    <div className="App">
      <Event EventName='Sự kiện 1' EventPlace='Đầm sen Pack' DateStart='08/01/2002' DateEnd='08/01/2102' EventPrice='260.000'/>
    </div>
  );
}

export default App;