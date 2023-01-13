import React, { memo, useState } from 'react'
import FooterWrapper from './style'
import data from '@/assets/data/footer.json'
const AppFooter = memo(() => {
  const [footerData] = useState(data)
  return (
    <FooterWrapper>
      <div className="content">
        {footerData.map((res, index) => {
          return (
            <div key={index} className="item">
              <div className="title">{res.name}</div>
              <ul>
                {res.list.map((list, key) => {
                  return <li key={key}>{list}</li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
      <div className="footerLogo">
        <span>
          2022 Airbnb, Inc. All rights
          reserved.条款·隐私政策·网站地图·全国旅游投诉渠道12301
        </span>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter
