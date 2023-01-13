import React, { memo, useLayoutEffect } from 'react'
import Banner from './c-cpm/banner'
import { HomeWrapper } from './style'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { homeGoodsPrice } from '@/store/modules/home'
import Title from '@/components/title'
import GoodsItem from './c-cpm/goodsItem/index'

const Home = memo((props) => {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(homeGoodsPrice())
    return () => {}
  }, [dispatch])

  const { goodPrice } = useSelector(
    (store) => ({
      goodPrice: store.home.goodPrice,
    }),
    shallowEqual
  )

  return (
    <HomeWrapper>
      <Banner />
      <div className="content">
        <Title title={goodPrice.title}></Title>
        <div className="goodsItem">
          {goodPrice.list?.slice(0, 8).map((res, index) => {
            return <GoodsItem key={index} goods={res} />
          })}
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
