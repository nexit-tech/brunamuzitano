"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import Button from "@/components/ui/Button/Button";
import styles from "./Contact.module.css";

const wrapperVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.8, 0.25, 1] 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const whatsappLink = "https://wa.me/5522997548462?text=Ol%C3%A1%2C%20Bruna!%20Tudo%20bem%3F%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20referente%20aos%20atendimentos%20%F0%9F%98%8A";

export default function Contact() {
  return (
    <section id="contato" className={styles.section}>
      <Container>
        <motion.div 
          className={styles.wrapper}
          variants={wrapperVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.content}>
            <motion.div 
              className={styles.headerGroup}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className={styles.label}>Contato</span>
              <Title level={2} className={styles.title}>
                Vamos iniciar essa jornada?
              </Title>
            </motion.div>
            
            <motion.p 
              className={styles.text}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              O primeiro passo é o mais importante. Entre em contato para tirar dúvidas, 
              conhecer a abordagem e verificar a disponibilidade para sua sessão.
            </motion.p>
            
            <motion.div 
              className={styles.actions}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.linkButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className={styles.whatsappBtn}>
                  <FaWhatsapp size={22} style={{ marginRight: 8 }} />
                  Chamar no WhatsApp
                </Button>
              </motion.a>
            </motion.div>
          </div>

          <motion.div 
            className={styles.infoColumn}
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div 
              className={styles.glassCard}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div className={styles.infoItem} variants={itemVariants}>
                <div className={styles.iconBox}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Atendimento Online</h4>
                  <p className={styles.infoText}>Para todo o Brasil e Mundo</p>
                </div>
              </motion.div>
              
              <div className={styles.divider} />

              <motion.a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.infoItem} ${styles.interactiveItem}`}
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className={styles.iconBox}>
                  <FaWhatsapp size={22} />
                </div>
                <div className={styles.infoContent}>
                  <h4 className={styles.infoTitle}>WhatsApp</h4>
                  <p className={styles.infoText}>(22) 99754-8462</p>
                </div>
                <ArrowUpRight size={16} className={styles.arrowIcon} />
              </motion.a>

              <div className={styles.divider} />

              <motion.a 
                href="mailto:muzitanopsi@outlook.com"
                className={`${styles.infoItem} ${styles.interactiveItem}`}
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className={styles.iconBox}>
                  <Mail size={20} />
                </div>
                <div className={styles.infoContent}>
                  <h4 className={styles.infoTitle}>Email</h4>
                  <p className={styles.infoText}>muzitanopsi@outlook.com</p>
                </div>
                <ArrowUpRight size={16} className={styles.arrowIcon} />
              </motion.a>

              <div className={styles.divider} />

              <motion.a 
                href="https://instagram.com/junoamarte" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.infoItem} ${styles.interactiveItem}`}
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className={styles.iconBox}>
                  <Instagram size={20} />
                </div>
                <div className={styles.infoContent}>
                  <h4 className={styles.infoTitle}>Instagram</h4>
                  <p className={styles.infoText}>@junoamarte</p>
                </div>
                <ArrowUpRight size={16} className={styles.arrowIcon} />
              </motion.a>

            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}