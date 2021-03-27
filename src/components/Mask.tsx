import React from 'react'
import { Motion, PlainStyle, presets, spring } from 'react-motion'


const Mask: React.FC = () => {

    const animatedMask = ({offset}: PlainStyle) => (
        <mask id="mask0">
            <path
                fill="none"
                strokeWidth="6.79332638"
                stroke="white"
                d="M 6.1692973,10.823997 21.256,19.9 v 0"
                pathLength="100"
                strokeDasharray="100 100"
                strokeDashoffset={offset}              
            />
        </mask> 
    )

    return (
        <Motion
            defaultStyle={{offset: 100}}
            style={{offset: spring(0, presets.stiff)}}
        >{animatedMask}</Motion>
    )
}

export default Mask