import React from "react";
import { InputDateAmount } from "../Input/DateAmount";
import RecipientInfo from "../Recipient/Info";
import { Button } from "antd";

export const ScreenTwoRow1 = ({
  fileName,
  onChangeDate,
  onChangeAmount,
  addOrEditRecipientCondition,
  onClickModal,
  name,
  surname,
  address,
  phone
}) => (
  <div className={`margin flex-container`}>
    <div>
      <InputDateAmount
        onChangeDate={onChangeDate}
        onChangeAmount={onChangeAmount}
      />
    </div>
    <div>
      <div>
        <span className="bold">Invoice File: </span>
        {fileName}
      </div>
      {addOrEditRecipientCondition ? (
        <Button type="primary" onClick={onClickModal}>
          Add Recipient
        </Button>
      ) : (
        <div>
          <RecipientInfo
            name={name}
            surname={surname}
            address={address}
            phone={phone}
          />
          <Button type="primary" onClick={onClickModal}>
            Edit Recipient
          </Button>
        </div>
      )}
    </div>
  </div>
);
