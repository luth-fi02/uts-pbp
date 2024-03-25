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
        icon: <HomeIcon />,
        link: "/homepage",
    },
    {
        title: "Attendance",
        icon: <AttendanceIcon />,
        link: "/attendance",
    },
    {
        title: "Employees",
        icon: <GroupIcon />,
        link: "/employees",
    },
    {
        title: "Messenger",
        icon: <ChatIcon />,
        link: "/messenger",
    },
    {
        title: "Schedule",
        icon: <CalendarMonthIcon />,
        link: "/schedule",
    },
    {
        title: "Forum",
        icon: <ForumIcon />,
        link: "/forum",
    },
    {
        title: "Log Out",
        icon: <LogoutIcon />,
        link: "/loginpage",
    }
]