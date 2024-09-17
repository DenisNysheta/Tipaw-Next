"use client"

import React, { useState } from "react";
import cl from "@/styles/components/Accordion.module.scss";
import { CALENDAR } from "@/svg/listSvg";

function Accordion() {

    const [active, setActive] = useState(false)

  return (
    <div className={cl.accordion}>
      <p className={cl.accordion__message}>Announcements from Tipaw</p>
      <div className={cl.accordion__accordion}>
        <p className={cl.accordion__title}>
          What is Tipaw?
          <button onClick={() => setActive(!active)} className={ active ? `${cl.accordion__btn} ${cl.accordion_btn_active}` : `${cl.accordion__btn}`}></button>
        </p>
        <time className={cl.accordion__time} dateTime="2000-01-24">
          <div>{CALENDAR}</div>
          24 January
        </time>
        {
            active ? 
            <p className={cl.accordion__text}>
                Lorem ipsum dolor sit amet consectetur. Etiam sed non id ultrices tempor. Consectetur pharetra lorem vivamus eros bibendum. Sit augue adipiscing adipiscing est massa non neque pretium metus. Consequat posuere nullam eleifend viverra pellentesque sed quis. Nunc non aenean leo lacinia etiam enim. Turpis gravida in ornare habitant volutpat. Imperdiet est ut et magna amet tortor tortor. Pulvinar suspendisse volutpat gravida placerat posuere feugiat erat ut. Aliquam facilisis ornare egestas mi. Molestie mauris aliquet dolor accumsan malesuada nam ac enim. Praesent ut elit aliquam nunc.
            </p> : null
        }
      </div>
    </div>
  );
}

export default Accordion;
