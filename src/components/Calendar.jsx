import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarView({
  year,
  month,
  daysInMonth,
  appointments,
  appointmentDetails,
}) {
  const scrollRef = useRef(null);

  const calendarCells = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const dateObj = new Date(year, month, day);
    const dayName = daysOfWeek[dateObj.getDay()];
    calendarCells.push({ day, dayName, appointments: appointments[day] || [] });
  }

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header-row">
        <h2 className="calendar-month">{`May ${year}`}</h2>
        <div className="calendar-nav">
          <button onClick={scrollLeft} className="calendar-arrow">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button onClick={scrollRight} className="calendar-arrow">
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="calendar-scroll-wrapper">
        <div className="calendar-scroll" ref={scrollRef}>
          {calendarCells.map((cell, idx) => (
            <div key={idx} className="calendar-box">
              <div className="calendar-day-label">{cell.dayName}</div>
              <div className="calendar-date">{cell.day}</div>
              {cell.appointments.map((time, i) => (
                <div
                  key={i}
                  className={
                    cell.day === 3 && time === "09:00"
                      ? "calendar-appt dentist-appt"
                      : "calendar-appt"
                  }
                >
                  {time}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="calendar-appointments">
        {appointmentDetails.map((appt, idx) => (
          <div
            key={idx}
            className={`calendar-card ${appt.isHighlighted ? "navy" : ""}`}
          >
            <div className="calendar-card-title">{appt.title}</div>
            <div className="calendar-card-time">{appt.time}</div>
            <div className="calendar-card-doctor">{appt.doctor}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
