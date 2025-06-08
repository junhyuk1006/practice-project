import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>회원가입</h1>
      <button onClick={() => navigate('/')}>홈</button>
      <button onClick={() => navigate('/login')}>로그인</button>
    </div>
    );
  };
  
  export default SignupPage;