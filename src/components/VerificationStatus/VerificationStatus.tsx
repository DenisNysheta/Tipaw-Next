import React from 'react'
import cl from "@/styles/components/VerificationStatus.module.scss"
import CardStatus from './CardStatus'

function VerificationStatus() {

    const CARDS_LIST = [
        {
            typeVerification: "Verification",
            infoVerification: "You verified your account",
        },
        {
            typeVerification: "Profile picture",
            infoVerification: "You added your profile picture",
        },
        {
            typeVerification: "Parents",
            infoVerification: "You added the parents",
        },
        {
            typeVerification: "Litter",
            infoVerification: "Your created the litter",
        }
    ]

  return (  
    <div className={cl.verification}>
        <div className={cl.verification__status}>
            <div className={cl.verification__info}>
                <p>You successfully complete your profile at Tipaw</p>
                <p>Now you can use Tipaw for 100% 🎉</p>
            </div>
            <div className={cl.verification__proggres}>
                <div className={cl.verification__proggres__info}>
                    <p>Profile completed</p>
                    <p>100%</p>
                </div>
                <div className={cl.verification__proggres__load}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <ul className={cl.verification__cards}>
            {CARDS_LIST.map((obj, index) => {
                return <CardStatus key={index} typeVerification={obj.typeVerification} infoVerification={obj.infoVerification} />
            })}
        </ul>
    </div>
  )
}

export default VerificationStatus