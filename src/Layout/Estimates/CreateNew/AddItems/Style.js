import styled from "styled-components";

const Style = styled.div`
  background: white;
  padding: 20px;
  /* .main-container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 20px;
} */

 .unitOfMeasure {
    .filter-btns .filter > label {
      color: #363636;
      font-style: normal;
      font-weight: 400;
      font-family: "EnnVisionsBold";
      font-size: 14px;
      color: white;
      border-radius: 7px;
      text-align: center;
      padding: 4px 10px;
      cursor: pointer;
      margin: 20px 0;
    }
    .filter-btns .filter > label:first-child {
      margin-left: 0 !important;
    }
    .filter-btns .filter input[type="radio"] + label {
      border-radius: 6px;
      border: 1px solid #363636;
      color: #363636;
      padding: 2px 10px;
      font-size: 16px;
    }
    .filter-btns .filter input[type="radio"]:checked + label {
      background: #F9FBFC;
      border: 1px solid #156985;
border-radius: 4px;
color: #156985;
font-family: 'EnnVisionsBold';
font-weight: 700;

    }

    .filter-btns .filter > input {
      display: none;
    }

    margin-bottom: 10px;
    p {
      font-weight: 900;
    }

    .units-detail {
      width: 100%;
      display: flex;
      /* justify-content: space-around; */
      gap: 2%;
    }
  }
.heading{
    font-weight: 700;
}
.first-table{
grid-column-start: 1;
grid-column-end: 2;
}
.second-table{
    grid-column-start: 2;
    grid-column-end: 4;
    border: 0.5px solid #d1d1d6;
    border-radius: 4px;
    @media screen and (max-width:575px) {
      border:none;  
    }
}
.main-heading{
    background: #F9F9F9;
    border-radius: 4px 4px 0px 0px;
    padding: 5px 5px 5px 20px;
  }
  .input-fields {
    display: flex;
    gap: 10px;
    .total-input{
      color: black;
    }
  }
  .tabWrapper {
    padding: 20px;
  }
  .ant-input-number-group-addon {
    opacity: 0.5;
    background: #f9fbfc;
  }
  .rateWrapper {
      //background-color: red;
    margin-bottom: 10px;
    h3 {
      font-size: 16px !important;
      font-weight: 500;
      color: #212121;
    }
  }
  .totalWrapper {
    display: flex;
    justify-content: space-between;
    font-weight: 900;
    border-bottom: 2px solid #d1d1d6;
    padding: 10px;
    margin-bottom: 10px;
  }
  .saveLineItems {
    display: flex;
    justify-content: flex-end;
  }
  .ant-radio-group {
    display: flex !important;
    gap: 20px;
  }
  .ant-radio-button-wrapper {
    border-radius: 8px;
    &::before {
      background-color: white;
    }
  }
  .addItem {
    &-label {
    }
    &-div {
      display: flex;
      justify-content: space-between;
      background: white;
      border: 0.5px solid #d6d6e0;
      border-radius: 3px;
      padding: 6px;
      margin-top: 5px;
      color: black !important;
    }
  }
  .ant-tabs-tab .ant-tabs-tab-active {
    border-right: 1px solid #d6d6e0;
    margin-right: 20px;
  }
  .ant-tabs-nav {
    border: 1px solid #d6d6e0;
    padding-left: 10px;
  }
`;

export default Style;
