/* eslint-disable react/jsx-no-undef */
"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import cl from "../../styles/components/HeaderInfo.module.scss"
import avatar from "@/images/avataruser.png"
import { BELL } from '@/svg/listSvg'

type Props = {
    NAME: string,
    LANGUAGES: string[]
}

export default function HeaderInfo({NAME, LANGUAGES}: Props) {

    const [active, setActive] = useState(LANGUAGES[0])
    const [open, setOpen] = useState(false)
    const [activeUserMenu, setActiveUserMenu] = useState(false)

  return (
    <>
        <div className={ open ? `${cl.info} ${cl.info_active}` : `${cl.info}`}>
            <div className={cl.info__languages}>
                <p onClick={() => setActive(LANGUAGES[0])} style={{color: active === LANGUAGES[0] ? "#5ACEE8" : "#616B77"}} className={cl.info__language}>{LANGUAGES[0]}</p>
                <p onClick={() => setActive(LANGUAGES[1])} style={{color: active === LANGUAGES[1] ? "#5ACEE8" : "#616B77"}} className={cl.info__language}>{LANGUAGES[1]}</p>
            </div>
            <div className={cl.info__bell}>
                {BELL}
                <p className={cl.info__message}>No message yet</p>
            </div>
            <div onClick={() => setActiveUserMenu(!activeUserMenu)} className={activeUserMenu ? `${cl.info__user} ${cl.user_active_menu}` : `${cl.info__user}`}>
                <Image src={avatar} alt="Avatar User" />
                <p>{NAME}</p>
                <ul style={{opacity: activeUserMenu ? 1 : 0}} className={cl.user_menu}>
                    Here can be more options
                </ul>
            </div>
        </div>
        <div onClick={() => setOpen(!open)} className={ open ? `${cl.burger_menu} ${cl.burger_menu_active}` : cl.burger_menu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </>
  )
}