import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

export const RecipientForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Add Recipient"
          okText="Add"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Name">
              {getFieldDecorator('Name', {
                rules: [
                  { required: true, message: `Please add Recipient's name!` },
                  { pattern: /[A-Za-z]{1,15}/, message:`name should only contain letters (from 1 to 15)`}
              ],
              })(
                <Input placeholder="Please add Recipient's Name" type="text"/>
              )}
            </FormItem>
            <FormItem label="Surname">
              {getFieldDecorator('Surname',{
                rules: [
                  { required: true, message: `Please add Recipient's name!` },
                  { pattern: /[A-Za-z]{1,15}/, message:`Surname should only contain letters (from 1 to 15)`}
              ],
              })(
              <Input placeholder="Please add Recipient's Surname" type="text" />
              )}
            </FormItem>
            <FormItem label="Address">
              {getFieldDecorator('Address', {
                rules: [{ pattern: /[a-zA-Z0-9]+/, message:`Address should only contain letters and numbers`}],
              })(
                <Input placeholder="Please add Recipient Address"/>
              )}
              </FormItem>
              <FormItem label="Phone">
              {getFieldDecorator('Phone', {
                rules: [{ pattern: /^[0-9()-+]+$/, message:`Phone should only contain numbers and the symbols: (,),-,+` }],
              })(
                <Input placeholder="Please add Recipient Phone"/>
              )}
              </FormItem>
            
          </Form>
        </Modal>
      );
    }
  }
);

// export default class RecipientAdd extends React.Component {
//   state = {
//     modalRecipientVisible: false,
//   };

//   showModalRecipient = () => {
//     this.setState({ modalRecipientVisible: true });
//   }

//   handleCancelRecipient = () => {
//     this.setState({ modalRecipientVisible: false });
//   }

//   handleAddRecipient = () => {
//     const form = this.formRef.props.form;
//     form.validateFields((err, values) => {
//       if (err) {
//         return;
//       }
//       console.log('Received values of form: ', values);
//       // form.resetFields();
//       this.setState({ modalRecipientVisible: false });
//     });
//   }

//   saveFormRef = (formRef) => {
//     this.formRef = formRef;
//   }

//   render() {
//     return (
//       <div>
//         <Button type="primary" onClick={this.showModalRecipient}>Add Recipient2</Button>
//         <RecipientForm
//           // wrappedComponentRef={this.saveFormRef}
//           // modalRecipientVisible={this.state.modalRecipientVisible}
//           // onCancel={this.handleCancelRecipient}
//           // onCreate={this.handleAddRecipient}
//           wrappedComponentRef={this.saveFormRef}
//           visible={this.state.modalRecipientVisible}
//           onCancel={this.handleCancelRecipient}
//           onCreate={this.handleAddRecipient}
//         />
//       </div>
//     );
//   }
// }
