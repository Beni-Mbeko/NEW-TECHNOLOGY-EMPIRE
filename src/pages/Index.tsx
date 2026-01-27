import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Bot, Globe, Smartphone, BarChart3, ArrowRight, CheckCircle2, Code2, MessageSquare } from 'lucide-react';
import Layout from '@/components/Layout';
import FloatingChatbots from '@/components/animations/FloatingChatbots';
import AnimatedChatBubbles from '@/components/animations/AnimatedChatBubbles';

const Index = () => {
  const services = [
    {
      icon: Bot,
      title: 'Chatbots IA Multicanaux',
      description: 'Assistants virtuels intelligents intégrés sur votre Site Web, Facebook, Instagram et WhatsApp 24/7.',
    },
    {
      icon: Globe,
      title: 'Création de Sites Web',
      description: 'Sites vitrines, E-commerce et plateformes sur mesure, designés pour convertir et performer.',
    },
    {
      icon: Smartphone,
      title: 'Applications Web & Mobile',
      description: 'Développement d\'applications réactives et modernes pour une expérience utilisateur fluide.',
    },
    {
      icon: BarChart3,
      title: 'Stratégie Digitale & SEO',
      description: 'Optimisation de votre présence en ligne pour attirer plus de clients qualifiés.',
    },
  ];

  const articles = [
    {
      category: 'INNOVATION WEB',
      title: "Pourquoi un site web professionnel est indispensable pour votre croissance en 2024",
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    },
    {
      category: 'INTELLIGENCE ARTIFICIELLE',
      title: "Comment nos chatbots transforment vos visiteurs en clients fidèles sur WhatsApp",
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
    },
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        </div>

        {/* Floating icons animation */}
        <FloatingChatbots />

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-primary-foreground">
          <div className="max-w-5xl mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Votre Empire Digital commence
              <motion.span
                className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-purple-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Ici et Maintenant
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Nous fusionnons le meilleur du <strong>Développement Web</strong> et de l'<strong>Intelligence Artificielle</strong>. 
              Obtenez un site web ultra-performant et intégrez des chatbots intelligents pour automatiser votre service client sur tous vos canaux.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button asChild size="lg" variant="secondary" className="text-primary font-bold btn-glow shadow-xl hover:scale-105 transition-transform">
                <Link to="/services">
                  Je veux mon Site Web
                  <Globe className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link to="/contact">
                  Démo Chatbot IA
                  <Bot className="ml-2" size={20} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Illustration */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-[2rem] border border-border/50 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                <div className="relative z-10 flex flex-col gap-6 w-full max-w-sm">
                   {/* Simulation interface Web + Chat */}
                   <div className="bg-card border border-border rounded-xl p-4 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 mb-3 border-b border-border pb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="text-xs text-muted-foreground ml-auto">Votre Site Web.com</div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-20 bg-muted/50 rounded-lg animate-pulse"></div>
                        <div className="h-4 bg-muted/50 rounded w-3/4"></div>
                        <div className="h-4 bg-muted/50 rounded w-1/2"></div>
                      </div>
                   </div>
                   <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 shadow-xl transform translate-x-8 -translate-y-4 hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-2">
                        <Bot className="text-primary" size={24} />
                        <span className="text-sm font-semibold">Assistant IA</span>
                      </div>
                      <p className="text-xs text-muted-foreground">"Bonjour ! Je suis là pour aider vos clients 24h/24 sur WhatsApp..."</p>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Code2 size={16} />
                <span>Expertise 360°</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground leading-tight">
                Plus qu'une agence, votre partenaire de <span className="text-primary">croissance digitale</span>.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Chez <strong className="text-foreground">New Technology Empire</strong>, nous ne créons pas seulement du code, nous créons de la valeur.
                Notre mission est double : vous offrir une vitrine web d'exception et automatiser vos relations clients grâce à l'IA.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Que vous ayez besoin d'un site e-commerce robuste accessible partout dans le monde ou d'un chatbot capable de gérer des milliers de conversations sur Facebook et WhatsApp, nous avons la solution technique qu'il vous faut.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Sites Web Design & Rapides', 
                  'Chatbots IA WhatsApp & Messenger', 
                  'Solutions E-commerce', 
                  'Automatisation Service Client'
                ].map((item, index) => (
                  <motion.div key={index} className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg" variants={itemVariants}>
                    <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground font-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Button asChild size="lg" className="btn-glow group">
                <Link to="/a-propos">
                  Découvrir notre vision
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nos Solutions Digitales</h2>
            <p className="text-muted-foreground text-lg">Tout ce dont vous avez besoin pour dominer votre marché en ligne.</p>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
  <motion.div
    key={index}
    className="group relative bg-primary rounded-2xl p-6 border border-white/10 transition-all duration-300 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
    variants={itemVariants}
    whileHover={{ y: -10, scale: 1.05 }}
  >
    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300">
      <service.icon size={28} />
    </div>

    <h3 className="text-xl font-heading font-semibold mb-3 text-white">
      {service.title}
    </h3>
    <p className="text-white/80 text-sm leading-relaxed">
      {service.description}
    </p>
  </motion.div>
))}
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <motion.h2
                className="text-3xl md:text-4xl font-heading font-bold mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Actualités & Conseils
              </motion.h2>
              <p className="text-muted-foreground">Restez à la pointe de la technologie.</p>
            </div>
           <Button variant="ghost" asChild className="group">
  <a 
    href="https://www.facebook.com/profile.php?id=61578191043336" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Voir tous les articles sur Facebook
    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
  </a>
</Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-foreground group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <Button variant="link" className="p-0 h-auto text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Lire l'article
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Prêt à lancer votre projet ?
          </motion.h2>
          <motion.p
            className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Que ce soit pour un site web époustouflant ou un chatbot intelligent, nous avons l'équipe qu'il vous faut.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button asChild size="lg" variant="secondary" className="text-primary font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
              <Link to="/contact">
                Demander un devis gratuit
                <ArrowRight className="ml-2" size={24} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              <Link to="/services">
                Explorer nos offres
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;