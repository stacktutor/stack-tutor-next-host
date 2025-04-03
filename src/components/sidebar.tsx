import React from 'react'

const SideBar = () => {
  return (
    <aside className="col-span-4 hidden md:block bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
        <h2 className="text-lg font-bold">Sidebar</h2>
        <p>Navigation or extra content</p>
    </aside>
  )
}

export default SideBar