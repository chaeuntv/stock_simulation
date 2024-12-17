// src/components/Login.js
import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../firebase'; // firebase.js에서 가져오기

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // signInWithEmailAndPassword 함수 호출 (auth, email, password 전달)
      await signInWithEmailAndPassword(auth, email, password);
      console.log('로그인 성공');
    } catch (error) {
      console.error('로그인 실패:', error.message);
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default Login;
