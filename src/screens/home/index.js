import React, { useState } from 'react'
import Assuarnce from '@/src/components/assurance'
import FormContainer from '@/src/components/formContainer'
import Container from '@/src/components/container'
import Form from '@/src/components/form'

const Home = () => {

  const [current, setCurrent] = useState(1)
  const handleClick = () => {
    setCurrent(current + 1)
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
        />
      </FormContainer>
    </Container>
  )
}

export default Home
