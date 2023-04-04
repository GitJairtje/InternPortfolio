import { motion } from 'framer-motion';

import { styles } from '../styles';

import { ComputersCanvas } from './canvas';
const Hero = () => {
  return (
   <section className="relative w-full h-screen
   mx-auto">
    <div className={`${styles.paddingX} absolute 
    inset-0 top-[120px] max-w-7xl mx-auto flex flex-row
    items-start gap-5`}>
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="w-5 h-5 rounded-full bg[#915eff]"/>
      <div className="w-1 sm:h-80 h-40
      violet-gradient" />
      </div>
      <div>
        <h1 className={`${styles.sectionHeadText} text-white`}> Welcome, i'm <span className="text-[#FF0000]">Jaïr</span></h1>
        <p className={`${styles.heroSubText} mt-5 text-white-100`
         }>
          A front-end developer. That's passionate for designing 3D objects and web applications.
          <br className="sm:block hidden" />In this way ,I am able to enhance the overall user experience.
          <br className="sm:block hidden" /> Hoping to be a part of your wonderful company.
          </p>
      </div>
    </div>
      <ComputersCanvas/>
  </section>
  )
}

export default Hero