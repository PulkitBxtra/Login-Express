import React from 'react'
import TopMenu from './TopMenu'
import Analytics from './Analytics'
import RecentActivity from './RecentActivity'

function Right() {
  return (
    <React.Fragment>
    <div>
        <TopMenu></TopMenu>
        <Analytics></Analytics>
        <RecentActivity></RecentActivity>
    </div>
    </React.Fragment>
  )
}

export default Right