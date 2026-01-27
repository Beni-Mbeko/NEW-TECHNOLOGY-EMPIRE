import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Bot, Headphones, Settings, BarChart3, Zap, Shield, Globe, ArrowRight, Check } from 'lucide-react';
import Layout from '@/components/Layout';
import FloatingChatbots from '@/components/animations/FloatingChatbots';
import CodeAnimation from '@/components/animations/CodeAnimation';
import NetworkNodes from '@/components/animations/NetworkNodes';

const Services = () => {
  const mainServices = [
    {
      icon: Bot,
      title: 'Chatbots IA Avancés',
      description: 'Des assistants virtuels intelligents capables de comprendre le contexte, répondre avec précision et apprendre de chaque interaction.',
      features: ['Compréhension du langage naturel', 'Apprentissage automatique', 'Personnalisation avancée', 'Multi-langues'],
    },
    {
      icon: Globe, // Idéal pour montrer le côté "Partout dans le monde"
      title: 'Site Web Pro à 50$/mois',
      description: 'Lancez votre empire numérique sans investissement lourd. Une formule tout compris accessible partout dans le monde.',
      features: ['Hébergement & Domaine inclus', 'Design Premium & Responsive', 'Maintenance technique gérée', 'Modifications mensuelles'],
    },
    {
      icon: Headphones,
      title: 'Support Client 24/7',
      description: 'Solutions complètes pour gérer efficacement toutes les demandes de vos clients, à tout moment.',
      features: ['Disponibilité permanente', 'Temps de réponse < 3s', 'Escalade intelligente', 'Historique complet'],
    },
    {
      icon: Settings,
      title: 'Intégrations Sur Mesure',
      description: 'Connectez nos solutions à vos outils existants pour une expérience fluide et unifiée.',
      features: ['CRM & ERP', 'E-commerce', 'Réseaux sociaux', 'APIs personnalisées'],
    },
  ];

  const benefits = [
    { icon: Zap, title: 'Performance', description: 'Réponses instantanées pour une satisfaction client maximale.' },
    { icon: Shield, title: 'Sécurité', description: 'Protection des données conforme aux normes RGPD.' },
    { icon: Globe, title: 'Évolutivité', description: 'Solutions qui grandissent avec votre entreprise.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-95"></div>
        <FloatingChatbots />
        <div className="relative z-10 container-custom text-center text-primary-foreground">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Nos Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Des solutions technologiques innovantes pour transformer votre relation client et booster votre croissance.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mainServices.map((service, index) => (
  <motion.div
    key={index}
    className="group relative bg-primary rounded-2xl p-8 border border-white/10 transition-all duration-300 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
    variants={itemVariants}
    whileHover={{ y: -10, scale: 1.05 }}
  >
    {/* Petit carré d'icône : blanc/bleu au survol */}
    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300">
      <service.icon size={28} />
    </div>

    <h3 className="text-2xl font-heading font-semibold mb-4 text-white">
      {service.title}
    </h3>
    <p className="text-white/80 mb-6">
      {service.description}
    </p>

    {/* Liste des caractéristiques en blanc */}
    <ul className="space-y-3">
      {service.features.map((feature, idx) => (
        <motion.li
          key={idx}
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <Check className="text-white/60 flex-shrink-0" size={18} />
          <span className="text-white/90">{feature}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
))}
          </motion.div>
        </div>
      </section>

      {/* Code Animation Section */}
      <section className="section-padding bg-muted overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Développement Web & Chatbots
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nous créons des solutions web modernes et des chatbots intelligents qui s'intègrent parfaitement à votre écosystème numérique.
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <NetworkNodes />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <CodeAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre expertise et notre engagement envers l'excellence nous distinguent.
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl p-8 text-center card-hover"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <benefit.icon size={32} className="text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center text-primary-foreground">
          <motion.h2
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Des solutions adaptées à chaque budget
          </motion.h2>
          <motion.p
            className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Que vous soyez une startup ou une grande entreprise, nous avons la solution qu'il vous faut.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button asChild size="lg" variant="secondary" className="text-primary font-semibold btn-glow">
              <Link to="/contact">
                Demander un devis personnalisé
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Prêt à démarrer ?
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Contactez notre équipe pour une démonstration gratuite et découvrez comment nos solutions peuvent transformer votre service client.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button asChild size="lg" className="btn-glow">
              <Link to="/contact">
                Planifier une démo
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/a-propos">En savoir plus sur nous</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
