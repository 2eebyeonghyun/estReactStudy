import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './AuthContext';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import AdminPage from "./AdminPage";
import './app.css';

// 요구사항:
// 1. 로그인 페이지와 관리자 페이지를 만드세요
// 2. 관리자 페이지는 로그인한 사용자만 접근할 수 있습니다
// 3. 로그인하지 않은 상태로 관리자 페이지 접근 시 로그인 페이지로 리다이렉트됩니다
// 4. 로그인 상태는 localStorage를 사용하여 유지하세요

// 프로젝트
//  -> 상황에 맞춘다. 상황파악에 집중
//  -> 요구사항에 대한 분석이 최우선
//  -> 조장( 팀장)일 때 혼자 다 하려 하지말 것. 적절하게 지시 잘해야한다.
//  -> 일정은 본인입장에서는 여유롭게 짜둘것. 조원입장에서는 약간 타이트하게 짜는게 베스트
//      이유 : 변수 상황 대비

// 로그인
// 사용자 입력화면 -> 사용자가 정보를 입력 -> 확인 후 인증 처리

// 이 과제는 조원들과 진행해주세요.
function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route 
                        path="/admin" 
                        element={
                            <ProtectedRoute>
                                <AdminPage />
                            </ProtectedRoute>
                        } 
                    />
                    {/* 다른 라우트들 */}
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;