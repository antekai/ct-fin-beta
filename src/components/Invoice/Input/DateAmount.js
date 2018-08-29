import React from "react";
import { Form, DatePicker, InputNumber } from "antd";
import "./DateAmount.css";

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 10 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
};

export const InputDateAmount = ({ onChangeDate, onChangeAmount }) => (
  <div className="margin-rl">
    <FormItem label="Payment Target(Date)" {...formItemLayout}>
      <DatePicker
        onChange={onChangeDate}
        className="margin-right"
        placeholder="Add Date"
      />
    </FormItem>
    <FormItem label="Invoice Amount" {...formItemLayout}>
      <InputNumber
        // defaultValue={1000}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={value => value.replace(/\$\s?|(,*)/g, "")}
        onChange={onChangeAmount}
        placeholder="Add Amount"
      />
    </FormItem>
  </div>
);
