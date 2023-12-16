import React from 'react'

export const BannerImage = ({ src }) => {
  return (
    <img 
    className="h-[calc(100%-10rem)] w-full mt-10 object-cover col-start-1 col-end-13 row-start-1 items-center opacity-50"
      src={src}
      alt="Background"
      />
  )
}

export const BannerImageTop = ({ src }) => {
  return (
    <img 
    className="col-start-1 col-end-13 row-start-1 row-end-3 z-10 relative"
      src={src}
      alt="Background"
      />
  )
}
