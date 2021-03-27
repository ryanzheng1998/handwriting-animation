import React from 'react'
import { Motion, PlainStyle, presets, spring } from 'react-motion'
import rawData from '../assets/name.json'

interface State {
    currentStroke: number,
    
}


const Mask: React.FC = () => {
    const [currentStroke, setCurrentStroke] = React.useState(0)

    const animatedMasks = ({offset}: PlainStyle) => (
        <>
            {rawData.mask.map((val, index) => (
                    <mask id={`mask${index}`} key={index}>
                        <path 
                            fill="none"
                            stroke="white"
                            strokeWidth={rawData.maskWidth[index]}
                            d={val}
                            pathLength="100"
                            strokeDasharray="100 100"
                            strokeDashoffset={offset}
                        />
                    </mask>
                )
            )}
        </>
    )

    return (
        <Motion
            defaultStyle={{offset: 100}}
            style={{offset: spring(0, presets.stiff)}}
        >{animatedMasks}</Motion>
    )
}

export default Mask