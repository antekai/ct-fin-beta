import React from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;

export const FileAdditional = ({ filename, onChangeDescription, remove }) => (
  <div className={`margin flex-container`}>
    <div>
      <span className="bold">Additional Files:</span>{" "}
      {filename.map((f, index) => (
        <li key={index}>{f}</li>
      ))}
    </div>
    <TextArea
      className={`margin-rl width50`}
      placeholder="Add file description"
      autosize={{ minRows: 2 }}
      onChange={onChangeDescription}
    />
    <div>
      {" "}
      <Button type="primary" className="margin-right">
        Add
      </Button>
      <Button type="danger" onClick={remove}>
        Remove
      </Button>
    </div>
  </div>
);
