import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'
import LogoSvg from '@/assets/svg/LogoSvg'

const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWrapper>
      <div className="logo">
        <LogoSvg />
      </div>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft
