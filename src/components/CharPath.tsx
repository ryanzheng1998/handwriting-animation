import React from 'react'
import rawData from '../assets/name.json'
import Clipping from './Clipping'

const CharPath: React.FC = () => {
    const strokes = rawData.path.map((val, index) => (
      <>
        <path
          key={index}
          mask={`url(#mask${index})`}
          d={val}
          id={`stroke${index}`}
        />
        <Clipping index={index} />
      </>
    ))

    return (
        <g
            fillRule="evenodd"
            strokeWidth="0.25mm"
            strokeLinecap="round"
        >
          {strokes}
        </g>
    )

}

export default CharPath