import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HeroImage } from "./Images";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, ArrowRight } from "lucide-react";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";
import { validatePhone, validateEmail, validateName, sanitizeMessage, formatPhoneNumber, sanitizeInput, isFormReady } from "@/utils/validations";
import { toast } from "sonner";

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

const Hero = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    descricao: ""
  });
  const [errors, setErrors] = useState({
    nome: "",
    telefone: "",
    email: "",
    descricao: ""
  });
  const fontSize = useResponsiveFontSize();

  const MAX_DESCRICAO_LENGTH = 200;

  const requiredFields = ['nome', 'email', 'telefone'];
  const isFormValid = isFormReady(formData, requiredFields);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'telefone') {
      // Remove caracteres não numéricos antes de formatar
      const numericValue = value.replace(/\D/g, '');
      const formattedValue = formatPhoneNumber(numericValue);
      setFormData(prev => ({ ...prev, [name]: formattedValue }));
    } else if (name === 'nome') {
      // Remove caracteres não permitidos no nome
      const sanitizedValue = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
      setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    } else if (name === 'email') {
      // Remove espaços do email
      const sanitizedValue = value.replace(/\s/g, '');
      setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    } else if (name === 'descricao') {
      // Limita o número de caracteres
      if (value.length <= MAX_DESCRICAO_LENGTH) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Limpa o erro quando o usuário começa a digitar
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      nome: "",
      telefone: "",
      email: "",
      descricao: ""
    };

    if (!validateName(formData.nome)) {
      newErrors.nome = "Nome inválido. Deve conter pelo menos 2 caracteres e não pode conter números.";
    }

    if (!validatePhone(formData.telefone)) {
      newErrors.telefone = "Telefone inválido. Digite um número com DDD.";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "E-mail inválido.";
    }

    if (formData.descricao.length < 10) {
      newErrors.descricao = "A descrição deve ter pelo menos 10 caracteres.";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios corretamente.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsLoading(true);

      // Sanitiza os dados antes de enviar
      const sanitizedData = {
        nome: sanitizeInput(formData.nome),
        telefone: formData.telefone.replace(/\D/g, ''),
        email: sanitizeInput(formData.email),
        descricao: sanitizeMessage(formData.descricao),
      };

      // Simula o envio dos dados
      await new Promise(resolve => setTimeout(resolve, 1000));

      const whatsappMessage = `Olá, meu nome é ${sanitizedData.nome}.\n\nAssunto:\n${sanitizedData.descricao}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappUrl, '_blank');

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato via WhatsApp em até 24 horas.",
      });
      setFormData({ nome: "", telefone: "", email: "", descricao: "" });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente mais tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const whatsappMessage = "Olá, gostaria de agendar uma consulta gratuita sobre direitos jurídicos.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleScrollToServices = () => {
    // Implemente a lógica para rolar até a seção de serviços
  };

  return (
    <section className="pt-32 pb-20 bg-navy text-white relative overflow-hidden">
      <HeroImage />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className={`font-serif ${fontSize.h1} font-bold mb-4 sm:mb-6 leading-tight`}>
              Seus Direitos, Nossa <span className="text-gold">Missão</span>
            </h1>
            <p className={`${fontSize.body} text-white/90 mb-6 sm:mb-8 leading-relaxed`}>
              Conte com uma equipe de advogados especializados para defender seus interesses.
              Oferecemos consultoria jurídica personalizada e estratégias eficientes para resolver
              seu caso com excelência e transparência.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button
                size="lg"
                className={`bg-gold hover:bg-gold/90 text-white ${fontSize.button} px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6`}
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Agende sua Consulta Gratuita
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-8 text-white/80" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
              <div className="flex items-center p-2.5 rounded-lg">
                <span className={`inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gold/20 text-gold mr-2 sm:mr-3 font-bold ${fontSize.caption}`} style={{ padding: '14%' }}>
                  +300
                </span>
                <span className={`whitespace-nowrap ${fontSize.caption}`}>Clientes Atendidos</span>
              </div>
              <div className="flex items-center p-2.5 rounded-lg">
                <span className={`inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gold/20 text-gold mr-2 sm:mr-3 font-bold ${fontSize.caption}`} style={{ padding: '20%' }}>
                  98%
                </span>
                <span className={`whitespace-nowrap ${fontSize.caption}`}>Satisfação</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 animate-fade-up">
            <h2 className={`font-serif ${fontSize.h3} font-bold text-white mb-6 text-center`}>
              Fale com um Especialista
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Nome completo"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  type="text"
                  className={`bg-white/10 border-white/20 text-white placeholder:text-white/60 text-xs sm:text-sm ${errors.nome ? 'border-red-500' : ''}`}
                />
                {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
              </div>
              <div>
                <Input
                  placeholder="Telefone com DDD"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  type="tel"
                  inputMode="numeric"
                  maxLength={15}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-white/60 text-xs sm:text-sm ${errors.telefone ? 'border-red-500' : ''}`}
                />
                {errors.telefone && <p className="text-red-500 text-sm mt-1">Por favor, preencha seu telefone.</p>}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`bg-white/10 border-white/20 text-white placeholder:text-white/60 text-xs sm:text-sm ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <Textarea
                  placeholder="Descreva brevemente sua situação"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  maxLength={MAX_DESCRICAO_LENGTH}
                  className={`min-h-[100px] bg-white/10 border-white/20 text-white placeholder:text-white/60 text-xs sm:text-sm ${errors.descricao ? 'border-red-500' : ''}`}
                />
                <div className="flex justify-end mt-1">
                  <span className="text-white/60 text-xs">
                    {formData.descricao.length}/{MAX_DESCRICAO_LENGTH}
                  </span>
                </div>
                {errors.descricao && <p className="text-red-500 text-sm mt-1">{errors.descricao}</p>}
              </div>
              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-white"
                disabled={!isFormValid || isLoading}
              >
                {isLoading ? "Enviando..." : "Enviar Mensagem"}
              </Button>
              <p className={`text-center text-white/60 ${fontSize.caption}`}>
                Seus dados estão seguros. Veja nossa Política de Privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </section>
  );
};

const WhatsAppButton = () => {
  const fontSize = useResponsiveFontSize();

  const handleWhatsAppClick = () => {
    const whatsappMessage = "Olá, gostaria de tirar uma dúvida sobre meus direitos jurídicos.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all z-50"
      aria-label="Conversar no WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.937 11.937 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </button>
  );
};

export default Hero;
