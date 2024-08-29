import React from 'react'
import { Part } from '../handle/Part'

export const Preview = ({ body, eyes, eyebrow, mouth, hair, clothing1, clothing2, clothing3, earrings, glasses, hats, neckwear }, ref) => {
  return (
    <>
      <div className="avatar-view">
        <div className="avatar">
          <Part path="body" index={body} orderIndex={0} />
          <Part path="hair" index={hair} orderIndex={1} />
          <Part path="eyes" index={eyes} orderIndex={2} />
          <Part path="eyebrows" index={eyebrow} orderIndex={2} />
          <Part path="noses" index={0} orderIndex={2} />
          <Part path="mouths" index={mouth} orderIndex={2} />
          <Part path="accessories/hats" index={hats} orderIndex={3} />
          <Part path="accessories/glasses" index={glasses} orderIndex={3} />
          <Part path="accessories/earrings" index={earrings} orderIndex={3} />
          <Part path="accessories/neckwear" index={neckwear} orderIndex={3} />
          <Part path="clothes/layer_1" index={clothing1} orderIndex={3} />
          <Part path="clothes/layer_2" index={clothing2} orderIndex={4} />
          <Part path="clothes/layer_3" index={clothing3} orderIndex={5} />
        </div>
      </div>
    </>
  )
}