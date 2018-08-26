import React from 'react';
import { DatePicker, InputNumber } from 'antd';

export default class InputDateAmount extends React.Component{
  
  onChangeAmount(value) {
    console.log('changed', value);
  }
  onChangeDate(date, dateString) {
    console.log(date, dateString);
  }

  render(){
    return(
      <div>
        <DatePicker onChange={this.onChangeDate} />
        <InputNumber
          defaultValue={1000}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={this.onChangeAmount}
        />
      </div>
    )
  }
}