import Image from "next/image";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        
        <div className={styles.brandColumn}>
          <div className={styles.logoWrapper}>
            <div className={styles.iconContainer}>
              <Image 
                src="/icone.PNG" 
                alt="Logo Bruna Muzitano" 
                width={48} 
                height={48} 
                className={styles.iconImage}
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>Bruna Muzitano</span>
              <span className={styles.logoSubtitle}>Psicologia Clínica & TCC</span>
            </div>
          </div>
          <p className={styles.missionText}>
            Reconstruindo caminhos através da empatia e da ciência.
          </p>
        </div>

        <div className={styles.infoColumn}>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com/junoamarte" target="_blank" className={styles.socialIcon}>
              <Instagram size={20} />
            </a>
            <a href="mailto:muzitanopsi@outlook.com" className={styles.socialIcon}>
              <Mail size={20} />
            </a>
            <a href="https://wa.me/5522997548462" target="_blank" className={styles.socialIcon}>
              <MessageCircle size={20} />
            </a>
          </div>
          
          <div className={styles.copyrightWrapper}>
             <span className={styles.crpBadge}>CRP 05/80115</span>
             <p className={styles.copyright}>&copy; {currentYear} Todos os direitos reservados.</p>
          </div>
        </div>

      </Container>
    </footer>
  );
}