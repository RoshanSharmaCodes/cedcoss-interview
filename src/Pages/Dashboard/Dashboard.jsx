import React, { useState } from "react";
import { Card, Layout } from "antd";
import InfoChips from "../../Components/InfoCards/InfoCard";
import RecentActivity from "../../Components/RecentActivity/RecentActivity";
import {
  ActiveUsersColumnChart,
  ActiveUsersLineChart,
} from "../../Components/HighCharts/index";
import { StatsData } from "../../Content";


const { Content } = Layout;
export default function Dashboard() {
 const [statsData, setStatsData] = useState(StatsData)
  return (
    <Content className="dashboard-content">
      <div className="dashboard-header">
        {statsData.map((item) => (
          <InfoChips
            title={item.title}
            stat={item.stats}
            percentage={item.percentage}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="dashboard-charts">
        <Card className="chart-card">
          <ActiveUsersColumnChart />
        </Card>
        <Card className="chart-card">
          <ActiveUsersLineChart />
        </Card>
      </div>
      <div className="dashboard-stats">
        <Card className="stats-panel">
          <RecentActivity />
        </Card>
      </div>
    </Content>
  );
}
