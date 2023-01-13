import styled from 'styled-components'

export const HeaderLeftWrapper = styled.div`
  flex: 1;
  color: ${(props) => props.theme.color.primary};
  display: flex;
  align-items: center;
  .logo {
    cursor: pointer;
  }
`
