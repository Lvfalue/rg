import * as React from 'react'
import 'loaders.min.css'

const LoadingComponent = () => {
  return (
    <div className="loader">
      <div className="line-scale-pulse-out">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadingComponent
