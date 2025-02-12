// Quiz
// 아래의 화면을 확인하여 이코드를 완성
// 요구사항
// 1. 폼상태관리
// 2. 입력값 변경 처리
// 3. 폼 제출 처리

// 폼 처리와 유효성 검사
//  -> 폼에서 처리해주는 내용? : 사용자가 입력한 값
//  -> 사용자들은 언제나 올바른 데이터만 입력하는가?
//     (사용자들은 실수를 할 수 있기 때문에 언제나 사용자가 입력한 값들을 체크)
//  -> 사용자가 입력한 값들을 체크하고 확인하는것이 유효성 검사
//     (정규표현식을 통해 사용자가 입력한 수식이 올바른지 아닌지 체크 가능)
//  -> html 기본속성과 js를 통해서(조건식) 유효성검사도 가능.

import { useState } from "react";
import './BasicForm.css';

function BasicForm() {

    // 에러 상태 관리
    const [errors, setErrors] = useState({
        name: '', 
        email: '',
        password: ''
    });

    // 폼 상태 관리
    const [formData, setFormData] = useState({
        name: '', 
        email: '',
        password: ''
    });

    // 입력값 변경 처리
    // prevState : 이전상태에 대한 정보
    //  -> 리액트의 객체는 불변법칙
    const handleChange = (e) => {
        const { name, value } = e.target; // name과 value는 input의 name/ value값
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));

        // 실시간으로 유효성 검사를 실행하기 위한 메서드를 추가
        validateField(name, value);
    };

    // name : state, value: action의 역할을 한다.
    const validateField = (name, value) => {
        let error = '';
        switch(name) {

            case 'name':
                if(value.length < 4) {
                    error = '이름은 4글자 이상이어야 합니다.';
                }
                break;
            case 'email':
                if(!value.includes('@')) {
                    error = '유효한 이메일 주소를 입력해주세요.';
                }
                break;
            case 'password':
                if(value.length < 6) {
                    error = '패스워드는 6글자 이상이어야 합니다.';
                }
                break;
            default:
                break;
        }

        // 에러 상태 업데이트
        // 이전상태를 유지하면서 해당 필드( 에러)의 에러 메세지를
        // 업데이트하는 방법
        setErrors(prevState => ({
            ...prevState,
            [name]: error
        }));
    }

    // 폼 제출 처리
    const handleSubmit = (e) => {
        e.preventDefault();

        // 모든 필드의 유효성검사
        // every, some
        // every : 배열의 모든 요소가 조건을 충족하는가? ( AND)
        // some : 배열의 요소중에 1개라도 조건을 충족하는가? ( OR)

        // hasErrors는 에러가 한개라도 나왔다면
        const hasErrors = Object.values(errors).some(error => error !== '');
        const hasEmptyFields = Object.values(formData).some(value => value === '');

        // 실패했을 경우 : 에러가 있는가 혹은 빈 곳이 있는가
        if(hasErrors || hasEmptyFields) {
            alert('모든 내용들을 다시 확인해주세요.');
            return;
        }

        // 성공했을 경우
        // 이 데이터는 어딘가로 전송( server)
        console.log('제출된 데이터 : ', formData);
        alert('회원가입 완료');

        // 폼 초기화
        setFormData({
            name: '',
            email: '',
            password: ''
        });
    }

    // 컴포넌트의 ui를 구성할 때 햇갈린다 싶으면
    // html, css는 리액트 프로젝트가 아닌 다른 경로에서 직접 만들고
    // 컴포넌트에 붙여넣는 식으로 작업하는 경우도 있다.
    return (
        <form onSubmit={handleSubmit} className="basic-form">
            <div className="form-group">
                <label htmlFor="name">이름:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
        
            <div className="form-group">
                <label htmlFor="email">이메일:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
        
            <div className="form-group">
                <label htmlFor="password">비밀번호:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'error' : ''}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
        
            <button type="submit">가입하기</button>
        </form>
    );
}

export default BasicForm;