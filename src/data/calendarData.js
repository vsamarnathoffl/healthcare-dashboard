const calendarMockData = {
  year: 2025,
  month: 4, 
  daysInMonth: 31,
  appointments: {
    3: ["09:00", "11:00"],
    10: ["13:00"],
    18: ["15:00"],
    23: ["09:00", "13:00"],
  },
  appointmentDetails: [
    {
      title: "Dentist",
      time: "May 3, 09:00 - 10:00 AM",
      doctor: "Dr. Veerabhadra Sai",
      isHighlighted: true,
    },
    {
      title: "Physiotherapy Appointment",
      time: "May 18, 15:00 - 16:00 PM",
      doctor: "Dr. Amarnath",
      isHighlighted: false,
    },
  ],
};

export default calendarMockData