import { CCard, CCardBody, CCardSubtitle, CCardText, CCardLink, CCardTitle } from '@coreui/react';
import Button from 'react-bootstrap/Button';
import '@coreui/coreui/dist/css/coreui.min.css'
import React from 'react';
import './cardComponent.css'

const CardComponent = ({title, subtitle, text, link, handleModalOpen}) => {

  const getButton = (name) => {
    return (
      <div>
        <Button onClick = {wrapHandleModalOpen} className='custombutton'>{name}</Button>
      </div>
    )
  }

  const getLink = (link) => {
    return (
      <CCardLink href={link}>View Event on Calendar</CCardLink>
    )
  }

  function wrapHandleModalOpen() {
    handleModalOpen();
  }

  return (
    <CCard className="cardStyle">
      <CCardBody>
        <CCardTitle>{title}</CCardTitle>
        {subtitle && <CCardSubtitle className="mb-2 text-medium-emphasis">{subtitle}</CCardSubtitle>}
        {text && <CCardText>
          {text}
        </CCardText>}
          {handleModalOpen && getButton(link)}
          {!handleModalOpen && getLink(link)}
      </CCardBody>
    </CCard>
  );
}

export default CardComponent;