import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
    return (
      <div>
        <h1>로그인</h1>
        <button onClick={() => navigate('/')}>홈</button>
        <button onClick={() => navigate('/signup')}>회원가입</button>
      </div>
      );
  };
  
  export default LoginPage;