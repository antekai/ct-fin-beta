import React from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

const FileAdditional = ({filename}) =>{
  
  return(
    <div className={`margin flex-container`}>
        <div><span className="bold">Additional Files:</span> {filename.map(f => <li>{f}</li> )}</div>
        <TextArea
          className={`margin-rl width50`} 
          placeholder="Add file description" 
          autosize={{ minRows: 2}}>
        </TextArea>
      <div> <Button type="primary" className="margin-right">Add</Button>
      <Button type="danger">Remove</Button>
      </div>
    </div>
  )}

export default FileAdditional;