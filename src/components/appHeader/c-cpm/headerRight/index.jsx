import React, { memo, useState } from 'react'
import { HeaderRightWrapper } from './style'
import WordSvg from '@/assets/svg/WordSvg'
import TheList from '@/assets/svg/TheList'
import UserSvg from '@/assets/svg/UserSvg'
const HeaderRight = memo(() => {
  const [isShow, setShow] = useState(false)
  window.addEventListener(
    'click',
    () => {
      setShow(false)
    },
    true
  )
  return (
    <HeaderRightWrapper>
      <ul>
        <li>登录</li>
        <li>注册</li>
        <li>
          <WordSvg />
        </li>
        <li className="userBtn" onClick={() => setShow(true)}>
          <TheList />
          <UserSvg />
        </li>
        {isShow && (
          <div className="btnTool">
            <div className="btnLogin">
              <span>注册</span>
              <span>登录</span>
            </div>
            <div className="btnInfo">
              <span>来爱彼迎发布房源</span>
              <span>开展体验</span>
              <span>帮助</span>
            </div>
          </div>
        )}
      </ul>
    </HeaderRightWrapper>
  )
})

export default HeaderRight
