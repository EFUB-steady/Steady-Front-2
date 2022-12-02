import { useState, useEffect, Button } from "react";
import styled from "styled-components";
import "./reset.css";
import Calendar from "react-calendar";
// import { Clicking } from "../../pages/MainPage/MemberMainPage";

function NavigationLabel(month) {
  return (
    <>
      <Bold>{month}</Bold>
    </>
  );
}

function Mcalendar() {
  const [value, onChange] = useState(new Date());
  const today = new Date();
  const [viewNext, setViewNext] = useState(false);

  return (
    <Container>
      <Calendar
        value={value}
        onChange={onChange}
        onClickDay={<Button onClick={() => setViewNext(true)} />}
        locale={"en"}
        calendarType={"US"}
        showNeighboringMonth
        navigationLabel={({ date }) =>
          NavigationLabel(
            date.toLocaleDateString("ko-KR", { month: "2-digit" }),
          )
        }
        prev2Label={null}
        next2Label={null}
        tileContent={({ date }) => {
          const lastDate = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0,
          ).getDate();
          return date.getDate() === lastDate ? (
            <div className="dot-container">
              <div className="dot"></div>
            </div>
          ) : null;
        }}
      />
      ;
    </Container>
  );
}

export default Mcalendar;

const Bold = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: relative;
  .react-calendar {
    width: 1000px;
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
      .react-calendar__month-view__weekdays__weekday {
        background-color: #00462a;
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
      border: 1px solid #000000;
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
      .react-calendar__tile--now {
        background-color: #eeeeee;
        abbr {
          text-decoration: underline;
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
