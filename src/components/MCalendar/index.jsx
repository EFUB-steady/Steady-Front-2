import { useState } from "react";
import Calendar from "react-calendar";
import { Bold, Container } from "./styles";

function NavigationLabel(month) {
  return <Bold>{month}</Bold>;
}

function Mcalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <Calendar
        value={value}
        onChange={onChange}
        locale={"en"}
        calendarType={"US"}
        showNeighboringMonth
        navigationLabel={({ date }) =>
          NavigationLabel(
            date.toLocaleDateString("ko-KR", { month: "2-digit" })
          )
        }
        prev2Label={null}
        next2Label={null}
        tileContent={({ date }) => {
          const lastDate = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
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
