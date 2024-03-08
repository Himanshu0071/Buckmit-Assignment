import React from 'react'
import './Sidebar.css'
import dashIcon from '../assets/ic_dashboard.svg'
import calendarIcon from '../assets/ic_calendar.svg'
import departmentIcon from '../assets/ic_department.svg'
import employeeIcon from '../assets/ic_employee.svg'
import recruitmentIcon from '../assets/ic_recruitment.svg'
import supportIcon from '../assets/ic_support.svg'
import settingsIcon from '../assets/ic_settings.svg'
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <h2 className='headingHR'>We HR</h2>
        <p className='main-menu'>Main Menu</p>
        <div>
          <div className='menu-option-fields'> <img src={dashIcon}/> <p className='sidebar-menu-text'>Dashboard</p></div>
          <div className='menu-option-fields'> <img src={recruitmentIcon}/> <p className='sidebar-menu-text'>Recruitment</p></div>
          <div className='menu-option-fields'> <img src={calendarIcon}/> <p className='sidebar-menu-text'>Schedule</p></div>
          <div className='menu-option-fields'> <img src={employeeIcon}/> <p className='sidebar-menu-text'>Employee</p></div>
          <div className='menu-option-fields'> <img src={departmentIcon}/> <p className='sidebar-menu-text'>Department</p></div>
          </div>

    <div className='other-section'>
      <p>Other</p>
    </div>
    <div>
          <div className='menu-option-fields'> <img src={supportIcon}/> <p className='sidebar-menu-text'>Support</p></div>
          <div className='menu-option-fields'> <img src={settingsIcon}/> <p className='sidebar-menu-text'>Settings</p></div>
          </div>
    </div>
  )
}

export default Sidebar