
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Scale, Calendar, User } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="h-10 w-10 text-gold" />,
    title: "Resposta Rápida",
    description: "Atendimento em até 24 horas úteis via WhatsApp",
  },
  {
    icon: <Scale className="h-10 w-10 text-gold" />,
    title: "Consulta Inicial Gratuita",
    description: "Avaliação do seu caso sem compromisso financeiro",
  },
  {
    icon: <Calendar className="h-10 w-10 text-gold" />,
    title: "Agendamento Flexível",
    description: "Marque consultas presenciais conforme sua disponibilidade",
  },
  {
    icon: <User className="h-10 w-10 text-gold" />,
    title: "Advogados Especializados",
    description: "Profissionais com experiência e qualificação comprovada",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-navy mb-4">
          Por Que Escolher Nosso Escritório
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Oferecemos soluções jurídicas personalizadas com foco em resultados e atendimento de excelência
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
