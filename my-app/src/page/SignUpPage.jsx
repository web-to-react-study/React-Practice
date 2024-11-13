import styled from 'styled-components';
import { useState } from 'react';

function SignUpPage() {
  /**
   * TODO
   * 컴포넌트 내부에 아래 로직을 작성해 주세요.
   * - ID, PASSWORD 둘 다 제어 컴포넌트 사용
   * - ID, PASSWORD 모두 조건 만족 못하는 경우 버튼 disabled 처리
   * - ID는 유저가 소문자로 입력해도, UI에는 대문자로 나오도록 구현
   * - onSubmit 이벤트 발생 시, console에 현재 사용자 input(ID, PASSWORD 모두) 을 출력
   */
  const [id, setid] = useState('');
  const [password, setpassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('id:', id, '\npassword:', password);
  };

  return (  
    <Container onSubmit={onSubmit}>
      <h1>회원가입</h1>
      <Input name="id" placeholder="ID 입력 / 대문자만 가능" value={id.toUpperCase()} onChange={(e) => setid(e.target.value)}/>
      <Input name="password" placeholder="password 입력 / 8자 이상" value={password} onChange={(e) => setpassword(e.target.value)}/>
      <Button disabled={password.length < 8 || id.length < 1}>가입</Button>
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
