import { useEffect } from 'react';
import './Home.scss';

export default function Home(){
    const rainText = () => {
        const text = "weissjiang";
        return text[Math.floor(Math.random() * text.length)];
    }
    
    const rain = () => {
        let cloud = document.querySelector('.cloud');
        let rainDrop = document.createElement('div');
        rainDrop.classList.add('drop');
        cloud.appendChild(rainDrop);

        rainDrop.innerText = rainText();
        rainDrop.style.left = Math.floor(Math.random() * 200) + 'px';
        rainDrop.style.fontSize = 0.5 + Math.random() * 1.5 + 'em';

        setTimeout(function(){
            cloud.removeChild(rainDrop)
        }, 2000)
    }

    useEffect(() => {
        setInterval(() => {
            rain()
        }, 20)
    })
    return (
        <div className="home-page">
            <div className="cloud-rain-container">
                <div className="cloud">
                    <p className='text'>Cloud Rain</p>
                    {/* <div 
                        className='drop'
                        style={{
                            left: Math.floor(Math.random() * 300) + 'px'
                        }}
                    >
                        A
                    </div> */}
                    {/* https://www.youtube.com/watch?v=Bl37L37Up5w */}
                </div>
            </div>
        </div>
    )
}