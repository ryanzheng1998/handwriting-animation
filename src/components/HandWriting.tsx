import React from 'react'
import styled from 'styled-components';
import CharPath from './CharPath';
import Mask from './Mask'

const Container = styled.div`
  display: grid;
`

const ReplayButton = styled.button`
  background: #f7f7f7;
  margin-top: 50px;
  padding: 5px 60px;
  font-size: 18px;
  color: black;
  border: 1px solid  black;
  border-radius: 4px;
  cursor: pointer;
  justify-self: center;
  box-shadow: 1px 1px #838383;
  :focus {
    outline: none;
  }
`

const HandWriting: React.FC = () => {
    const [currentStroke, setCurrentStroke] = React.useState(0)
    const [reset, setReset] = React.useState(0)

    React.useEffect(() => {
      setCurrentStroke(-1)
      window.setTimeout(() =>  setCurrentStroke(0), 500)
    }, [reset, setReset, setCurrentStroke])

    return (
      <Container>

        <svg
          width="284.639"
          height="93.64"
          viewBox="0 0 284.639 93.64"
        >
          <Mask
            currentStroke={currentStroke}
            setCurrentStroke={setCurrentStroke}
          />
          <CharPath />
        </svg>
        <br />

        <ReplayButton 
            onClick={() => setReset(reset+1)}
        >Repaly</ReplayButton>
      </Container>
    )
}

export default HandWriting