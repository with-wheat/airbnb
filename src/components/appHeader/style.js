import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 75px;
  border-bottom: ${(props) => props.theme.border.primaryColor} 1px solid;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
`
