"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container/Container";
import Button from "@/components/ui/Button/Button";
import styles from "./Header.module.css";

const navVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const pathname = usePathname();

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // Fecha o menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(249, 229, 226, 0.6)", "rgba(249, 229, 226, 0.95)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["0 0 0 rgba(0,0,0,0)", "0 4px 30px rgba(0,0,0,0.05)"]
  );

  const headerBackdrop = useTransform(
    scrollY,
    [0, 50],
    ["blur(4px)", "blur(12px)"]
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header 
      className={styles.header}
      style={{ 
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
        backdropFilter: headerBackdrop
      }}
    >
      <Container className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            Bruna Muzitano
          </Link>
          <span className={styles.subtitle}>Psicóloga | CRP 00/00000</span>
        </div>

        <button 
          className={styles.mobileToggle} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        <motion.nav 
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { name: "Início", href: "/" },
            { name: "Sobre Mim", href: "#sobre" },
            { name: "Terapia TCC", href: "#tcc" },
            { name: "Contato", href: "#contato" }
          ].map((link) => (
            <motion.div key={link.name} variants={itemVariants}>
              <Link 
                href={link.href} 
                className={styles.link} 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          
          <motion.div variants={itemVariants} className={styles.ctaContainer}>
            <Button variant="primary" onClick={() => setIsMenuOpen(false)}>
              Agendar Consulta
            </Button>
          </motion.div>
        </motion.nav>

        <motion.div 
          style={{ 
            position: "absolute", 
            bottom: 0, 
            left: 0, 
            right: 0, 
            height: "2px", 
            background: "var(--color-medium)", 
            transformOrigin: "0%",
            scaleX: scrollYProgress
          }} 
        />
      </Container>
    </motion.header>
  );
}