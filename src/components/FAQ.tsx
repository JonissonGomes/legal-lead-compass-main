
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";

const faqs = [
  {
    question: "Quanto custa a consulta inicial?",
    answer: "A primeira consulta é totalmente gratuita. Nela avaliaremos seu caso e apresentaremos as possíveis soluções jurídicas. Valores para representação legal serão apresentados apenas após esta análise inicial."
  },
  {
    question: "Quais documentos preciso enviar para uma consulta?",
    answer: "Para a consulta inicial, recomendamos ter documentos básicos como RG, CPF e documentos específicos relacionados ao seu caso (contratos, notificações, etc). Mas não se preocupe! Podemos iniciar a conversa mesmo sem todos os documentos."
  },
  {
    question: "Em quanto tempo receberei resposta pelo WhatsApp?",
    answer: "Nosso compromisso é responder todas as solicitações em até 24 horas úteis. Em muitos casos, o retorno acontece em poucas horas."
  },
  {
    question: "Quais áreas do direito vocês atendem?",
    answer: "Nosso escritório é especializado em direito empresarial, trabalhista e civil. Contamos com uma equipe de especialistas em cada área para oferecer o melhor atendimento."
  },
  {
    question: "É possível realizar reuniões online?",
    answer: "Sim! Além do atendimento via WhatsApp, realizamos consultas por videoconferência. Basta solicitar o agendamento com nossa equipe."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  const fontSize = useResponsiveFontSize();

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <HelpCircle className="text-gold h-6 w-6" />
            <h2 className="font-playfair text-2xl md:text-4xl font-bold text-center text-navy" style={{ fontSize: fontSize.body}}>
              Perguntas Frequentes
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-12">
            Respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible
                key={index}
                open={openItems[index]}
                onOpenChange={() => toggleItem(index)}
                className="border border-gray-200 rounded-lg bg-white overflow-hidden"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium">
                  <span className="text-navy font-semibold">{faq.question}</span>
                  {openItems[index] ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 pt-0 text-gray-600 border-t">
                  <p style={{ marginTop: '2%' }}>{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
