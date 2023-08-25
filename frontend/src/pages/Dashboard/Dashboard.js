import React from "react";
import "../Dashboard/Dashboard.css";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import moment from "moment";

const Dashboard = () => {
  const handleMyProfileClick = () => {
    //This will navigate to the MYProfile page.
    window.location.href = "/Profile";
  };
  const handleFeeStructureClick = () => {
    // This will navigate to the Fee Structure page.
    window.location.href = "/FeeStructure";
  };

  const handleCalendarClick = () => {
    // This will navigate to the Calendar page.
    window.location.href = "/Calendar";
  };

  const currentDate = moment().format("MMMM Do, YYYY"); // Get the current date using moment.js

  /*.............for chart data/...................*/
  const data = [
    { name: "Semester 1", students: 30 },
    { name: "Semester 2", students: 20 },
    { name: "Semester 3", students: 27 },
    { name: "Semester 4", students: 28 },
    { name: "Semester 5", students: 32 },
    { name: "Semester 6", students: 35 },
    { name: "Semester 7", students: 26 },
    { name: "Semester 8", students: 31 },
    { name: "Semester 9", students: 24 },
  ];
  // Define a custom color palette for each semester
  const semesterColors = {
    "Semester 1": "#FF5733",
    "Semester 2": "#FFC300",
    "Semester 3": "#C70039",
    "Semester 4": "#900C3F",
    "Semester 5": "#581845",
    "Semester 6": "#00FF00",
    "Semester 7": "#FF0000",
    "Semester 8": "#0000FF",
    "Semester 9": "#800000",
  };
  /*.............for bar chart data/...................*/
  const barChartData = [
    { name: "Semester 1", boys: 15, girls: 15 },
    { name: "Semester 2", boys: 10, girls: 10 },
    { name: "Semester 3", boys: 13, girls: 14 },
    { name: "Semester 4", boys: 14, girls: 14 },
    { name: "Semester 5", boys: 16, girls: 16 },
    { name: "Semester 6", boys: 18, girls: 17 },
    { name: "Semester 7", boys: 12, girls: 14 },
    { name: "Semester 8", boys: 15, girls: 16 },
    { name: "Semester 9", boys: 12, girls: 12 },
  ];

  // Custom color palette for boys and girls bars
  const boysColor = "#005EFF";
  const girlsColor = "#FF00FF";
  return (
    <>
      {/*...............Rest of the content...........*/}
      <div>
        <div className="dashboard-container">
          <div className="row ">
            <div className="col-md-4 d-flex justify-content-around">
              <button
                className=" p-4 rounded fs-6 text-white "
                style={{
                  backgroundColor: "#14A888",
                  marginRight: "30px",
                  borderStyle: "none",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
                onClick={handleMyProfileClick}
              >
                <FaIcons.FaUserGraduate style={{ marginRight: "5px" }} />
                My Profile
              </button>
            </div>
            <div className="col-md-4 d-flex justify-content-around">
              <button
                className="p-4 rounded fs-6 text-white "
                style={{
                  backgroundColor: "#0091E6",
                  borderStyle: "none",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
                onClick={handleFeeStructureClick}
              >
                <AiIcons.AiOutlineTable style={{ marginRight: "5px" }} />
                Fee Structure
              </button>
            </div>
            <div className="col-md-4 d-flex justify-content-around">
              <button
                className="p-4 rounded fs-6 text-white "
                style={{
                  backgroundColor: "#9768D9",
                  borderStyle: "none",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
                onClick={handleCalendarClick}
              >
                <FaIcons.FaRegCalendarAlt style={{ marginRight: "10px" }} />
                Calendar - {currentDate}
              </button>
            </div>
          </div>
        </div>
        {/*..................pie chart..........*/}
        <div className="pie-container">
          <div className="row">
            <div className="col-md-6">
              {/* <PieChart
                className="piechart"
                width={500}
                height={500}
                aspectRatio={1}
              >
            
                <Pie
                  data={data}
                  dataKey="students"
                  outerRadius={200}
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    value,
                    index,
                  }) => {
                    const RADIAN = Math.PI / 180;
                    const radius =
                      25 + innerRadius + (outerRadius - innerRadius);
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                      <text
                        x={x}
                        y={y}
                        fill={semesterColors[data[index].name]}
                        textAnchor={x > cx ? "start" : "end"}
                        dominantBaseline="central"
                      >
                        {data[index].name}
                      </text>
                    );
                  }}
                >
                  {data.map((entry) => (
                    <Cell
                      key={`cell-${entry.name}`}
                      fill={semesterColors[entry.name]}
                    />
                  ))}
                </Pie>
                <Label
                  value="Semester"
                  position="bottom"
                  offset={-10}
                  style={{ textAnchor: "middle", fontSize: 14 }}
                />
              </PieChart> */}
            </div>
            <div className=" col-md-6">
              <BarChart
                className="barchart"
                width={500}
                height={400}
                data={barChartData}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="boys" fill={boysColor} barSize={30} />
                <Bar dataKey="girls" fill={girlsColor} barSize={30} />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
