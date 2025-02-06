// Forms.js

import React, {useState} from "react";

// function Formtest() {

//     const [name, setName] = useState('');

//     const submitTest = (event) => {
//         event.preventDefault();
//         alert(`요청하는 값 + ${name}`);
//     };

//     return(
//         <form onSubmit={submitTest}>
//             <label>
//                 {/* JSX 문법 기준은 속성값의 기준이 이미 정해져있는거냐 아니냐 */}
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//             </label>
//             <input type="submit" /> 
//         </form>
//     );
// };



// 입력창이 여러개 일 때
// function Formtest() {

//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]:value}));
//     };

//     const submitTest = (event) => {
//         event.preventDefault();
//         console.log(inputs);
//         console.log(event.value);
//         console.log(`요청하는 값 + ${inputs}`);
//     };

//     return(
//         <form onSubmit={submitTest}>
//             <label> 
//                 이름을 입력하세요.
//                 <input 
//                     type="text" 
//                     name="username" 
//                     value={inputs.username || ''} 
//                     onChange={handleChange} 
//                 />
//             </label>

//             <label> 
//                 나이를 입력하세요.
//                 <input 
//                     type="number" 
//                     name="userage"
//                     value={inputs.userage || ''} 
//                     onChange={handleChange} 
//                 />
//             </label>
//             <input type="submit" /> 
//         </form>
//     );
// };



// 셀렉트 박스/ 체크 박스 예시
function SelectBoxTest() {

    const [sel, setSel] = useState('test2');

    const selChange = (e) => {
        setSel(e.target.value);
    };

    return(
        <>
            <form>
                <select value={sel} onChange={selChange}>
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                </select>
            </form>
        </>
    );
};



// 퀴즈
// 요구사항
// 1. 이름과 나이를 입력받는 폼을 만드세요.
// 2. 제출 버튼을 누르면 입력된 정보를 화면에 표시하세요.
// 3. 제출 후에는 입력창을 비우고, 나이가 0보다 작으면 제출되지 않게 하세요.

function UserForm() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`전송받은 데이터: ${submittedData}`);

        if(age > 0) {
            setSubmittedData({ name, age });
            setName('');
            setAge('');
        } else {
            alert('나이는 0이상 입력해주세요.');
        }
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label> 
                    이름을 입력하세요.
                    <input 
                        type="text" 
                        name="username" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </label>
    
                <label> 
                    나이를 입력하세요.
                    <input 
                        type="number" 
                        name="userage"
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                    />
                </label>
                <button type="submit">제출</button>
            </form>
    
            {/* submittedData 내용이 있으면 아래 내용을 띄울 것이다. */}
            {submittedData && (
                <div>
                    <h3>제출된 정보 : </h3>
                    <p>이름 : {submittedData.name}</p>
                    <p>나이 : {submittedData.age}</p>
                </div>
            )}
        </>
    );
};

export default SelectBoxTest;