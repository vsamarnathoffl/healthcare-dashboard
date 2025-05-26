import Anatomy from "./Anatomy.jsx";
import HealthStatusCards from "./HealthStatusCards.jsx";
import Calendar from "./Calendar.jsx";
import ActivityFeed from "./ActivityFeed.jsx";
import UpcomingSchedule from "./UpcomingSchedule.jsx";

import  activityBarData  from "../data/activityFeedData.js";
import statusCards from "../data/healthStatusCardData.js";
import  calendarMockData  from "../data/calendarData.js";
import schedule from "../data/upcomingSchedule.js";

export default function Dashboard() {
  return (
    <div className="dashboard-main">
      <h3 className="dashboard-title">Dashboard</h3>
      <div className="dashboard-top">
        <div className="left-column">
          <div className="top-left-row">
            <Anatomy /> 
            <HealthStatusCards cards={statusCards} />
          </div>
          <ActivityFeed barData={activityBarData} />
        </div>
        <div className="right-column">
           <Calendar 
            year={calendarMockData.year}
            month={calendarMockData.month}
            daysInMonth={calendarMockData.daysInMonth}
            appointments={calendarMockData.appointments}
            appointmentDetails={calendarMockData.appointmentDetails}
          />
          <UpcomingSchedule Schedule={schedule}/>
        </div>
      </div>
    </div>
  );
}
