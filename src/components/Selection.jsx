import React from 'react'
import { PartList } from '../handle/PartList'

export const Selection = ({content, total, path, set, selected}) => {
  return (
    <div className="properties-selection">
      <h2>{content}</h2>
      <PartList total={total} path={path} set={set} selected={selected} />
    </div>
  )
}