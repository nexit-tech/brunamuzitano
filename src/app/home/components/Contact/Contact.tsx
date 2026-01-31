import { Mail, MessageCircle, MapPin, Instagram, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import Button from "@/components/ui/Button/Button";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contato" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.headerGroup}>
              <span className={styles.label}>Contato</span>
              <Title level={2} className={styles.title}>
                Vamos iniciar essa jornada?
              </Title>
            </div>
            
            <p className={styles.text}>
              O primeiro passo é o mais importante. Entre em contato para tirar dúvidas, 
              conhecer a abordagem e verificar a disponibilidade para sua sessão.
            </p>
            
            <div className={styles.actions}>
              <a 
                href="https://wa.me/5522997548462" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <Button className={styles.whatsappBtn}>
                  <MessageCircle size={20} style={{ marginRight: 8 }} />
                  Chamar no WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <div className={styles.infoColumn}>
            <div className={styles.glassCard}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className={styles.infoTitle}>Atendimento Online</h4>
                  <p className={styles.infoText}>Para todo o Brasil e Mundo</p>
                </div>
              </div>
              
              <div className={styles.divider} />

              <a 
                href="https://wa.me/5522997548462"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.infoItem} ${styles.interactiveItem}`}
              >
                <div className={styles.iconBox}>
                  <MessageCircle size={20} />
                </div>
                <div className={styles.infoContent}>
                  <h4 className={styles.infoTitle}>WhatsApp</h4>
                  <p className={styles.infoText}>(22) 99754-8462</p>
                </div>
                <ArrowUpRight size={16} className={styles.arrowIcon} />
              </a>

              <div className={styles.divider} />

              <a 
                href="mailto:muzitanopsi@outlook.com"
                className={`${styles.infoItem} ${styles.interactiveItem}`}
              >
                <div className={styles.iconBox}>
                  <Mail size={20} />
                </div>
                <div className={styles.infoContent}>
                  <h4 className={styles.infoTitle}>Email</h4>
                  <p className={styles.infoText}>muzitanopsi@outlook.com</p>
                </div>
                <ArrowUpRight size={16} className={styles.arrowIcon} />
              </a>

              <div className={styles.divider} />

              <a 
                href="https://instagram.com/junoamarte" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.infoItem} ${styles.interactiveItem} ${styles.highlightItem}`}
              >
                <div className={styles.iconBox}>
                  <Instagram size={20} />
                </div>
                <div className={styles.infoContent}>
                  <h4 className={styles.infoTitle}>Instagram</h4>
                  <p className={styles.infoText}>@junoamarte</p>
                </div>
                <ArrowUpRight size={16} className={styles.arrowIcon} />
              </a>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}