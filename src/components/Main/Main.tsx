import React from 'react'
import "@/styles/App.scss"
import VerificationStatus from '../VerificationStatus/VerificationStatus'
import Accordion from '../Accordion/Accordion'

function Main() {
  return (
    <main>
        <VerificationStatus />
        <Accordion />
    </main>
  )
}

export default Main