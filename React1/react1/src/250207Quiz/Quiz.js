import { useImagePreloader } from './CustomHook.js'

function ImageGallery() {

    // 배열에 이미지 저장
    const images = [
        "https://i.ibb.co/yBX6kjKp/4.png",
        "https://i.ibb.co/Ps2G5KWh/5.png",
        "https://i.ibb.co/wF4k2gPC/6.png",
        "https://i.ibb.co/Tx7h5xfV/7.png"
    ];

    // useImagePreloader를 호출하면 images 인자를 통해 loadingStatus와 progress를 만든다.
    const { loadingStatus, progress } = useImagePreloader(images);

    // 만약 loadingStatus의 값이 loading이면 아래 내용을 리턴한다.
    if (loadingStatus === 'loading') {
        return (
            <div>
                {/* Math.round : 입력값을 반올림한 수와 가장 가까운 정수 값을 반환한다. */}
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

    // loadingStatus의 값이 error면 아래 내용을 리턴한다.
    if (loadingStatus === 'error') {
        return <div>이미지 로딩 중 오류가 발생했습니다.</div>;
    }

    // 해당 내용을 리턴한다.
    // images배열을 반복하면서 이미지의 src를 가져온다.
    // key={index} : 각 요소의 고유 키
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

export default ImageGallery;
