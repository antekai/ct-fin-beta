import React from 'react';
import FileUpload from './File/Upload';
import InputDateAmount from './Input/DateAmount';



export default class Invoice extends React.Component{
  render(){
    return(
      <div>
        <FileUpload/>
        <InputDateAmount/>
      </div>
    )
  }
}