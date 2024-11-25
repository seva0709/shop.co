import React from 'react'
import s from './SectionTitle.module.scss'

const SectionTitle = ({children, arient}) => {
  return (
    
    <>
    <h1 style={{textAlign: arient}} className={s.title}>
        {children}
    </h1>
    </>
  )
}

export default SectionTitle