import PropTypes from 'prop-types'
import React, { memo } from 'react'

const GoodsItem = memo((props) => {
  const { goods } = props
  return <div>{goods.name}</div>
})

GoodsItem.propTypes = {
  goods: PropTypes.object,
}

export default GoodsItem
