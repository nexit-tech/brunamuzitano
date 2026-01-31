"use client";

import { 
  Sparkles, 
  HeartHandshake, 
  Shield, 
  Brain, 
  CloudSun, 
  Fingerprint 
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import styles from "./Services.module.css";

const services = [
  {
    icon: Sparkles,
    title: "Autoconfiança e autoestima",
    description: "Fortalecimento da autoimagem e reconhecimento do próprio valor pessoal."
  },
  {
    icon: HeartHandshake,
    title: "Dependência emocional",
    description: "Desenvolvimento da autonomia afetiva para construção de vínculos mais saudáveis."
  },
  {
    icon: Shield,
    title: "Limites e Posicionamento",
    description: "Aprenda a se posicionar com assertividade e a estabelecer limites necessários."
  },
  {
    icon: Brain,
    title: "Ansiedade e Emoções",
    description: "Estratégias práticas para regulação emocional e alívio dos sintomas da ansiedade."
  },
  {
    icon: CloudSun,
    title: "Luto e Términos",
    description: "Um espaço de acolhimento para processar perdas, dores e o fim de ciclos importantes."
  },
  {
    icon: Fingerprint,
    title: "Identidade",
    description: "Jornada de autoconhecimento para reconstrução da própria história e essência."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  }
};

export default function Services() {
  return (
    <section id="tcc" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Title level={2} align="center">Como posso te ajudar?</Title>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Acolhimento especializado para suas demandas emocionais.
          </motion.p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { type: "spring", stiffness: 300 } 
              }}
            >
              <div className={styles.iconBox}>
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}