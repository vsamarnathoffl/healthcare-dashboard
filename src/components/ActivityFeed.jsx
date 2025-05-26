import "../styles/activityFeed.css";

export default function ActivityFeed({ barData }) {
  return (
    <div className="activity-feed">
      <h4>Activity</h4>
      <p>3 appointments on this week</p>

      <div className="bar-chart">
        {barData.map(({ day, bars }, index) => (
          <div className="day" key={index}>
            <div className="bars">
              {bars.map((bar, idx) => (
                <div
                  key={idx}
                  className={`bar ${bar.className}`}
                  style={{
                    height: `${bar.height}px`,
                    marginTop: `${bar.offset}px`,
                  }}
                ></div>
              ))}
            </div>
            <span className="day-label">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
