import styled from 'styled-components'

export const HeaderRightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ul {
    display: flex;
    align-items: center;
    position: relative;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      cursor: pointer;
    }
    .userBtn {
      border: 1px solid #dddddd;
      border-radius: 21px;
      padding: 0 10px;
      box-sizing: border-box;
      width: 80px;
      height: 40px;
      transition: box-shadow 0.3s ease;
      // 混入公共样式box-shadow
      ${(props) => props.theme.mixins.boxShadow}
    }
    .btnTool {
      position: absolute;
      left: 5px;
      top: 55px;
      width: 250px;
      background-color: #fff;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.18);
      padding: 5px 0px;
      box-sizing: border-box;
      font-weight: 500;
      span {
        line-height: 40px;
        padding: 0 10px;
        display: block;
        cursor: pointer;
        transition: background-color 0.2s ease;
        &:hover {
          background-color: #f5f7fa;
        }
      }

      .btnLogin {
        border-bottom: 1px solid #d7dae2;
        span:first-child {
          font-weight: 600;
        }
      }
    }
  }
`
