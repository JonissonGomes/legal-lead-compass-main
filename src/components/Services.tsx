import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Scale, FileText, Building2, Gavel, ArrowRight } from "lucide-react";
import { ServiceImage } from "./Images";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Scale className="h-8 w-8 text-gold" />,
      title: "Direito Civil",
      description: "Atuamos em questões como indenizações, contratos, responsabilidade civil, direito de família e sucessões, sempre buscando a melhor solução para seu caso.",
      features: [
        "Indenizações",
        "Contratos",
        "Responsabilidade Civil",
        "Direito de Família",
        "Sucessões"
      ]
    },
    {
      icon: <Building2 className="h-8 w-8 text-gold" />,
      title: "Direito Empresarial",
      description: "Assessoria completa para empresas, incluindo contratos, compliance, recuperação judicial e extrajudicial, e consultoria preventiva.",
      features: [
        "Contratos Empresariais",
        "Compliance",
        "Recuperação Judicial",
        "Consultoria Preventiva",
        "Fusões e Aquisições"
      ]
    },
    {
      icon: <Gavel className="h-8 w-8 text-gold" />,
      title: "Direito Trabalhista",
      description: "Defesa dos direitos trabalhistas, rescisões, acordos, ações coletivas e consultoria preventiva para empresas e trabalhadores.",
      features: [
        "Rescisões",
        "Acordos",
        "Ações Coletivas",
        "Consultoria Preventiva",
        "Defesa de Direitos"
      ]
    }
  ];

  const handleWhatsAppClick = (service: string) => {
    const message = `Olá, gostaria de saber mais sobre ${service}. Podem me ajudar?`;
    window.open(`https://wa.me/5581985058518?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
            Nossas <span className="text-gold">Áreas de Atuação</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções jurídicas especializadas em diversas áreas do direito,
            sempre com foco na excelência e no melhor resultado para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base" style={{ height: '24%' }}>
                {service.description}
              </p>
              <ul className="mb-4 sm:mb-6 space-y-1 sm:space-y-2" style={{ height: '32%' }}>
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10 w-full group-hover:bg-gold/5 transition-colors"
                onClick={() => handleWhatsAppClick(service.title)}
                style={{ marginTop: '6%' }}
              >
                <span>Saiba Mais</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
