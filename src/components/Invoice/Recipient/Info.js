import React from 'react';

const RecipientInfo = ({name,surname,address,phone}) => (
  <div className="margin-bottom">
    <div className="bold">Recipient Info</div>
    <div><span className="bold">Name:</span> {name}</div>
    <div><span className="bold">Surname:</span> {surname}</div>
    <div><span className="bold">Address:</span> {address}</div>
    <div><span className="bold">Phone:</span> {phone}</div>
  </div>
)
export default RecipientInfo