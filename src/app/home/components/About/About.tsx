"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import styles from "./About.module.css";

const imageVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }
  }
};

const widgetVariants = (delay: number) => ({
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
});

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.visualColumn}>
          <motion.div
            className={styles.imageCard}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="/bruna.png"
              alt="Foto da Psicóloga Bruna Muzitano"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
          
          <motion.div 
            className={styles.floatingWidgetTop}
            variants={widgetVariants(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <span className={styles.widgetLabel}>Acolhimento</span>
          </motion.div>
          
          <motion.div 
            className={styles.floatingWidgetBottom}
            variants={widgetVariants(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <span className={styles.widgetLabel}>Autonomia</span>
          </motion.div>
        </div>

        <motion.div 
          className={styles.contentColumn}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.header}>
            <motion.span className={styles.tag} variants={textVariants}>
              Quem sou eu
            </motion.span>
            <motion.div variants={textVariants}>
              <Title level={2} className={styles.title}>
                Bruna Muzitano
              </Title>
            </motion.div>
          </div>
          
          <div className={styles.textBody}>
            <motion.p variants={textVariants}>
              Olá! Sou psicóloga clínica com atuação fundamentada na Terapia Cognitivo-Comportamental (TCC), 
              e acredito profundamente que o cuidado psicológico é um espaço de reconstrução interna, 
              consciência e liberdade emocional.
            </motion.p>
            <motion.p variants={textVariants}>
              Meu trabalho é guiado pelo lema: <strong>&quot;O amor é a única revolução verdadeira&quot;</strong>, 
              e eu busco revolucionar vidas através da escuta, empatia e acolhimento. 
              Acredito que a transformação acontece quando o paciente se sente verdadeiramente visto, 
              validado e seguro para olhar para si sem julgamentos.
            </motion.p>
            <motion.p variants={textVariants}>
              Meu foco terapêutico está no fortalecimento da autoconfiança e da autonomia, 
              auxiliando cada pessoa a limpar as lentes com as quais enxerga a si mesma e o mundo, 
              identificando e ressignificando crenças, padrões e pensamentos que limitam seu crescimento.
            </motion.p>
            <motion.p variants={textVariants}>
              A partir de uma escuta sensível e de intervenções estruturadas, busco promover clareza emocional, 
              autorresponsabilidade e escolhas mais alinhadas com a própria essência.
            </motion.p>
          </div>

          <motion.div className={styles.statsGrid} variants={textVariants}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>CRP</span>
              <span className={styles.statLabel}>05/80115</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>+1 ano</span>
              <span className={styles.statLabel}>De Atuação</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}