import React from 'react';
import { Upload, Icon, message } from 'antd';

const Dragger = Upload.Dragger;

const propsDragger = {
  name: 'file',
  multiple: true,
  showUploadList:false,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default class FileUpload extends React.Component{ 

  render(){
    return(
  <Dragger {...propsDragger} onChange={this.props.onChange} className="margin-top" >
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
  </Dragger>
  )
  }
}

export const FDragger = (props) => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Click or drag Invoice file to this area to upload</p>
    <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
  </Dragger>
)