"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/ui/Container/Container";
import styles from "./Footer.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const hoverScale = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.3, type: "spring", stiffness: 300 } },
  tap: { scale: 0.95 }
};

const whatsappLink = "https://wa.me/5522997548462?text=Ol%C3%A1%2C%20Bruna!%20Tudo%20bem%3F%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20referente%20aos%20atendimentos%20%F0%9F%98%8A";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <motion.div 
          className={styles.wrapper}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className={styles.leftColumn}>
            <motion.div 
              className={styles.identity} 
              variants={itemVariants}
              initial="rest"
              whileHover="hover" 
            >
              <motion.div className={styles.iconBox} variants={hoverScale}>
                <Image 
                  src="/icone.PNG" 
                  alt="Ícone Bruna Muzitano" 
                  width={40} 
                  height={40} 
                  className={styles.icon}
                />
              </motion.div>
              <div>
                <h2 className={styles.name}>Bruna Muzitano</h2>
                <p className={styles.title}>Psicologia Clínica & TCC</p>
              </div>
            </motion.div>

            <motion.p className={styles.phrase} variants={itemVariants}>
              &quot;O amor é a única revolução verdadeira&quot;
            </motion.p>
          </div>

          <div className={styles.rightColumn}>
            <motion.div className={styles.socials} variants={itemVariants}>
              <motion.a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
                aria-label="WhatsApp"
                variants={hoverScale}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <FaWhatsapp size={20} />
              </motion.a>
              <motion.a 
                href="https://instagram.com/junoamarte" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
                aria-label="Instagram"
                variants={hoverScale}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Instagram size={20} />
              </motion.a>
            </motion.div>

            <motion.div className={styles.infoRow} variants={itemVariants}>
              <span className={styles.crpBadge}>CRP 05/80115</span>
              
              <motion.a 
                href="https://nexit.tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.nexitBadge}
                whileHover={{ scale: 1.05, backgroundColor: "var(--color-dark)", color: "var(--color-white)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={styles.poweredBy}>Powered by</span>
                <span className={styles.nexitName}>Nexit</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}