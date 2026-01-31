"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion"; 
import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import Button from "@/components/ui/Button/Button";
import styles from "./Hero.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1]
    } 
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    x: 0,
    transition: { 
      duration: 1, 
      ease: [0.25, 0.8, 0.25, 1],
      delay: 0.2 
    }
  },
};

const badgeFloatVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const whatsappLink = "https://wa.me/5522997548462?text=Ol%C3%A1%2C%20Bruna!%20Tudo%20bem%3F%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20referente%20aos%20atendimentos%20%F0%9F%98%8A";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={heroRef} className={styles.hero}>
      <Container className={styles.container}>
        
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.div 
              className={styles.badge}
              variants={badgeFloatVariants}
              animate="animate"
            >
              Psicologia Clínica & TCC
            </motion.div>
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
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Agendar Consulta</Button>
            </a>
            <a href="#sobre">
              <Button variant="outline">Saiba mais</Button>
            </a>
          </motion.div>
        </motion.div>
        
        <div className={styles.visualColumn}>
          <motion.div 
            className={styles.imageCard}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            style={{ y, opacity }}
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