
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Comunidade",
      description: "Criamos uma comunidade vibrante onde profissionais de beleza e clientes se conectam de forma significativa."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excelência",
      description: "Nos esforçamos para oferecer a melhor experiência possível, desde a busca até o agendamento e além."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Cuidado",
      description: "Acreditamos que cuidar de si mesmo é um ato de amor próprio que todos merecem experimentar."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Qualidade",
      description: "Conectamos você apenas com profissionais verificados e estabelecimentos de alta qualidade."
    }
  ];

  const team = [
    {
      name: "Ana Carolina",
      role: "CEO & Fundadora",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Ex-proprietária de salão com 15 anos de experiência no setor de beleza."
    },
    {
      name: "Roberto Silva",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Especialista em tecnologia com paixão por soluções que simplificam a vida."
    },
    {
      name: "Mariana Santos",
      role: "Head de Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Designer experiente focada em criar experiências intuitivas e elegantes."
    }
  ];

  const stats = [
    { number: "50.000+", label: "Clientes Ativos" },
    { number: "2.500+", label: "Profissionais Parceiros" },
    { number: "100.000+", label: "Agendamentos Realizados" },
    { number: "4.8/5", label: "Avaliação Média" }
  ];

  return (
    <div className="min-h-screen bg-glam-900 text-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
            filter: "brightness(0.3)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-glam-950/80 to-glam-900/50"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading">
            Sobre o GlamPro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nascemos da paixão por conectar pessoas aos melhores profissionais de beleza, 
            criando experiências excepcionais e transformando a forma como você cuida de si mesmo.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 bg-glam-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold gradient-heading text-center mb-8">
              Nossa História
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 mb-4">
                  O GlamPro nasceu em 2023 da visão de democratizar o acesso aos melhores serviços de beleza. 
                  Nossa fundadora, Ana Carolina, após anos gerenciando seu próprio salão, percebeu as dificuldades 
                  que tanto clientes quanto profissionais enfrentavam para se conectar.
                </p>
                <p className="text-gray-300 mb-4">
                  Decidimos criar uma plataforma que não apenas facilitasse o agendamento, mas que também 
                  elevasse o padrão da indústria de beleza, promovendo transparência, qualidade e conveniência.
                </p>
                <p className="text-gray-300">
                  Hoje, orgulhosamente servimos milhares de clientes e profissionais em todo o Brasil, 
                  continuando nossa missão de tornar a beleza mais acessível e profissional.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Equipe do GlamPro trabalhando"
                  className="rounded-lg shadow-xl border border-glam-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-glam-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold gradient-heading text-center mb-12">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-glam-800 border-glam-700 text-center">
                <CardContent className="p-6">
                  <div className="text-gold-400 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gold-400">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-glam-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold gradient-heading text-center mb-12">
            Nossos Números
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-16 bg-glam-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold gradient-heading text-center mb-12">
            Conheça Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-glam-800 border-glam-700 text-center">
                <CardContent className="p-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-1 text-white">
                    {member.name}
                  </h3>
                  <p className="text-gold-400 mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 bg-glam-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-glam-900 border-glam-700">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-gold-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gold-400">
                  Nossa Missão
                </h3>
                <p className="text-gray-300">
                  Democratizar o acesso aos melhores serviços de beleza, conectando 
                  clientes e profissionais através de uma plataforma intuitiva, confiável 
                  e que promove a excelência em cada experiência.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-glam-900 border-glam-700">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-gold-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gold-400">
                  Nossa Visão
                </h3>
                <p className="text-gray-300">
                  Ser a principal plataforma de beleza do Brasil, reconhecida pela 
                  qualidade dos profissionais, inovação tecnológica e por transformar 
                  positivamente a vida das pessoas através do cuidado pessoal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-glam-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold gradient-heading mb-4">
              Faça Parte da Nossa História
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Seja você um cliente em busca dos melhores serviços ou um profissional 
              querendo expandir seu negócio, o GlamPro é o lugar certo para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                <Link to="/salons">
                  Encontrar Profissionais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-gold-500 text-gold-400">
                <Link to="/business">
                  Cadastrar Meu Negócio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
