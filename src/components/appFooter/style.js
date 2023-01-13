import styled from 'styled-components'
const FooterWrapper = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.border.primaryColor};
  margin-top: 20px;
  .content {
    width: 980px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    border-bottom: 1px solid ${(props) => props.theme.border.primaryColor};

    .item {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      margin: 20px 0;
      ul {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        li {
          display: flex;
          font-weight: 500;
          padding: 5px 0;
          box-sizing: border-box;
          font-size: 12px;
          color: ${(props) => props.theme.font.primaryColor};
        }
      }
    }
  }
  .footerLogo {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }
`
export default FooterWrapper
