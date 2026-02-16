import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react"


const Speech = () => {
    return (
        <motion.div className="bubbleContainer"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        >
            <div className="bubble">
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a UI designer and web developer.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am a drode pilot.',
        1000,
        'I am a cyber security enthusiast.',
        1000,
        'And of course, I want to compete Tesla in future.',
        1000
      ]}
      wrapper="span"
      speed={50}
      deletionSpeed={60}
       repeat={Infinity}
    />
            </div>
            <img src="../public/photo.png " alt="" />
        </motion.div>
    )
}


export default Speech;