import React from 'react'
import cl from "@/styles/components/CardStatus.module.scss"
import { DONE } from '@/svg/listSvg'

type Props = {
    typeVerification: string,
    infoVerification: string
}

function CardStatus({typeVerification, infoVerification}: Props) {
  return (
    <li className={cl.card}>
        {DONE}
        <p className={cl.card__type}>{typeVerification}</p>
        <p className={cl.card__info}>{infoVerification}</p>
    </li>
  )
}

export default CardStatus