import { useState } from 'react';

import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

import { Textarea } from '@/components/ui/textarea';

import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

import Layout from '@/components/Layout';

import FloatingChatbots from '@/components/animations/FloatingChatbots';

import { useToast } from "@/components/ui/use-toast";



const Contact = () => {

  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);



  // REMPLACE CETTE URL PAR TON URL GOOGLE APPS SCRIPT (Celle qui finit par /exec)

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwE5qiO0LzXuEoSozkewBOYBdx9T-hylaNmL8JMRRosGsSL3ycNO5RJTQoHPet35RK6/exec";



  const contactInfo = [

    {

      icon: Mail,

      title: 'Email',

      value: 'contact@newtechnologyempire.com',

      href: 'mailto:contact@newtechnologyempire.com',

    },

    {

      icon: Phone,

      title: 'Téléphone',

      value: '+243 971 423 648',

      href: 'tel:+243971423648',

    },

    {

      icon: MapPin,

      title: 'Adresse',

      value: 'Kinshasa, RDC',

      href: '#',

    },

  ];



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    setIsSubmitting(true);



    const form = e.currentTarget;

    const formData = new FormData(form);



    try {

      // On utilise 'no-cors' pour éviter les erreurs de sécurité avec Google

      await fetch(SCRIPT_URL, {

        method: 'POST',

        body: formData,

        mode: 'no-cors',

      });



      toast({

        title: "L'Empire vous remercie !",

        description: "Votre message a été envoyé. Nous vous répondrons très vite.",

      });

      form.reset();

    } catch (error) {

      toast({

        variant: "destructive",

        title: "Erreur d'envoi",

        description: "Impossible d'envoyer le message. Veuillez réessayer.",

      });

    } finally {

      setIsSubmitting(false);

    }

  };



  const containerVariants = {

    hidden: { opacity: 0 },

    visible: {

      opacity: 1,

      transition: { staggerChildren: 0.1 },

    },

  };



  const itemVariants = {

    hidden: { opacity: 0, y: 20 },

    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },

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

            Contactez-nous

          </motion.h1>

          <motion.p

            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ delay: 0.3, duration: 0.6 }}

          >

            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos projets.

          </motion.p>

        </div>

      </section>



      {/* Contact Section */}

      <section className="section-padding bg-background">

        <div className="container-custom">

          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Info */}

            <motion.div

              className="lg:col-span-1"

              initial={{ opacity: 0, x: -30 }}

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.6 }}

            >

              <h2 className="text-2xl font-heading font-bold mb-6">

                Informations de contact

              </h2>

              <motion.div

                className="space-y-6"

                variants={containerVariants}

                initial="hidden"

                whileInView="visible"

                viewport={{ once: true }}

              >

                {contactInfo.map((info, index) => (

                  <motion.a

                    key={index}

                    href={info.href}

                    className="flex items-start gap-4 p-5 bg-primary rounded-2xl border border-white/10 transition-all duration-300 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group"

                    variants={itemVariants}

                    whileHover={{ x: 10, scale: 1.05 }}

                  >

                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-primary transition-colors duration-300 text-white">

                      <info.icon size={24} />

                    </div>

                    <div>

                      <h3 className="font-semibold text-white mb-1">{info.title}</h3>

                      <p className="text-white/80">{info.value}</p>

                    </div>

                  </motion.a>

                ))}

              </motion.div>

            </motion.div>



            {/* Formulaire Principal (Connecté à Google Apps Script) */}

            <motion.div

              className="lg:col-span-2"

              initial={{ opacity: 0, x: 30 }}

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.6 }}

            >

              <div className="bg-card rounded-2xl p-8 border border-border">

                <h2 className="text-2xl font-heading font-bold mb-6">

                  Envoyez-nous un message

                </h2>



                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid sm:grid-cols-2 gap-4">

                    <div className="space-y-2">

                      <label htmlFor="firstName" className="text-sm font-medium">Prénom *</label>

                      <Input id="firstName" name="firstName" required placeholder="Béni" disabled={isSubmitting} />

                    </div>

                    <div className="space-y-2">

                      <label htmlFor="lastName" className="text-sm font-medium">Nom *</label>

                      <Input id="lastName" name="lastName" required placeholder="MBEKO" disabled={isSubmitting} />

                    </div>

                  </div>



                  <div className="grid sm:grid-cols-2 gap-4">

                    <div className="space-y-2">

                      <label htmlFor="email" className="text-sm font-medium">Email *</label>

                      <Input id="email" name="email" type="email" required placeholder="contact@newtechnologyempire.com" disabled={isSubmitting} />

                    </div>

                    <div className="space-y-2">

                      <label htmlFor="phone" className="text-sm font-medium">Téléphone</label>

                      <Input id="phone" name="phone" type="tel" placeholder="+243 971 423 648" disabled={isSubmitting} />

                    </div>

                  </div>



                  <div className="space-y-2">

                    <label htmlFor="message" className="text-sm font-medium">Message *</label>

                    <Textarea id="message" name="message" required placeholder="Comment pouvons-nous vous aider ? Parlez-nous de votre projet..." rows={5} disabled={isSubmitting} />

                  </div>



                  <Button type="submit" size="lg" className="w-full btn-glow" disabled={isSubmitting}>

                    {isSubmitting ? (

                      <>

                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />

                        Transmission en cours...

                      </>

                    ) : (

                      <>

                        Envoyer le message

                        <Send className="ml-2" size={20} />

                      </>

                    )}

                  </Button>

                </form>

              </div>

            </motion.div>

          </div>

        </div>

      </section>



      {/* FAQ Section */}

      <section className="section-padding bg-muted">

        <div className="container-custom text-center">

            {/* ... (Je garde ton contenu FAQ actuel mais avec le nouveau style) */}

            <h2 className="text-3xl font-heading font-bold mb-12">Questions fréquentes</h2>

            <div className="max-w-3xl mx-auto space-y-4">

                {[

                { q: "Combien de temps faut-il pour créer un site web ?", a: "Nous livrons nos projets en un temps record. Tout dépend de votre implication : avec une collaboration fluide et des retours rapides, votre site peut être en ligne en moins d'une semaine." },

                { q: "Vos solutions sont-elles compatibles avec mon CRM ?", a: "Oui, nos solutions s\'intègrent avec la plupart des CRM du marché, y compris Salesforce, HubSpot, et Pipedrive." },

                { q: "Proposez-vous un support technique ?", a: "Absolument ! Nous offrons un support technique disponible 24h/7 pour tous nos clients afin de garantir que votre site reste performant et sécurisé." }

                ].map((faq, i) => (

                    <motion.div

                        key={i}

                        className="bg-primary rounded-2xl p-6 border border-white/10 text-left transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] group"

                        whileHover={{ scale: 1.02, x: 10 }}

                    >

                        <h3 className="font-semibold text-white mb-2">{faq.q}</h3>

                        <p className="text-white/70 text-sm">{faq.a}</p>

                    </motion.div>

                ))}

            </div>

        </div>

      </section>

    </Layout>

  );

};



export default Contact;