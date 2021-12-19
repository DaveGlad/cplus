import React from 'react'
import Assuarnce from '@/src/components/assurance'
import FormContainer from '@/src/components/formContainer'
import Container from '@/src/components/container'
import Form from '@/src/components/form'

const Home = () => {
  return (
    <Container>
      <FormContainer>
        <Assuarnce />
        <Form />
      </FormContainer>
    </Container>
  )
}

export default Home
