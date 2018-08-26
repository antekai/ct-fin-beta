import React from 'react';
import { Steps, Button, message } from 'antd';
import FileUpload from './File/Upload';
import InputDateAmount from './Input/DateAmount';
import './Invoice.css'

const Step = Steps.Step;
export default class Invoice extends React.Component{
  
  state={current:0}

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }


  render(){
    const { current } = this.state;
    return(
      <div className="invoice-container">
        <Steps current={current}>
          <Step title={'Add Invoice File'} />
          <Step title={'Add Invoice Info'} />
          <Step title={'Additional Files'} />
        </Steps>
        <div className="steps-content">
          {
            current===0 
            &&  <div>
                  <div className="invoice-title"> Upload Invoice File</div> 
                  <FileUpload/>
                </div> 
          }
          {
            current===1 
            && <InputDateAmount/>
          }
          {
            current===2 
            && <InputDateAmount/>
          }
        
        </div>
        <div className="steps-action">
          {
            current < 2
            && <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            current === 2
            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            current > 0
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
            )
          }
        </div>
      </div>
    )
  }
}