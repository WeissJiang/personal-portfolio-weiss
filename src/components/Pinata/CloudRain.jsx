import { useEffect } from 'react';
import './CloudRain.scss'



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
}

const removeRainDrops = () => {
    const dropNodes = document.querySelectorAll(".drop");
    const dropDivs = [...dropNodes];
    for (let i = 0; i < dropDivs.length; i++) {
        if(i == 100) break
        const endDrop = dropDivs[i];
        const parent = endDrop.parentNode;
        console.log(i)
        parent.removeChild(endDrop);
    }
}

export default function CloudRain() {
    useEffect(() => {
        const test = setInterval(() => {
            rain()
        }, 40)
        setTimeout(function(){
            clearInterval( test );
        }, 2000);
    })

    return (
        <div className="module-page">
            <div className="cloud-rain-container">
                <div className="cloud">
                    <p className='text'>Cloud Rain</p>
                </div>
            </div>
        </div>
    )
}