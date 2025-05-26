export default function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="appointment-card">
      <div className="appointment-title">{title}</div>
      <div className="appointment-time">{time}</div>
    </div>
  );
}
