import React, { useState } from 'react'
import Assuarnce from '@/src/components/assurance'
import FormContainer from '@/src/components/formContainer'
import Container from '@/src/components/container'
import Form from '@/src/components/form'

const Home = () => {

  const [current, setCurrent] = useState(1)
  const [skill, setSkill] = useState(10)
  const handleClick = () => {
    setCurrent(prev => prev + 1)
    setSkill(prev => prev + 22.5)
    window.scrollTo(0, 0);
  }

  return (
    <Container>
      <FormContainer>
        <Assuarnce current={current} />
        <Form
          handleClick={handleClick}
          current={current}
          setCurrent={setCurrent}
          skill={skill}
        />
      </FormContainer>
    </Container>
  )
}

export default Home
