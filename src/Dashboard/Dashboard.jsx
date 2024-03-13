import React, { useState } from "react";
import "./Dashboard.css";
import { TiPin } from "react-icons/ti";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ScheduleDialog from "../components/ScheduleDialog";

const Dashboard = () => {
  const [scheduleDialogOpen, setScheduleDialogOpen] = useState(false);
  const handleOpen = (e) => {
    console.log("open");
    setScheduleDialogOpen(true);
  };

  console.log(scheduleDialogOpen);
  const announcementData = [
    {
      title: "Outing Schedule for every departmen",
      time: "5 minutes ago",
      pin: true,
    },
    { title: "Meeting hr department", time: "10 minutes ago", pin: false },
    {
      title: "It department neeed two more ...",
      time: "20 minutes ago",
      pin: true,
    },
  ];
  return (
    <div className="dashboard-container">
      <p className="heading">Dashboard</p>
      <div className="main-content-dashboard">
        <div className="left-side-content">
          <div className="card-main">
            <div className="card-1">
              <p>Available Position</p>
              <p className="numeric-data">24</p>
              <p style={{fontFamily:"Roboto",color:"#FF5151"}}>4 urgentyl needed</p>
            </div>
            <div className="card-2">
              <p>Job Open</p>
              <p className="numeric-data">24</p>
              <p  style={{fontFamily:"Roboto",color:"#3786F1"}}>4 Actively Hiring</p>
            </div>
            <div className="card-3">
              <p>New Employees</p>
              <p className="numeric-data">24</p>
              <p style={{fontFamily:"Roboto",color:"#EE61CF"}}>4 Department</p>
            </div>
          </div>

          <div className="graph-container">
            <div
              style={{
                border: "0.5px solid gray",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "15px",
                  }}
                >
                  <p className="graph-text">Total Employees</p>
                  <p className="graph-data">216</p>
                </div>
                <div>graph</div>
              </div>

              {/* //below data./ */}
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    alignItems: "start",
                  }}
                >
                  <p style={{fontFamily:"Roboto"}}>120 Men</p>
                  <p style={{fontFamily:"Roboto"}}>96 Women</p>
                </div>

                <p
                  style={{fontFamily:"Roboto",
                    borderRadius: "4px",
                    background: "#FFEFE7",
                    padding: "5px",
                  }}
                >
                  +2% Past Month
                </p>
              </div>
            </div>

            <div
              style={{
                border: "0.5px solid gray",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "15px",
                  }}
                >
                  <p className="graph-text">Talent Request </p>
                  <p className="graph-data">16</p>
                </div>
                <div>graph</div>
              </div>

              {/* //below data./ */}
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    alignItems: "start",
                  }}
                >
                  <p style={{fontFamily:"Roboto"}}>6 Men</p>
                  <p style={{fontFamily:"Roboto"}}>10 Women</p>
                </div>

                <p
                  style={{fontFamily:"Roboto",
                    borderRadius: "4px",
                    background: "#FFEFE7",
                    padding: "5px",
                  }}
                >
                  +5% Past Month
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              borderRadius: "8px",
              marginTop: "20px",
              border: "0.5px solid gray",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p>Announcement</p>
              <p>Dropdown</p>
            </div>

            {/* data map */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "10px ",
                width: "100%",
              }}
            >
              {announcementData?.map((item) => (
                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      border: "0.5px solid #E0E0E0",
                      padding: "14px",
                      borderRadius: "8px",
                      backgroundColor: "#fafafa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p style={{ marginBottom: "5px" }}>{item.title}</p>
                      <p style={{ fontFamily:"Roboto"}}>{item.time}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <p style={{ opacity: item.pin ? "1" : ".8" }}>
                        <TiPin color="#686868" />
                      </p>
                      <p>
                        <HiOutlineDotsVertical color="#686868" />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-side-content">
          <div style={{ backgroundColor: "#161E54", borderRadius: "8px" }}>
            <p
              style={{
                backgroundColor: "#1B204A",
                padding: "15px",
                borderRadius: "8px",
                color: "white",
              }}
            >
              Recently Activity
            </p>

            <div style={{ padding: "25px 15px" }}>
              <p
                style={{
                  color: "#fff",
                  fontSize: "10px",
                  fontWeight: 500,
                  opacity: ".6",
                  marginBottom: "10px",
                }}
              >
                10.40 AM, Fri 10 Sept 2021
              </p>

              <p
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: 500,
                  marginBottom: "10px",
                }}
              >
                You Posted a New Job
              </p>

              <p
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  opacity: ".8",
                }}
              >
                Kindly check the requirements and terms of work and make sure
                everything is right.
              </p>
            </div>

            <div style={{ marginTop: "20px", padding: "0 15px 15px 15px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ color: "white" }}>Schedule a call </p>
                <p
                  onClick={(e) => handleOpen()}
                  style={{
                    background: "#FF5151",
                    color: "white",
                    fontSize: "16px",
                    borderRadius: "6px",
                    padding: "10px 25px",
                    cursor: "pointer",
                  }}
                >
                  Schedule
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              borderRadius: "8px",
              marginTop: "20px",
              border: "0.5px solid gray",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p>Upcoming Schedule</p>
              <p>Dropdown</p>
            </div>

            {/* data map */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "10px ",
                width: "100%",
              }}
            >
                <div style={{width:"100%", marginBottom:"15px"}}>
            <p style={{fontSize:"12px", fontWeight:400,marginBottom:"8px"}}>Priority</p>
                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      border: "0.5px solid #E0E0E0",
                      padding: "14px",
                      borderRadius: "8px",
                      backgroundColor: "#fafafa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p style={{ marginBottom: "5px" }}>Review candidate applications</p>
                      <p style={{fontSize:"14px",fontFamily:"Roboto"}}>Today - 11.30 AM</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      
                      <p>
                        <HiOutlineDotsVertical color="#686868" />
                      </p>
                    </div>
                  </div>
                </div>
                </div>


                <div style={{width:"100%", marginBottom:"15px"}}>
            <p style={{fontSize:"12px", fontWeight:400, marginBottom:"8px"}}>Other</p>
            <div style={{display:"flex",flexDirection:"column", gap:"10px"}}>
                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      border: "0.5px solid #E0E0E0",
                      padding: "14px",
                      borderRadius: "8px",
                      backgroundColor: "#fafafa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p style={{ marginBottom: "5px" }}>Review candidate applications</p>
                      <p style={{fontSize:"14px", fontFamily:"Roboto"}}>Today - 11.30 AM</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      
                      <p>
                        <HiOutlineDotsVertical color="#686868" />
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      border: "0.5px solid #E0E0E0",
                      padding: "14px",
                      borderRadius: "8px",
                      backgroundColor: "#fafafa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p style={{ marginBottom: "5px" }}>Interview with candidate</p>
                      <p style={{fontSize:"14px", fontFamily:"Roboto"}}>Today - 11.30 AM</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      
                      <p>
                        <HiOutlineDotsVertical color="#686868" />
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      border: "0.5px solid #E0E0E0",
                      padding: "14px",
                      borderRadius: "8px",
                      backgroundColor: "#fafafa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p style={{ marginBottom: "5px" }}>Short meeting with product designer from IT Departement</p>
                      <p style={{fontSize:"14px", fontFamily:"Roboto"}}>Today - 11.30 AM</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      
                      <p>
                        <HiOutlineDotsVertical color="#686868" />
                      </p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
            
            </div>
          </div>
        </div>
      </div>
      <ScheduleDialog
        isOpen={scheduleDialogOpen}
        setIsOpen={setScheduleDialogOpen}
      />
    </div>
  );
};

export default Dashboard;
