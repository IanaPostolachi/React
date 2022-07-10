import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
// import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: <MdIcons.MdFavorite/>,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path: '/users',
        icon: <FaIcons.FaUserAlt/>,
        cName: 'nav-text'
    }
]