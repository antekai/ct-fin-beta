import React from "react";
import { FileUpload } from "../File/Upload";

export const ScreenOne = ({ onUpload }) => (
  <div className={`margin-tb flex-column`}>
    <div className="invoice-title"> Upload Invoice File</div>
    <div>
      <FileUpload onChange={onUpload} />
    </div>
  </div>
);
