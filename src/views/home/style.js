import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .content {
    width: 980px;
    margin: 0 auto;

    .goodsItem {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 18px 18px;
      box-sizing: border-box;
    }
  }
`
