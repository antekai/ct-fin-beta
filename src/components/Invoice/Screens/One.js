import React from "react";
import { FileUpload } from "../File/Upload";

export const ScreenOne = ({ file }) => (
  <div className={`margin-tb flex-column`}>
    <div className="invoice-title"> Upload Invoice File</div>
    <div>
      <FileUpload onChange={file} />
    </div>
  </div>
);
