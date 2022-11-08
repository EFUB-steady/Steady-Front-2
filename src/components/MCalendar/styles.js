import styled from "styled-components";
import "../../styles/reset.css";
import { ewhaGreen } from "../../styles/colors";

export const Bold = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  font-family: "Bauhaus93";
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: relative;
  margin: 42px 0;

  .react-calendar {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    font-family: "Courier New";

    .react-calendar__navigation {
      padding: 1rem;

      font-size: 1.5rem;
      font-weight: bold;

      button {
        margin-left: 0.5rem;
      }
    }

    .react-calendar__month-view__weekdays {
      font-family: "bauhaus";
      font-family: "Bauhaus93";

      .react-calendar__month-view__weekdays__weekday {
        background-color: ${ewhaGreen};
        border: 1px solid #000000;

        border-top: 2px solid #000000;

        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;

        color: #ffffff;

        display: flex;
        justify-content: center;

        abbr {
          font-size: 1.5rem;
          font-weight: bold;
          padding: 5px 0;
        }
      }
    }

    .react-calendar__month-view__days {
      border: 2px solid #000000;

      .react-calendar__month-view__days__day {
        position: relative;

        background-color: #ffffff;
        border: 1px solid #000000;
        height: 0;
        padding: 0px;
        padding-bottom: calc(80% / 7);

        display: flex;
        justify-content: flex-end;

        abbr {
          padding: 8px;
          font-size: 1.5rem;
          font-weight: bold;
        }
      }

      .react-calendar__month-view__days__day--neighboringMonth {
        abbr,
        .dot-container {
          display: none;
        }
      }
    }
  }
`;
