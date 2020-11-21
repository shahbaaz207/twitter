import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
// import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon  from '@material-ui/icons/Notifications'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import ListAltIcon from '@material-ui/icons/ListAlt'
import MoreHorizIcon  from '@material-ui/icons/MoreHoriz'

import SidebarOption from './SidebarOption'
import { Button } from '@material-ui/core'
const Sidebar = () => {
    return (
        <div className="sidebar">
        <TwitterIcon className="twiiter"/>
            <SidebarOption active Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Explor"/>
            <SidebarOption Icon={NotificationsNoneIcon} title="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} title="Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Bookmarks"/>
            <SidebarOption Icon={PermIdentityIcon} title="Profile"/>
            <SidebarOption Icon={ListAltIcon} title="Lists"/>
            <SidebarOption Icon={MoreHorizIcon} title="More"/>

            <Button className="sidebar_button" variant="outlined">Tweet</Button>
            

        </div>
    )
}

export default Sidebar
