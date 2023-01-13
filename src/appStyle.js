import styled from 'styled-components'

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.font.primaryColor};
  .header {
    width: 100%;
    height: 75px;
    position: absolute;
  }
`
