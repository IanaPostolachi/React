import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as AiOutlineIcons from 'react-icons/AiOutline';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';


export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Movies',
        path: '/movies',
        icon: <BiIcons.BiMovie />,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path: '/users',
        icon: <AiOtline.AiOutlineUser/>,
        cName: 'nav-text'
    }
]