import React, { useEffect, useState } from 'react'
import './Login.css'

const Login = () => {

  const User = {
    email: 'asd@celltrionph.com',
    pw: 'cell1234!@'
  }

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);


  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if(regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlepassword = (e) => {
    setPw(e.target.value);
    const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if(regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = () => {
    if(email === User.email && pw === User.pw) {
      alert('로그인 되었습니다');
      window.location = '/Home';
      } else {
        alert('등록되지 않은 계정입니다.')
      }
  };

  useEffect(() => {
    if(emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
      setNotAllow(true);
  }, [emailValid, pwValid]);

  return (
    <div className='Login'>
      <div className="wrapper">
        이메일과 비밀번호를<br />
        입력해주세요
      </div>

      <div className="content">
        <div className="email">이메일 주소</div>
          <div className="input">
            <input value={email} onChange={handleEmail}
            type="text" className="inputcontent" placeholder='asd@celltrionph.com' />
          </div>
          <div className="error">
            {
              !emailValid && email.length > 0 && (
                <div>올바른 이메일을 입력해주세요</div>
              )
            }
          </div>
        <div className="pw" style={{marginTop:"2rem"}}>패스워드</div>
        <div className="input">
            <input value={pw} onChange={handlepassword}
            type="password" className="inputcontent" placeholder='영문, 숫자, 특수문자 포함 8자 이상' />
          </div>
          <div className="error">
            {
              !pwValid && pw.length > 0 && (
                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요</div>
              )
            }
          </div>
          <div className="changecreate">
            <a className='change' href='/Loginchange'>PSI 암호를 잊으셨습니까?</a><br />
            <span>PSI ID가 없으십니까?</span><a className="create" href='/Loginchange'>지금 만드세요</a>
         </div>
      </div>
      <div className="bottom">
        <button onClick={onClickConfirmButton} disabled={notAllow} className='button'>로그인</button>
      </div>

    </div>
  )
}

export default Login