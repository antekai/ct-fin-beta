import React from 'react';
import { Divider,Steps, Button, message, Tooltip } from 'antd';
import FileUpload from './File/Upload';
import InputDateAmount from './Input/DateAmount';
import {RecipientForm} from './Recipient/Add';
import FileAdditional from './File/Additional';
import RecipientInfo from './Recipient/Info';
import './Invoice.css';

const Step = Steps.Step;
export default class Invoice extends React.Component{
  
  state={
    current:0,
    invoiceFileName:null,
    additionalFiles:[],
    recipientModalVisible: false,
    recipientName:null,
    recipientSurname:null,
    recipientAddress:null,
    recipientPhone:null,
    }
  


  // user-flow control methods
  nextStep() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prevStep() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  // File upload methods
  onChangeInvoiceFile = (info) => {
    const status = info.file.status; 
    if (status === 'done') {
      message.success(`${info.file.name} uploaded!`);
      this.setState({invoiceFileName: info.file.name})
    }
    console.log(info.fileList.length);
  }
  onChangeAdditionalFile = (info) => {
    const status = info.file.status; 
    if (status === 'done') {
      message.success(`${info.file.name} uploaded!`);
      this.setState({additionalFiles: info.fileList.map(ar=>ar.name)})
      console.log(info.fileList.map(ar=>ar.name));
    }
  }

  // AddRecipient ModalForm methods
  showModalRecipient = () => {
    this.setState({ recipientModalVisible: true });
  }

  handleCancelRecipient = () => {
    this.setState({ recipientModalVisible: false });
  }

  handleAddRecipient = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      this.setState({ 
        recipientModalVisible: false,
        recipientName: values.Name,
        recipientSurname: values.Surname,
        recipientAddress: values.Address,
        recipientPhone: values.Phone
      });
    });
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render(){
     console.log(this.state.additionalFiles);
    const { current } = this.state;
    return(
      <div className="margin">
      {/* --------------------------------------- */}
      {/* ---------- USER FLOW SCREENS ---------- */}
      {/* --------------------------------------- */}
        <Steps current={current}>
          <Step title={'Add Invoice File'} />
          <Step title={'Add Invoice Details'} />
          <Step title={'Save Invoice Data'} />
        </Steps>
        <div className="steps-content">
          {
            current===0 
            &&  <div className={`margin-tb flex-column`}>
                  <div className="invoice-title"> Upload Invoice File</div>
                  <div><FileUpload onChange={this.onChangeInvoiceFile}/></div>
                </div> 
          }
          {
            current>0 
            &&  <div > 
                    <div className={`margin flex-container`}>
                      <div><InputDateAmount/></div>
                      <div>
                          <div>
                            <span className="bold">Invoice File: </span>
                            {this.state.invoiceFileName}
                          </div>
                          {
                            (!this.state.recipientName)
                            ? <Button type="primary"   onClick={this.showModalRecipient}>Add Recipient</Button>
                            : <div>
                                <RecipientInfo 
                                  name={this.state.recipientName}
                                  surname={this.state.recipientSurname}
                                  address={this.state.recipientAddress}
                                  phone={this.state.recipientPhone}
                                />
                                <Button type="primary"  onClick={this.showModalRecipient}>Edit Recipient</Button>
                              </div> 
                          }
                      </div>
                    </div>
                    
                  <RecipientForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.recipientModalVisible}
                    onCancel={this.handleCancelRecipient}
                    onCreate={this.handleAddRecipient}
                  />
                  <Divider>Additional Files</Divider>
                  {
                    (this.state.additionalFiles.length)
                    && <FileAdditional className="margin-tb" filename={this.state.additionalFiles}/>
                  }
                  <FileUpload onChange={this.onChangeAdditionalFile}/>
                </div> 
              
          }

        {/* --------------------------------------- */}
        {/* ---------- USER FLOW CONTROL ---------- */}
        {/* --------------------------------------- */}
        <div className={`margin-top margin-bottom flex-container flex-end`}>
          <div>
          {
            current > 0
            && <Button className="margin-right" onClick={() => this.prevStep()}>Previous</Button>
            
          }
          {
            current < 2
            // && <Button type="primary" className="margin-right" onClick={() => this.nextStep()}>Next</Button> // helper for dev
              ? (!this.state.invoiceFileName
                  ? <Tooltip title="Upload a file to move to next step"><Button type="primary" className="margin-right" disabled>Next</Button></Tooltip>
                  : <Button type="primary" className="margin-right" onClick={() => this.nextStep()}>Next</Button>)
              :null
          }
          {
            current === 2
            && <Button type="primary" className="margin-right" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          </div>  
        </div>
        
        </div>
        
      </div>
    )
  }
}