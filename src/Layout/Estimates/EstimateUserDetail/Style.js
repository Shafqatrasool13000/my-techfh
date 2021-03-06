import styled from "styled-components";

const Style = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 50px 20px;
  .grid-container-areas{
  display: grid;
  grid-template-areas: 
  "b a" 
  "c a";
  grid-template-columns: 1fr 1fr;
  .a{
    grid-area: a;
    .title{
      line-height: 20px !important;
    }
    
  }
  .b{
    grid-area: b;
  }
  .c{
    grid-area: c;
  }
  
  column-gap: 40px;

  .estimate{
    grid-row: 1 / span 2;
  }
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    @media screen and (max-width:925px) {
      grid-template-columns: 1fr;
      
    }
  }
  .data {
    width: 100%;
    border-bottom: 2px solid #b5b5c3;
    line-height: 6px;
    margin-bottom: 10px;
    padding-top: 20px;

  }
  .title {
    letter-spacing: 0px;
    color: #1b283f;
    font-size: 16px;
    font-weight: 500;
    line-height: 15px;
  }
  .identity {
    letter-spacing: 0px;
    color: #b5b5c3;
  }
  .rowmerge {
    grid-column-start: 2;
    grid-row-start: 2;
    grid-row-end: 4;
    line-height: 15px;
    letter-spacing: 0px;
    color: #1b283f;
    padding-top: 15px;
    margin-bottom: 30px;
  }
`;

export default Style;
