import React from 'react';
import { Steps, Button, message } from 'antd';
import FileUpload from './File/Upload';
import InputDateAmount from './Input/DateAmount';
import './Invoice.css'
import RecipientAdd from './Recipient/Add';


const Step = Steps.Step;
export default class Invoice extends React.Component{
  
  state={
    current:0,
    fileInvoice:null
    }
  onChangeFile=this.onChangeFile.bind(this)

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  onChangeFile(info){
    const status = info.file.status; 
    if (status === 'done') {
      message.success(`${info.file.name} SNEAaaaaaaaaaaaKED`);
      this.setState({fileInvoice: info.file.name})
    }
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
                  <FileUpload onChange={this.onChangeFile}/>
                </div> 
          }
          {
            current===1 
            &&  <div>
                  <InputDateAmount/>
                  {this.state.fileInvoice}
                  <RecipientAdd/>
                </div> 
              
          }
          {
            current===2 
            && <InputDateAmount/>
          }
        
        </div>
        <div className="steps-action">
          {
            current > 0
            && <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>Previous</Button>
            
          }
          {
            current < 2
              ? (!this.state.fileInvoice
                  ? <Button type="primary" disabled>Next</Button>
                  : <Button type="primary" onClick={() => this.next()}>Next</Button>)
            :null
          }
          {
            current === 2
            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          
        </div>
      </div>
    )
  }
}