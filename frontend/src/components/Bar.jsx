import React from 'react'

const Bar = ({username}) => {
  return (
<div className="flex items-center px-4 py-2 bg-gray-600 border-b border-white rounded-md">
  <div className="flex-1">
    <span className="text-xl font-bold text-white">{username}</span>
  </div>
</div>

  )
}

export default Bar