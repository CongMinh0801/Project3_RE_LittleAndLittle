import React from 'react';
import './App.css';
import "./assets/css/base.css"
import { ViewActive } from './view/view_active/view_active';
import { ViewPay } from './view/view_pay/view_pay';
import { ViewPaySuccess } from './view/view_pay-success/view_pay-success';

function App() {
  return (
    <div className="App">
      <ViewActive/>
      
      <ViewPay/>
      <ViewPaySuccess/>
    </div>
  );
}

export default App;