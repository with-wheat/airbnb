import PropTypes from 'prop-types'
import React, { memo } from 'react'
import TitleWrapper from './style'

const Title = memo((props) => {
  const { title, subtitle } = props
  return (
    <TitleWrapper>
      <div className="title">{title}</div>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </TitleWrapper>
  )
})

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default Title
