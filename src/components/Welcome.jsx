import {useRef} from "react";

import gsap from "gsap";
import {useGSAP} from "@gsap/react";


const FONT_WEIGHTS = {
    subtitle: {min: 100, max:400, default:100},
    title: {min: 400, max:900, default:400},
}

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span key={i} className={className} //split character by character
            style = {{fontVariationSettings: `'wght' ${baseWeight}`}}>
                {char === " " ? "\u00A0" : char} 
        </span>
    ))
}

const setupTextHover = (container, type) => {
    if(!container) return;

    const letters = container.querySelectorAll("span");
    const {min, max, default: base} = FONT_WEIGHTS[type];

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, { //animating each letter individually
            duration, 
            ease: 'power2.out', 
            fontVariationSettings: `'wght' ${weight}`
        });
    }; 

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w} = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w/2)); 
            const intensity = Math.exp(-(distance ** 2) / 15000); //play with the intensity value, 20k is the one from the video

            animateLetter(letter, min + (max - min) * intensity);
        });
    }

    const handleMouseLeave = () => letters.forEach((letter) => animateLetter(letter, base, 0.3));


    
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return() => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    }
    
}

    
const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    
    useGSAP(() => {
        const titleCleanup = setupTextHover(titleRef.current, "title");
        const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

        return () => {
            subtitleCleanup();
            titleCleanup();
        }
    }, [])
    
    return (<section id ="welcome">
        <p ref={subtitleRef}>
            {renderText("hi, I'm wesley. welcome to my",  // text
                'text-4xl font-georama', //className
                100)} 
        </p> 

        <h1 ref={titleRef} className="mt-7">
            {renderText("portfolio.",  // text
                'text-9xl italic font-georama', //className
                400)} 
        </h1>

        <div className = "small-screen">
            <p>this portfolio is currently designed for desktop/tablet screens only. trust me, it's worth it!</p>
        </div>
    </section>
    )
};

export default Welcome;