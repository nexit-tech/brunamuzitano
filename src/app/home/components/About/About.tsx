import Image from "next/image"; 
import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.visualColumn}>
          <div className={styles.imageCard}>
            <Image 
              src="/bruna.png"
              alt="Foto da Psicóloga Bruna Muzitano"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          
          <div className={styles.floatingWidgetTop}>
            <span className={styles.widgetLabel}>Acolhimento</span>
          </div>
          <div className={styles.floatingWidgetBottom}>
            <span className={styles.widgetLabel}>Autonomia</span>
          </div>
        </div>

        <div className={styles.contentColumn}>
          <div className={styles.header}>
            <span className={styles.tag}>Quem sou eu</span>
            <Title level={2} className={styles.title}>
              Bruna Muzitano
            </Title>
          </div>
          
          <div className={styles.textBody}>
            <p>
              Olá! Sou psicóloga clínica com atuação fundamentada na Terapia Cognitivo-Comportamental (TCC), 
              e acredito profundamente que o cuidado psicológico é um espaço de reconstrução interna, 
              consciência e liberdade emocional.
            </p>
            <p>
              Meu trabalho é guiado pelo lema: <strong>&quot;O amor é a única revolução verdadeira&quot;</strong>, 
              e eu busco revolucionar vidas através da escuta, empatia e acolhimento. 
              Acredito que a transformação acontece quando o paciente se sente verdadeiramente visto, 
              validado e seguro para olhar para si sem julgamentos.
            </p>
            <p>
              Meu foco terapêutico está no fortalecimento da autoconfiança e da autonomia, 
              auxiliando cada pessoa a limpar as lentes com as quais enxerga a si mesma e o mundo, 
              identificando e ressignificando crenças, padrões e pensamentos que limitam seu crescimento.
            </p>
            <p>
              A partir de uma escuta sensível e de intervenções estruturadas, busco promover clareza emocional, 
              autorresponsabilidade e escolhas mais alinhadas com a própria essência.
            </p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>CRP</span>
              <span className={styles.statLabel}>05/80115</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>+1 ano</span>
              <span className={styles.statLabel}>De Atuação</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}