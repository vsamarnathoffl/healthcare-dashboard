import {
  HeartPulse,
  ThermometerSun,
  Droplets
} from "lucide-react";

const iconMap = {
  HeartPulse,
  ThermometerSun,
  Droplets
};

export default function HealthStatusCards({ cards }) {
  return (
    <div className="health-cards">
      {cards.map(({ title, value, unit, icon, iconColor, color, barColor, maxValue }) => {
        const IconComponent = iconMap[icon];
        return (
          <div
            className="card"
            key={title}
            style={{ background: color }}
          >
            <div className="card-icon">
              <IconComponent size={28} color={iconColor} />
            </div>
            <div className="card-details">
              <p className="card-title">{title}</p>
              <div
                style={{
                  width: "100%",
                  height: "10px",
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  overflow: "hidden",
                  marginBottom: "6px"
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${(value / maxValue) * 100}%`,
                    backgroundColor: barColor,
                    transition: "width 0.4s ease"
                  }}
                />
              </div>
              <p className="card-value">{value} {unit}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
