import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Empresária",
    text: "A equipe do escritório foi fundamental para resolver um problema complexo na minha empresa. Profissionalismo e dedicação em cada etapa do processo.",
    rating: 5,
    date: "Janeiro 2024"
  },
  {
    name: "Roberto Santos",
    role: "Executivo",
    text: "Excelente atendimento e resultados surpreendentes. A equipe demonstrou grande conhecimento técnico e comprometimento com meu caso.",
    rating: 5,
    date: "Dezembro 2023"
  },
  {
    name: "Maria Oliveira",
    role: "Professora",
    text: "Atendimento humanizado e eficiente. Me senti acolhida e bem orientada em todo o processo. Recomendo sem dúvidas!",
    rating: 5,
    date: "Novembro 2023"
  }
];

const documents = [
  {
    title: "Revisão de Contratos",
    description: "Modelos de contratos personalizados e revisão de documentos jurídicos com linguagem clara e acessível.",
    features: [
      "Contratos de Prestação de Serviços",
      "Contratos de Locação",
      "Contratos de Compra e Venda",
      "Contratos de Parceria",
      "Revisão de Documentos"
    ],
    icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-gold" />
  },
  {
    title: "Documentos Trabalhistas",
    description: "Modelos e orientações para documentos trabalhistas, garantindo conformidade com a legislação vigente.",
    features: [
      "Carteira de Trabalho",
      "Rescisão Contratual",
      "Acordos Trabalhistas",
      "Documentos de Admissão",
      "Orientações Legais"
    ],
    icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-gold" />
  },
  {
    title: "Documentos Empresariais",
    description: "Modelos e orientações para documentos empresariais essenciais para sua empresa.",
    features: [
      "Contrato Social",
      "Estatuto Social",
      "Atas de Reunião",
      "Documentos Fiscais",
      "Compliance"
    ],
    icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-gold" />
  }
];

const Testimonials = () => {
  const fontSize = useResponsiveFontSize();

  return (
    <section className="py-8 sm:py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-3 sm:mb-4 md:mb-6">
            Documentação <span className="text-gold">Simplificada</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-2" style={{ marginBottom: '8%' }}>
            Encontre modelos de documentos jurídicos e orientações para
            suas demandas legais. Conteúdo atualizado e explicado de forma clara e objetiva.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white p-3 sm:p-4 md:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              style={{ paddingBottom: '8%' }}
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4 md:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  {doc.icon}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy">
                  {doc.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base" style={{ height: '22%' }}>
                {doc.description}
              </p>

              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-3 sm:mb-4 md:mb-6" style={{ height: '42%' }}>
                {doc.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 text-sm sm:text-base">
                    <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gold mr-1.5 sm:mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10 w-full group-hover:bg-gold/5 transition-colors"
                onClick={() => window.open('https://wa.me/5581985058518?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20modelos%20de%20documentos%20jurídicos.', '_blank')}
                style={{ marginTop: 4 }}
              >
                <span>Acessar Documentos</span>
                <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12 text-center">
          <Button
            variant="outline"
            className="border-gold text-gold hover:bg-gold/10"
            onClick={() => window.open('https://wa.me/5581985058518?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20modelos%20de%20documentos%20jurídicos.', '_blank')}
          >
            Solicitar Documento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
