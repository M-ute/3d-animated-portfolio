
import { motion } from "motion/react";
import "./hero.css";
import Speech from "./speech";
import Shape from "./Shape";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";


const awardVariants = {
    initial: {
        x: -100,
        opacity: 0,
    }, 
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },

};

const followVariants = {
    initial: {
        y: -100,
        opacity: 0,
    }, 
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },

};

const Hero = () => {

    return (
        <div className='hero'>
            {/*LEFT SECTION*/}
            <div className="hSection left">
                {/*TTITLE*/}
                <motion.h1 
                initial = {{ y: -100, opacity: 0 }}
                animate = {{ y: 0, opacity: 1 }}
                transition = {{ duration: 1 }}
                className="hTitle">Hey There, <br/> 
                <span>I'm Amos!</span>
                </motion.h1>
                
                {/*AWARDS*/}
                <motion.div 
                variants={awardVariants} 
                initial ="initial"
                animate="animate"
                className="awards">
                    <motion.h2 variants={awardVariants}> Beginner Frontend Designer</motion.h2> 
                    <motion.p  variants={awardVariants}>A React.js and Next.js Enthusiast</motion.p>
                    <motion.div variants={awardVariants} className="awardList">
                        <motion.img variants={awardVariants} src="../public/award1.png" alt="" />
                        <motion.img variants={awardVariants} src="../public/award2.png" alt="" />
                        <motion.img variants={awardVariants} src="../public/award3.png" alt="" />
                    </motion.div>
                </motion.div>
            

                {/*SCROLL SVG*/}
                <motion.a 
                animate={{y:[0,5], opacity:[0,1,0]}}
                transition = {{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                
                }}
                href="#services" className="scroll">
                    <svg  xmlns="http://www.w3.org/2000/svg" 
                    width="50"  
                    height="50"  
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                >
                    <path d="M20 17h-.63c.61-2.21 1.41-6.63-.73-9.74-1.43-2.08-3.85-3.17-7.22-3.25L9.71 2.3a1.01 1.01 0 0 0-.81-.29c-.3.03-.57.19-.73.44l-6 9c-.26.4-.21.92.12 1.26l2 2c.34.34.87.39 1.26.12L8.3 13h.56l-3.33 4H4c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2m0 3H4v-1h2c.3 0 .58-.13.77-.36l5-6A1 1 0 0 0 11 11H8c-.2 0-.39.06-.55.17l-2.32 1.54-.84-.84 4.87-7.3 1.14 1.14c.19.19.44.29.71.29 2.88 0 4.9.8 5.99 2.39 2.3 3.34.1 9.2.08 9.25a.997.997 0 0 0 .93 1.35h2v1Z"></path>
                    <path d="M9.5 7.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m0 1h.5z"></path>
                    </svg>
                </motion.a>

            </div>
            {/*RIGHT SECTION*/}
            <div className="hSection right">
                {/*FOLLOW ICONS*/}
                <motion.div variants={followVariants} initial="initial" animate="animate" className="follow">
                    <motion.a variants={followVariants} href="/">
                        <img src="../public/facebook.png" alt="" />
                    </motion.a>

                    <motion.a variants={followVariants} href="/">
                        <img src="../public/instagram.png" alt="" />
                    </motion.a>

                    <motion.a variants={followVariants} href="/">
                        <img src="../public/youtube.png" alt="" />
                    </motion.a>
                    <motion.div variants={followVariants} className="followTextContainer">
                        <div className="followText">FOLLOW ME</div>
                    </motion.div>
                </motion.div>

            {/*BUBBLE SPEECH*/}
            <Speech/>

            {/*CERTIFICATE*/}
            <motion.div 
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1 }} 
                className="certificate">
                <img src="../public/certificate.png" alt="" />
                <br />
                 Web Development Certificate <br/>
                PROFESSIONAL <br/>
                UI designer
            </motion.div>

            {/* CONTACT BUTTON */}
            <motion.a href="/#contact" className="contactLink"
            animate={{ x: [200, 0], opacity: [0, 1]}}
            transition={{ duration: 2 }}
            >
                <motion.div className="contactButton"
                animate={{rotate: [ 0, 360 ]}}
                transition={{duration: 10, repeat: Infinity, ease: "linear"}}
                >
                    <svg viewBox="0 0 200 200" width= "150" height="150">
                        <circle cx="100" cy="100" r="90" fill="pink"/>
                        <path 
                                id="innerCirclePath" 
                                fill="none" 
                                d="M 100, 100 m -60, 0 a 60, 60 0 1, 1 120, 0 a 60, 60 0 1, 1 -120, 0 "/>
                        <text className="circleText">
                            <textPath href="#innerCirclePath">Hire Now .</textPath>
                        </text>
                        <text className="circleText">
                            <textPath href="#innerCirclePath" startOffset="47%">Contact Me .</textPath>
                        </text>
                    </svg>

                    <div className="arrow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="50"
                            height="50"
                            fill="none"
                            stroke="black"
                            strokeWidth="2">
                            
                            <line x1="6" y1="18" x2="18" y2="6" />
                            <polyline points="9 6 18 6 18 15" />
                        </svg>

                    </div>
                </motion.div>
            </motion.a>
            </div>
            <div className="bg">
                {/* 3d */}
                <Canvas>
                    <Suspense fallback="loading...">
                        <Shape/>
                    </Suspense>
                </Canvas>
                <div className="hImg">
                    <img src="../public/self3.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero