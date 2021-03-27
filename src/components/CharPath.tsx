import React from 'react'
import rawData from '../assets/name.json'

const CharPath: React.FC = () => {
    const strokes = rawData.path.map((val, index) => (
      <path 
        key={index}
        mask={`url(#mask${index})`}
        d={val}
      />
    ))

    return (
        <g
            fillRule="evenodd"
            strokeWidth="0.25mm"
            strokeLinecap="round"
        >{strokes}</g>
    )

}

export default CharPath