import React from 'react';
import { Form, DatePicker, InputNumber } from 'antd';
import "./DateAmount.css"

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 10 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
export default class InputDateAmount extends React.Component{
  
  onChangeAmount(value) {
    console.log('changed', value);
  }
  onChangeDate(date, dateString) {
    console.log(date, dateString);
  }

  render(){
    return(
      <div className="margin-rl">
      <FormItem label="Payment Target(Date)" {...formItemLayout}>
        <DatePicker 
          onChange={this.onChangeDate} 
          className="margin-right" 
          placeholder="Add Date" 
        />
        </FormItem>
        <FormItem label="Invoice Amount" {...formItemLayout}>
        <InputNumber
          defaultValue={1000}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={this.onChangeAmount}
          placeholder="Add Amount"
        />
        </FormItem>
      </div>
    )
  }
}