"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container/Container";
import Button from "@/components/ui/Button/Button";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            Bruna Muzitano
          </Link>
          <span className={styles.subtitle}>Psicóloga | CRP 00/00000</span>
        </div>

        <button className={styles.mobileToggle} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <Link href="/" className={styles.link} onClick={toggleMenu}>
            Início
          </Link>
          <Link href="#sobre" className={styles.link} onClick={toggleMenu}>
            Sobre Mim
          </Link>
          <Link href="#tcc" className={styles.link} onClick={toggleMenu}>
            Terapia TCC
          </Link>
          <Link href="#contato" className={styles.link} onClick={toggleMenu}>
            Contato
          </Link>
          <div className={styles.ctaContainer}>
            <Button variant="primary" onClick={toggleMenu}>
              Agendar Consulta
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}