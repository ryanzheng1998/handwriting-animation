import React from 'react'
import rawData from '../assets/name.json'

interface Props {
    index: number
}

const Clipping: React.FC<Props> = (p) => {

    if(p.index === 6){
        return (
            <>
                {rawData.clipping.stroke7.map((val, index) => (
                    <path
                        key={index}
                        fill="none"
                        strokeWidth={val.width}
                        stroke="white"
                        strokeLinecap="butt"
                        d={val.d}
                    />
                ))}
            </>
        )
    }

    if(p.index === 8){
        return (
            <>
                {rawData.clipping.stroke9.map((val, index) => (
                    <path
                        key={index}
                        fill="none"
                        strokeWidth={val.width}
                        stroke="white"
                        strokeLinecap="butt"
                        d={val.d}
                    />
                ))}
            </>
        )
    }

    return <></>
}

export default Clipping