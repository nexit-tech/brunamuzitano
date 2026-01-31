import { 
  Sparkles, 
  HeartHandshake, 
  Shield, 
  Brain, 
  CloudSun, 
  Fingerprint 
} from "lucide-react";
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

export default function Services() {
  return (
    <section id="tcc" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Title level={2} align="center">Como posso te ajudar?</Title>
          <p className={styles.subtitle}>
            Acolhimento especializado para suas demandas emocionais.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconBox}>
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}