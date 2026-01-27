import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Target, Lightbulb, Heart, ArrowRight, Globe, Zap, ShieldCheck } from 'lucide-react';
import Layout from '@/components/Layout';
import FloatingChatbots from '@/components/animations/FloatingChatbots';
import AnimatedCounter from '@/components/animations/AnimatedCounter';

const About = () => {
  const values = [
    {
      icon: Globe,
      title: 'Accessibilité Mondiale',
      description: 'Nous brisons les barrières géographiques en offrant des sites web pro à 50$/mois pour tous.',
    },
    {
      icon: Zap,
      title: 'Innovation IA',
      description: 'Nous intégrons l\'intelligence artificielle au cœur de votre business pour automatiser vos ventes.',
    },
    {
      icon: ShieldCheck,
      title: 'Fiabilité',
      description: 'Chaque site et chaque chatbot est conçu pour être robuste, sécurisé et disponible 24/7.',
    },
    {
      icon: Target,
      title: 'Résultats',
      description: 'Notre priorité n\'est pas seulement le design, mais la conversion de vos visiteurs en clients.',
    },
  ];

  const stats = [
    { value: '300+', label: 'Sites Web créés' },
    { value: '50$', label: 'Abonnement mensuel' },
    { value: '1M+', label: 'Messages IA gérés' },
    { value: '24/7', label: 'Support technique' },
  ];

  const timeline = [
    { year: '2020', title: 'Fondation', description: 'Naissance de New Technology Empire avec pour mission de démocratiser le web.' },
    { year: '2021', title: 'Révolution IA', description: 'Intégration des premiers chatbots intelligents sur Facebook et WhatsApp.' },
    { year: '2022', title: 'Expansion Web', description: 'Lancement de notre offre de sites web professionnels sans frais d\'entrée élevés.' },
    { year: '2024', title: 'Empire Global', description: 'Accompagnement d\'entreprises sur tous les continents avec des solutions 360°.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium"
          >
            Bâtir le futur du Web & de l'IA
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Notre Histoire & Vision
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Nous sommes les architectes de votre présence numérique. De la création de sites web haute performance à l'automatisation par IA sur WhatsApp et Instagram, nous propulsons votre business.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Pourquoi New Technology Empire ?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Dans un monde où tout va vite, posséder un site web n'est plus un luxe, c'est une nécessité. Mais beaucoup d'entrepreneurs sont freinés par les coûts exorbitants. 
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 font-medium text-foreground">
                C'est là que nous intervenons : nous créons votre site web professionnel pour seulement 50$/mois, sans compromis sur la qualité.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mais nous ne nous arrêtons pas là. Pour que votre site devienne une véritable machine à vendre, nous y intégrons nos <strong>Chatbots IA intelligents</strong>. Capables de répondre à vos clients sur WhatsApp, Facebook et Instagram, ils assurent un service client parfait, même pendant que vous dormez.
              </p>
              <div className="mt-8">
                <Button asChild className="btn-glow group">
                    <Link to="/contact">
                        Rejoindre l'Empire
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-6 p-4 bg-muted/30 rounded-3xl border border-border/50"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl shadow-sm border border-border/50 text-center">
                   <AnimatedCounter value={stat.value} label={stat.label} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ce qui nous définit
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Nos compétences au service de votre succès.
            </p>
          </motion.div>
          
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
  <motion.div
    key={index}
    className="group relative bg-primary rounded-2xl p-8 border border-white/10 transition-all duration-300 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
    variants={itemVariants}
    whileHover={{ y: -10, scale: 1.05 }}
  >
    {/* Petit carré d'icône : blanc/bleu au survol */}
    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-primary transition-all duration-300">
      <value.icon size={28} />
    </div>
    
    <h3 className="text-xl font-heading font-semibold mb-3 text-white">
      {value.title}
    </h3>
    <p className="text-white/80 text-sm leading-relaxed">
      {value.description}
    </p>
  </motion.div>
))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Notre Évolution
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              D'une petite équipe de passionnés à une agence tech internationale.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-ml-px"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`flex gap-8 mb-12 last:mb-0 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="hidden md:block md:w-1/2"></div>
                <div className="absolute left-0 md:left-1/2 md:-ml-6 top-0 w-12 h-12 bg-primary rounded-full border-4 border-background z-10 flex items-center justify-center text-white font-bold text-sm">
                  {item.year.slice(-2)}
                </div>
                <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="text-primary font-bold mb-1">{item.year}</div>
                  <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary relative">
        <div className="container-custom text-center text-primary-foreground relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Prêt à faire passer votre business au niveau supérieur ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-primary font-bold px-10 h-14 text-lg btn-glow">
              <Link to="/contact">Démarrer mon projet à 50$/mois</Link>
            </Button>
            <p className="text-primary-foreground/80 font-medium">Ouvert aux projets partout dans le monde.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;