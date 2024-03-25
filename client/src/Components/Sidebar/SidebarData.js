import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ForumIcon from '@mui/icons-material/Forum';
import LogoutIcon from '@mui/icons-material/Logout';
import AttendanceIcon from '@mui/icons-material/DomainVerification';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon fontSize='inherit' />,
        link: "/homepage",
    },
    {
        title: "Attendance",
        icon: <AttendanceIcon fontSize='inherit' />,
        link: "/attendance",
    },
    {
        title: "Employees",
        icon: <GroupIcon fontSize='inherit' />,
        link: "/employees",
    },
    {
        title: "Messenger",
        icon: <ChatIcon fontSize='inherit' />,
        link: "/messenger",
    },
    {
        title: "Schedule",
        icon: <CalendarMonthIcon fontSize='inherit' />,
        link: "/schedule",
    },
    {
        title: "Forum",
        icon: <ForumIcon fontSize='inherit' />,
        link: "/forum",
    },
    {
        title: "Log Out",
        icon: <LogoutIcon fontSize='inherit' />,
        link: "/loginpage",
    }
]