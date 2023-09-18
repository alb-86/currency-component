import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../index.css';
const Currency = () => {
  const {dispatch } = useContext(AppContext);
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }  
    
  return (
        <div className='alert alert-secondary alert-color'>  {
      <select name="Currency" className="value-input" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option selected disabled hidden>Currency</option>
        <option value="£"> &#8356; Pound</option>
        <option value="₹"> &#8377; Ruppee</option>
        <option value="€"> &#8364; Euro</option>
        <option value="$"> &#x24; Dollar</option>
      </select>	
      }	
    </div>
    
    );
};
export default Currency;