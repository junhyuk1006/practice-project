import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();
  
    return (
      <div>
        <h1>메인 페이지</h1>
        <button onClick={() => navigate('/login')}>로그인</button>
        <button onClick={() => navigate('/signup')}>회원가입</button>
      </div>
    );
  };
  
  export default MainPage;