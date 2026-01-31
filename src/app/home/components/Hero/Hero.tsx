"use client"; 

import Image from "next/image";
import { motion } from "framer-motion"; 
import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import Button from "@/components/ui/Button/Button";
import styles from "./Hero.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50 } 
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, x: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
  },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className={styles.badge}>Psicologia Clínica & TCC</div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Title level={1} className={styles.title}>
              Acolhimento para transformar sua jornada emocional
            </Title>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className={styles.description}>
              Atendimento especializado em Terapia Cognitivo-Comportamental. 
              Um espaço seguro para você compreender seus pensamentos e 
              ressignificar suas experiências.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className={styles.actions}>
            <Button variant="primary">Agendar Consulta</Button>
            <Button variant="outline">Saiba mais</Button>
          </motion.div>
        </motion.div>
        
        <div className={styles.visualColumn}>
          <motion.div 
            className={styles.imageCard}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            
            <Image 
              src="/hero.png" 
              alt="Psicóloga Bruna Muzitano"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
            
            <div className={styles.glassEffect} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}