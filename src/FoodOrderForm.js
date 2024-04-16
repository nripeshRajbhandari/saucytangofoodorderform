import React, { useState } from "react";
import style from './styles/FoodOrderForm.module.css';

function FoodOrderForm() {

  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userOrder, setUserOrder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Successful \n Your order was ${userOrder}. \n Please show your confirmation number for pickup.`);
  }

  return (
    <form onSubmit={handleSubmit} className={style.container}>        
      <label htmlFor='name'>
      Name:
      <input id='name' type='text' name='name' value={userName} onChange = {(e) => setUserName(e.target.value)}/>
      </label>
      <label htmlFor='phone'>
      Phone:
      <input id='phone' type='tel' name='phone' value={userPhone} onChange = {(e) => setUserPhone(e.target.value)}/>
      </label>
      <label htmlFor='address'>
      Address:
      <input id='address' type='text' name='address' value={userAddress} onChange = {(e) => setUserAddress(e.target.value)}/>
      </label>
      <label htmlFor='order'>
      Order:
      <input id='order' type='text' name='order' value={userOrder} onChange = {(e) => setUserOrder(e.target.value)}/>
      </label>
      <br/>
      <button type='submit' value ='Submit Order' className={style.button}>Submit Order</button>
    </form>    
  )
}

export default FoodOrderForm;