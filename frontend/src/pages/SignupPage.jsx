import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [form,setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm(prev => ({...prev,[name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();  // "기본 새로고침 막기"
    if(form.password !== form.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    alert("회원가입 성공!");
  }

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type='email' name='email' placeholder='이메일' value={form.email} onChange={handleChange} required/>
        </div>
        <div>
          <input type='password' name='password' placeholder='비밀번호' value={form.password} onChange={handleChange} required/>
        </div>
        <div>
          <input type='password' name='confirmPassword' placeholder='비밀번호 확인' value={form.confirmPassword} onChange={handleChange} required/>
        </div>
        <button type="submit">회원가입</button>
      </form>
      <button onClick={() => navigate('/')}>홈</button>
      <button onClick={() => navigate('/login')}>로그인</button>
    </div>
    );
  };
  
  export default SignupPage;