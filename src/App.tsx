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

function App() {
  return (
    <div className="App">
      <PayTicket/>
    </div>
  );
}

export default App;