import React from 'react';

export const Part = ({path, index, orderIndex}) => {
  return (
    <img src={`character/character/${path}/${index + 1}.png`} alt="" width={260} style={{orderIndex, position: "absolute", top: 0, left: 0}} />
  )
}