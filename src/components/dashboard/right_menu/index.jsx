import React from 'react'
import FriendList from './friend_list.jsx'
import GroupList from './group_list.jsx'

const RightMenu = () => {
    return (
        <div className="px-3">
            <FriendList />
            <GroupList />
        </div>
    )
}
export default RightMenu
