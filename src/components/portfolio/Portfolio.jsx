import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import "./portfolio.scss"
import { useRef } from "react"

const items = [
    {
        id:1,
        title:"React Commerce",
        img:"https://img.freepik.com/free-photo/extreme-close-up-shot-hacking-code-running-computer-system-monitors_482257-99624.jpg?ga=GA1.1.1011817267.1726661729&semt=ais_hybrid",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique eaque qui sint nostrum doloribus sit vitae numquam, provident ad amet autem odit obcaecati nesciunt veritatis. Deleniti eaque voluptates vel maxime!"
    },
    {
        id:2,
        title:"Next.js Commerce",
        img:"https://img.freepik.com/free-photo/extreme-close-up-shot-hacking-code-running-computer-system-monitors_482257-99624.jpg?ga=GA1.1.1011817267.1726661729&semt=ais_hybrid",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique eaque qui sint nostrum doloribus sit vitae numquam, provident ad amet autem odit obcaecati nesciunt veritatis. Deleniti eaque voluptates vel maxime!"
    },
    {
        id:3,
        title:"Vanilla JS App",
        img:"https://img.freepik.com/free-photo/extreme-close-up-shot-hacking-code-running-computer-system-monitors_482257-99624.jpg?ga=GA1.1.1011817267.1726661729&semt=ais_hybrid",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique eaque qui sint nostrum doloribus sit vitae numquam, provident ad amet autem odit obcaecati nesciunt veritatis. Deleniti eaque voluptates vel maxime!"
    },
    {
        id:4,
        title:"Music App",
        img:"https://img.freepik.com/free-photo/extreme-close-up-shot-hacking-code-running-computer-system-monitors_482257-99624.jpg?ga=GA1.1.1011817267.1726661729&semt=ais_hybrid",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique eaque qui sint nostrum doloribus sit vitae numquam, provident ad amet autem odit obcaecati nesciunt veritatis. Deleniti eaque voluptates vel maxime!"
    }
]

const Single = ({item}) =>{
    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref})
    const y = useTransform(scrollYProgress, [0,1], [-300, 300])
    return(
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}><img src={item.img} alt="" /></div>
                
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]})
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
    return ( 
    <div className="portfolio">
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}}className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div> );
}
 
export default Portfolio;