import SimpleAppointmentCard from "./SimpleAppointmentCard.jsx";

export default function UpcomingSchedule({ Schedule }) {
  return (
    <div className="upcoming-schedule">
      <h4 className="schedule-title">The Upcoming Schedule</h4>

      {Schedule.map(({ dayLabel, appointments }) => (
        <div className="schedule-day" key={dayLabel}>
          <div className="day-label">{dayLabel}</div>
          <div className="appointments-row">
            {appointments.map(({ title, time }, index) => (
              <SimpleAppointmentCard key={index} title={title} time={time} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
