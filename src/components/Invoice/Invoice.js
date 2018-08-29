import React from "react";
import { Divider, Steps, Button, message, Tooltip, notification } from "antd";
import { FileUpload } from "./File/Upload";
import { RecipientForm } from "./Recipient/Add";
import { FileAdditional } from "./File/Additional";
import { ScreenOne } from "./Screens/One";
import { ScreenTwoRow1 } from "./Screens/TwoRow1";
import "./Invoice.css";

const Step = Steps.Step;
export default class Invoice extends React.Component {
  state = {
    currentScreen: 0,
    invoiceFileName: null,
    additionalFiles: [],
    invoiceDate: null,
    invoiceAmount: null,
    recipientModalVisible: false,
    recipientName: null,
    recipientSurname: null,
    recipientAddress: null,
    recipientPhone: null
  };

  // user-flow control methods
  nextStep() {
    const currentScreen = this.state.currentScreen + 1;
    this.setState({ currentScreen });
  }

  prevStep() {
    const currentScreen = this.state.currentScreen - 1;
    this.setState({ currentScreen });
  }

  // File upload methods
  onChangeInvoiceFile = info => {
    const status = info.file.status;
    if (status === "done") {
      message.success(`${info.file.name} uploaded!`);
      this.setState({ invoiceFileName: info.file.name });
    }
  };
  onChangeAdditionalFile = info => {
    const status = info.file.status;
    if (status === "done") {
      message.success(`${info.file.name} uploaded!`);
      this.setState({ additionalFiles: info.fileList.map(ar => ar.name) });
    }
  };
  //Invoice Date and amount methods
  onChangeAmount = value => {
    this.setState({ invoiceAmount: value });
  };
  onChangeDate = (date, dateString) => {
    this.setState({ invoiceDate: dateString });
  };

  // AddRecipient ModalForm methods
  showModalRecipient = () => {
    this.setState({ recipientModalVisible: true });
  };

  handleCancelRecipient = () => {
    this.setState({ recipientModalVisible: false });
  };

  handleAddRecipient = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      this.setState({
        recipientModalVisible: false,
        recipientName: values.Name,
        recipientSurname: values.Surname,
        recipientAddress: values.Address,
        recipientPhone: values.Phone
      });
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  // Notification
  openNotification = () => {
    notification.open({
      message: "State is logged at console",
      description:
        "You can view how user actions are stored in state at your browser console"
    });
  };

  render() {
    const {
      currentScreen,
      recipientName,
      recipientSurname,
      recipientAddress,
      recipientPhone,
      invoiceFileName,
      recipientModalVisible
    } = this.state;
    console.log(this.state);
    return (
      <div className="margin">
        <Steps current={currentScreen}>
          <Step title={"Add Invoice File"} />
          <Step title={"Add Invoice Details"} />
          <Step title={"Save Invoice Data"} />
        </Steps>
        <div className="steps-content">
          {/* ---------- USER FLOW SCREENS ---------- */}

          {currentScreen === 0 && (
            <ScreenOne onUpload={this.onChangeInvoiceFile} />
          )}
          {currentScreen > 0 && (
            <div>
              <ScreenTwoRow1
                fileName={invoiceFileName}
                onChangeDate={this.onChangeDate}
                onChangeAmount={this.onChangeAmount}
                addOrEditRecipientCondition={!recipientName}
                onClickModal={this.showModalRecipient}
                name={recipientName}
                surname={recipientSurname}
                address={recipientAddress}
                phone={recipientPhone}
              />
              <RecipientForm
                wrappedComponentRef={this.saveFormRef}
                visible={recipientModalVisible}
                onCancel={this.handleCancelRecipient}
                onCreate={this.handleAddRecipient}
              />
              <Divider>Additional Files</Divider>
              {this.state.additionalFiles.length && (
                <FileAdditional
                  className="margin-tb"
                  filename={this.state.additionalFiles}
                />
              )}
              <FileUpload onChange={this.onChangeAdditionalFile} />
            </div>
          )}

          {/* ---------- USER FLOW CONTROL ---------- */}

          <div className={`margin-top margin-bottom flex-container flex-end`}>
            <div>
              {currentScreen > 0 && (
                <Button
                  className="margin-right"
                  onClick={() => this.prevStep()}
                >
                  Previous
                </Button>
              )}
              {currentScreen < 2 ? (
                // && <Button type="primary" className="margin-right" onClick={() => this.nextStep()}>Next</Button> // helper for dev
                !this.state.invoiceFileName ? (
                  <Tooltip title="Upload a file to move to next step">
                    <Button type="primary" className="margin-right" disabled>
                      Next
                    </Button>
                  </Tooltip>
                ) : (
                  <Button
                    type="primary"
                    className="margin-right"
                    onClick={() => this.nextStep()}
                  >
                    Next
                  </Button>
                )
              ) : null}
              {currentScreen === 2 && (
                <Button
                  type="primary"
                  className="margin-right"
                  onClick={() => message.success("Processing complete!")}
                >
                  Done
                </Button>
              )}
            </div>
          </div>
        </div>
        <Button type="ghost" onClick={this.openNotification}>
          Notification
        </Button>
        ,
      </div>
    );
  }
}
