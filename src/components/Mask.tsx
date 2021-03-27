import React from 'react'
import { Motion, PlainStyle, spring } from 'react-motion'
import rawData from '../assets/name.json'


const Mask: React.FC = () => {
    const [currentStroke, setCurrentStroke] = React.useState(0)

    const animatedMasks = rawData.mask.map((val, index) => (
        <Motion
            key={index}
            defaultStyle={{offset: 100}}
            style={{offset: currentStroke >= index ? spring(0) : spring(100)}}
            onRest={() => currentStroke === index ? setCurrentStroke(index + 1) : undefined}
        >
            {
                ({offset}: PlainStyle) => (
                    <mask id={`mask${index}`}>
                        <path
                            fill="none"
                            strokeWidth={rawData.maskWidth[index]}
                            stroke="white"
                            d={val}
                            pathLength="100"
                            strokeDasharray="100 100"
                            strokeDashoffset={offset}
                        />
                    </mask>
                )
            }
        </Motion>
    ))

    return (
        <>
            {animatedMasks}
        </>
    )
}

export default Mask