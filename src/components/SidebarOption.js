import React from 'react'

const SidebarOption = ({Icon,title,active}) => {
    return (
        <div className={`sidebarOption ${active&&'sidebarOptio--active'}`}>
            <Icon/>
            <p className="hide">{title}</p>
        </div>
    )
}

export default SidebarOption
