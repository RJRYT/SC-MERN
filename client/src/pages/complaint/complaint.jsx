import React from 'react'
import ComplaintHeader from './ComplaintHeader'
import ComplaintForm from './ComplaintForm'
import Header from '../../components/header/Header'
import Widget from '../../components/widget/Widget'

const complaint = () => {
  return (
    <div>
     <Header title="COMPLAINTS"/>
      <ComplaintForm/>
      <Widget/>
    </div>
  )
}

export default complaint
