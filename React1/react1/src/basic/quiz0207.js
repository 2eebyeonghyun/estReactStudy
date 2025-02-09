// 다음 코드의 성능을 최적화하세요.
// 불필요한 재계산과 리렌더링을 방지해야 합니다.

// 성능 개선 포인트
// 계산 비용이 큰 필터링 작업 최적화
// 콜백 함수 안정성 확보
// 컴포넌트 리랜더링 최소화

import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";

function ProductList({ products, onProductSelect }) {
    const [filter, setFilter] = useState("");
  
    // useMemo를 사용하여 필터링 연산 최적화
    const filteredProducts = useMemo(() => {
        return products.filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()));
    }, [products]);
  
    const handleSelect = useCallback((productId) => {
        onProductSelect(productId);
    }, [onProductSelect]);

    return (
        <div>
            <input
                value={filter}
                onChange={e => setFilter(e.target.value)}
                placeholder="검색..."
            />

            {filteredProducts.map(product => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onSelect={handleSelect}
                />
            ))}
        </div>
    );
}
  
const ProductItem = ({ product, onSelect }) => {

    return (
        <div onClick={() => onSelect(product.id)}>
            {product.name} - ${product.price}
        </div>
    );
};


//퀴즈2
// 요구사항:
// 1. 이름을 입력받는 입력창을 만드세요
// 2. 입력창 아래에 실시간으로 "안녕하세요, OOO님!" 이라고 표시됩니다
// 3. 입력값이 없을 때는 "이름을 입력해주세요" 라고 표시됩니다
// 4. 이름은 10글자를 넘을 수 없습니다

function NameForm() {
    
    const [msg, setMsg] = useState('');

    const inputText = (e) => {
        let value = e.target.value.slice(0, 10);
        setMsg(value);
    };

    return(
        <>
            <input type="text" value={msg} onChange={inputText} />
            <p>{msg ? `안녕하세요, ${msg}님!` : '이름을 입력해주세요.'}</p>
        </>
    )
}


// 퀴즈3
// 요구사항:
// 1. 버튼을 클릭할 때마다 배경색이 변경됩니다
// 2. 색상은 빨강 -> 파랑 -> 초록 순서로 변경됩니다
// 3. 현재 색상이 무슨 색상인지 버튼 텍스트로 표시됩니다
// 4. 배경색이 변경될 때 부드러운 전환 효과를 넣어주세요

function ColorToggle() {
    
    const boxRef = useRef();
    const [boxColor, setBoxColor] = useState('red');

    const changeColor = () => {
        if(boxColor === 'red') {
            setBoxColor('blue');
        } else if (boxColor === 'blue') {
            setBoxColor('green');
        } else {
            setBoxColor('red');
        }
    };

    const boxStyle = {
        width: '250px',
        height: '250px',
        backgroundColor: boxColor,
        transition: 'backgroundColor 0.3s ease-in-out'
    }

    return(
        <>
            <div ref={boxRef} style={boxStyle}></div>
            <button onClick={changeColor}>박스 색상 변경</button>
            <p>현재 색상 : {boxColor}</p>
        </>
    )
}


// 요구사항:
// 1. 이미지 URL 배열을 받아서 모든 이미지를 미리 로드하는 커스텀 훅을 만드세요
// 2. 로딩 상태를 반환해야 합니다 (로딩 중/완료/에러)
// 3. 프로그레스 상태도 반환해야 합니다 (0-100%)
// 4. 컴포넌트 언마운트 시 진행 중인 로드를 정리해야 합니다
// 이코드를 분석해오시고
// 여러분들 판단에 커스텀훅은 다른 파일로 분리하여 import 처리해주세요.

function useImagePreloader(imageUrls) {
    const [loadingStatus, setLoadingStatus] = useState('idle');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!imageUrls.length) return;

        let loadedCount = 0;
        let aborted = false;

        setLoadingStatus('loading');

        const loadImage = (url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                
                img.onload = () => resolve(url);
                img.onerror = () => reject(url);
                img.src = url;
            });
        };

        const promises = imageUrls.map(url => {
            return loadImage(url)
                .then(() => {
                    if (!aborted) {
                        loadedCount++;
                        setProgress((loadedCount / imageUrls.length) * 100);
                    }
                })
                .catch(error => {
                    if (!aborted) {
                        setLoadingStatus('error');
                        console.error(`Failed to load image: ${error}`);
                    }
                });
        });

        Promise.all(promises)
            .then(() => {
                if (!aborted) {
                    setLoadingStatus('completed');
                }
            })
            .catch(() => {
                if (!aborted) {
                    setLoadingStatus('error');
                }
            });

        return () => {
            aborted = true;
        };
    }, [imageUrls]);

    return { loadingStatus, progress };
}

function ImageGallery() {
    const images = [
        "https://i.ibb.co/yBX6kjKp/4.png",
        "https://i.ibb.co/Ps2G5KWh/5.png",
        "https://i.ibb.co/wF4k2gPC/6.png",
        "https://i.ibb.co/Tx7h5xfV/7.png"
    ];

    const { loadingStatus, progress } = useImagePreloader(images);

    if (loadingStatus === 'loading') {
        return (
            <div>
                <p>이미지 로딩 중... {Math.round(progress)}%</p>
                <div style={{
                    width: '200px',
                    height: '20px',
                    border: '1px solid #ccc'
                }}>
                    <div style={{
                        width: `${progress}%`,
                        height: '100%',
                        backgroundColor: 'blue',
                        transition: 'width 0.3s'
                    }} />
                </div>
            </div>
        );
    }

    if (loadingStatus === 'error') {
        return <div>이미지 로딩 중 오류가 발생했습니다.</div>;
    }

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {images.map((src, index) => (
                <img 
                    key={index}
                    src={src}
                    alt={`Gallery item ${index + 1}`}
                    style={{ width: '100%', height: 'auto' }}
                />
            ))}
        </div>
    );
}

export default ProductList;