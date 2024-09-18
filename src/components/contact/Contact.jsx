import { animate, motion } from "framer-motion";
import "./contact.scss"

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate:{
        y:0,
        opacity: 1,
        transition:{
            duration: .5,
            staggerChildren: .1,
        }
    }
}

const Contact = () => {
    return ( 
    <motion.div className="contact" variants={variants} initial="initial" whileInView={"animate"}>
        <motion.div className="textContainer"  variants={variants} >
            <motion.h1  variants={variants} >Let's work together</motion.h1>
            <motion.div className="item"  variants={variants} >
                <h2>Mail</h2>
                <span>artemvinogradov123c@gmail.com</span>
            </motion.div>
            <motion.div className="item"  variants={variants} >
                <h2>Adress</h2>
                <span>Moscow</span>
            </motion.div>
            <motion.div className="item" variants={variants} >
                <h2>Phone</h2>
                <span>+7 968-546 23 59</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <form >
                <input type="text" required placeholder="Name"/>
                <input type="text" required placeholder="Email"/>
                <textarea name="" id="" rows={8} placeholder="Message"></textarea>
                <button>Submit</button>
            </form>
        </div>
    </motion.div> );
}
 
export default Contact;