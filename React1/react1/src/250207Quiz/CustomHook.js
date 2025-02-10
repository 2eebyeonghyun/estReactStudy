import { useState, useEffect } from "react";

const useImagePreloader = (imageUrls) => {
    // state를 선언 / 초기값을 idle과 0으로 설정
    const [loadingStatus, setLoadingStatus] = useState('idle');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // 값이 없으면 리턴
        if (!imageUrls.length) return;

        // 기본값 설정
        let loadedCount = 0;
        let aborted = false;

        // 상태를 loading으로 설정
        setLoadingStatus('loading');

        // url을 받아와 프로미스를 통해 load와 error를 반환하는 객체를 만든다.
        const loadImage = (url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                
                img.onload = () => resolve(url);
                img.onerror = () => reject(url);
                img.src = url;
            });
        };

        // imageUrls 배열을 map을 통해 처리한다.
        // 변수가 true이면 이미지 개수를 추가하고 진행률을 업데이트시킨다.
        // 그게 아니면 에러가 난다.
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

        // 이미지가 모두 로드되면 Promise.all을 실행한다.
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

export default useImagePreloader;