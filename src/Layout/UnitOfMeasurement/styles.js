import styled from "styled-components";

export const UnitOfMeasurementContainer = styled.div`
  .unitOfMeasurementContent {
    &-detail {
      &-children {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 15px;

        @media screen and (max-width: 700px) {
          grid-template-columns: 1fr;
        }

        &-input {
          display: flex;
          align-items: center;
          gap: 10px;

          &-group{
              display: flex;
              align-items: center;
          }
        }

        .deleteicon {
          background: #d63229 !important;
          padding: 4px;
          border-radius: 3px;
          align-self: center;
        }
        .editicon {
          background: #007aff !important;
          padding: 4px;
          border-radius: 3px;
          align-self: center;
        }
      }
    }
    &-form {
      width: 49%;

      @media screen and (max-width: 700px) {
          width: 100%;
      }
    }
  }
`;