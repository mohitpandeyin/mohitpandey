'use client'

import React from 'react'
import { HowWeSolveProps } from './types'
import classes from './index.module.css'

export const HowWeSolve: React.FC<HowWeSolveProps> = ({ heading, features }) => {
  return (
    <section className={classes.howWeSolveSection}>
      <div className={classes.container}>
        <h2 className={classes.title}>{heading}</h2>
        <div className={classes.cardsWrap}>
          {features &&
            features.map((feature, index) => (
              <div key={index} className={classes.card}>
                <div className={`${classes.cardContent} ${classes[feature.theme]}`}>
                  <div>
                    <h3 className={classes.cardTitle}>{feature.value}</h3>
                    <div className={classes.cardSubtitleWrap}>
                      <div
                        className={classes.icon}
                        dangerouslySetInnerHTML={{ __html: feature.icon }}
                      />
                      <p className={classes.subtitle}>{feature.title}</p>
                    </div>
                  </div>
                  <p className={classes.cardDesc}>{feature.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
