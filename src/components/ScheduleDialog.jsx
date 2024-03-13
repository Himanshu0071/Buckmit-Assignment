import React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/lab";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import profileImg from '../assets/Avatar.png'

const ScheduleDialog = ({ isOpen, setIsOpen }) => {

    const [selectedMenu, setSelectedMenu] = useState("Time");
    
    const handleClose = () => {
      setIsOpen(false);
    };
  
  const handleNext = () => {
    if (selectedMenu === "Time") {
      setSelectedMenu("Date");
    } else if (selectedMenu === "Date") {
      setSelectedMenu("TeamMember");
    } else if (selectedMenu === "TeamMember") {
      setSelectedMenu("Time");
    }
  };

  const handleConfirm = () => {
    alert("Members confirmed")
    setIsOpen(false)
    setSelectedMenu("Time")
   };

  return (
    <Dialog
    sx={{
      "& .MuiPaper-root": {
        borderRadius: "25px",
      },
    }}
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
 
      <DialogContent
        style={{ display: "flex", borderRight: "1px solid red", gap: "20px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            background: "#FAFAFA",
          }}
        >
          <p
            style={{ lineHeight: "20px", padding: "10px", cursor: "pointer" }}
            onClick={() => setSelectedMenu("Time")}
          >
            Time
          </p>
          <p
            style={{ lineHeight: "20px", padding: "10px", cursor: "pointer" }}
            onClick={() => setSelectedMenu("Date")}
          >
            Date
          </p>
          <p
            style={{ lineHeight: "20px", padding: "10px", cursor: "pointer" }}
            onClick={() => setSelectedMenu("TeamMember")}
          >
            Add team members
          </p>
        </div>
        <div style={{ alignSelf: "center", padding: "20px" }}>
          {selectedMenu === "Time" && (
            <>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
              >
                Select a time for meeting
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                The following time will be set for the meeting
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <TextField
                  autoFocus
                  margin="dense"
                  id="hour1"
                  placeholder="HH"
                  fullWidth
                  style={{ maxWidth: "55px", padding: "5px" }}
                  inputProps={{
                    maxLength: 2, // Limiting to 2 characters
                    pattern: "(0[0-9]|1[0-9]|2[0-3])", // Regex pattern for 24-hour format
                  }}
                />
                <TextField
                  margin="dense"
                  id="hour2"
                  placeholder="HH"
                  fullWidth
                  style={{ maxWidth: "55px", padding: "5px" }}
                  inputProps={{
                    maxLength: 2,
                    pattern: "(0[0-9]|1[0-9]|2[0-3])",
                  }}
                />
                <TextField
                  margin="dense"
                  id="minute1"
                  placeholder="MM"
                  fullWidth
                  style={{ maxWidth: "55px", padding: "5px" }}
                  inputProps={{
                    maxLength: 2,
                    pattern: "[0-5][0-9]",
                  }}
                />
                <TextField
                  margin="dense"
                  id="minute2"
                  placeholder="MM"
                  fullWidth
                  style={{ maxWidth: "55px", padding: "5px" }}
                  inputProps={{
                    maxLength: 2,
                    pattern: "[0-5][0-9]",
                  }}
                />
              </div>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#475467",
                  paddingBottom: "10px",
                }}
              >
                Time in 24 hours format
              </p>
            </>
          )}
          {selectedMenu === "Date" && (
            <div style={{ padding: "5px" }}>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
              >
                Select a Date for the meeting
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                The following Date will be set for the meeting
              </p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                  orientation="landscape"
                  sx={{
                    minWidth: "300px",
                    "& .MuiPickersToolbar-root": {
                      display: "none",
                    },
                    "& .MuiPickersDay-root.Mui-selected": {
                      backgroundColor: "red",
                    },
                    "& .MuiButton-root": {
                      display: "none",
                    },
                    
                  }}
                  
                />
              </LocalizationProvider>
            </div>
          )}

          {selectedMenu === "TeamMember" && (<>
            <div style={{ padding: "5px" }}>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
              >
                Add a team member
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                The following users have access to this meeting :
              </p>
            </div>
            <div style={{display:"flex", flexDirection:"column",padding:"10px"}}>
              <div style={{display:"flex",justifyContent:"space-between",padding:"10px 0px 10px 0px"}}>
                <div style={{display:"flex"}}>
                <img style={{width:"40px",height:"40px"}}
                src={profileImg}
                />
                <div>
                <p style={{fontWeight:"600",fontSize:"14px",lineHeight:"20px"}}>candice Wu</p>
                <p style={{fontWeight:"400",fontSize:"14px",color:"#475467",lineHeight:"20px"}}>candice@untitledui.com</p>
                </div>
                </div>
                <Button>
                  Remove
                </Button>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"10px 0px 10px 0px"}}>
                <div style={{display:"flex"}}>
                <img style={{width:"40px",height:"40px"}}
                src={profileImg}
                />
                <div>
                <p style={{fontWeight:"600",fontSize:"14px",lineHeight:"20px"}}>Drew Cano</p>
                <p style={{fontWeight:"400",fontSize:"14px",color:"#475467",lineHeight:"20px"}}>candice@untitledui.com</p>
                </div>
                </div>
                <Button>
                  Remove
                </Button>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"10px 0px 10px 0px"}}>
                <div style={{display:"flex"}}>
                <img style={{width:"40px",height:"40px"}}
                src={profileImg}
                />
                <div>
                <p style={{fontWeight:"600",fontSize:"14px",lineHeight:"20px"}}>Demi Wilkinson</p>
                <p style={{fontWeight:"400",fontSize:"14px",color:"#475467",lineHeight:"20px"}}>candice@untitledui.com</p>
                </div>
                </div>
                <Button>
                  Remove
                </Button>
              </div>
            </div>
            <div style={{padding:"10px 0px 10px 0px"}}>
              <p>Team Member</p>
              <TextField
              sx={{minWidth:"290px"}}
              placeholder="Select Team Member"
              />
            </div>
            </>
          )}

         {selectedMenu === "TeamMember" ? 
         <Button
         variant="contained"
         onClick={handleConfirm}
         style={{
           backgroundColor: "#FF5151",
           gap: "10px",
           marginBottom: "15px",
           width:"155px"
         }}
       >
         Confirm
       </Button>
         : <Button
            variant="contained"
            onClick={handleNext}
            style={{
              backgroundColor: "#FF5151",
              gap: "10px",
              marginBottom: "15px",
              width:"155px"
            }}
          >
            Next
          </Button> }
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleDialog;
