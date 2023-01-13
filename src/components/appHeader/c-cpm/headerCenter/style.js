import styled from 'styled-components'

export const HeaderCenterWrapper = styled.div`
  .wrapper {
    width: 260px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 50px;
    cursor: pointer;
    ${(props) => props.theme.mixins.boxShadow}
    .hint {
      font-size: 14px;
      span {
        margin-left: 12px;
      }
    }
    .logo {
      width: 30px;
      height: 30px;
      border-radius: 50px;
      background-color: ${(props) => props.theme.color.primary};
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
`
