import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ForumIcon from '@mui/icons-material/Forum';

export const SidebarData =[
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/homepage",
    },
    {
        title: "Mailbox",
        icon: <MailIcon/>,
        link: "/mailbox",
    },
    {
        title: "Employees",
        icon: <GroupIcon/>,
        link: "/employees",
    },
    {
        title: "Messenger",
        icon: <ChatIcon/>,
        link: "/messenger",
    },
    {
        title: "Calendar",
        icon: <CalendarMonthIcon/>,
        link: "/calendar",
    },
    {
        title: "Forum",
        icon: <ForumIcon/>,
        link: "/forum",
    },
]