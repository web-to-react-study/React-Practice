import styled from 'styled-components';
import { useState } from 'react'; 
import React from 'react'; 

function SignUpPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ID:', id);
    console.log('Password:', password);
  };

  const handleIdChange = (e) => {
    const updatedId = e.target.value.toUpperCase();
    setId(updatedId);
    console.log('ID 입력 중:', updatedId);
  };

  const handlePasswordChange = (e) => {
    const updatedPassword = e.target.value;
    setPassword(updatedPassword);
    console.log('Password 입력 중:', updatedPassword);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h1>회원가입</h1>
      <Input 
        name="id" 
        placeholder="ID 입력 / 대문자만 가능" 
        value={id} 
        onChange={handleIdChange}
      />
      <Input 
        name="password" 
        placeholder="password 입력 / 8자 이상" 
        value={password} 
        onChange={handlePasswordChange}
      />
      <Button type="submit" disabled={!(id.length > 0 && password.length >= 8)}>가입</Button>
    </Container>
  );
}

export default SignUpPage;

const Container = styled.form`
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  max-width: 360px;
`;

const Input = styled.input`
  width: 100%;
  height: 44px;

  border: 1px solid gray;
  border-radius: 8px;
  padding: 8px;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  margin-top: 16px;

  background-color: #03c75a;
  border: none;
  border-radius: 8px;

  color: white;

  cursor: pointer;

  &:hover {
    background-color: #00ac4e;
  }

  &:disabled {
    background-color: #b1b1b1;
    cursor: not-allowed;
  }
`;