import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Calendar, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { validatePhone, validateEmail, validateName, sanitizeMessage, formatPhoneNumber, sanitizeInput, isFormReady } from "@/utils/validations";

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    aceitaTermos: false
  });
  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });

  const requiredFields = ['nome', 'email', 'telefone'];
  const isFormValid = isFormReady(formData, requiredFields);

  const MAX_MENSAGEM_LENGTH = 200;

  // Data de expiração da oferta (7 dias à frente)
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7);
  const formattedDate = expiryDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

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
    } else if (name === 'mensagem') {
      // Limita o número de caracteres
      if (value.length <= MAX_MENSAGEM_LENGTH) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Limpa o erro quando o usuário começa a digitar
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      aceitaTermos: checked
    }));
  };

  const handleWhatsAppClick = () => {
    const whatsappMessage = "Olá, gostaria de agendar uma consulta gratuita sobre meus direitos.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios corretamente.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulação de envio
    setTimeout(() => {
      // Sanitiza os dados antes de enviar
      const sanitizedData = {
        nome: sanitizeInput(formData.nome),
        telefone: formData.telefone.replace(/\D/g, ''),
        email: sanitizeInput(formData.email),
        mensagem: sanitizeMessage(formData.mensagem),
      };

      const whatsappMessage = `Olá, meu nome é ${sanitizedData.nome}.\n\nAssunto:\n${sanitizedData.mensagem}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappUrl, '_blank');

      toast({
        title: "Recebemos sua mensagem!",
        description: "Um de nossos advogados entrará em contato em breve.",
      });
      setIsLoading(false);
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
        aceitaTermos: false
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">
              Fale Conosco
            </h2>
            <p className="text-gray-600 mb-8">
              Preencha o formulário abaixo e um de nossos advogados entrará em contato para uma consulta gratuita.
            </p>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="bg-gold/10 p-2 rounded-full mb-2 sm:mb-0 sm:mr-4">
                  <FileText className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Oferta Especial</h3>
                  <p className="text-gray-600 text-sm">
                    Válido até {formattedDate}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="bg-gold/10 p-2 rounded-full mb-2 sm:mb-0 sm:mr-4">
                  <Calendar className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Primeiros 10 Contatos</h3>
                  <p className="text-gray-600 text-sm">
                    Recebem material jurídico exclusivo gratuitamente
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Nome completo"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  type="text"
                  className={`border-gray-300 placeholder:text-xs sm:placeholder:text-sm ${errors.nome ? 'border-red-500' : ''}`}
                />
                {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`border-gray-300 placeholder:text-xs sm:placeholder:text-sm ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                  className={`border-gray-300 placeholder:text-xs sm:placeholder:text-sm ${errors.telefone ? 'border-red-500' : ''}`}
                />
                {errors.telefone && <p className="text-red-500 text-sm mt-1">Por favor, preencha seu telefone.</p>}
              </div>
              <div>
                <Textarea
                  placeholder="Descreva brevemente sua situação"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  maxLength={MAX_MENSAGEM_LENGTH}
                  className={`min-h-[100px] border-gray-300 placeholder:text-xs sm:placeholder:text-sm ${errors.mensagem ? 'border-red-500' : ''}`}
                />
                <div className="flex justify-end mt-1">
                  <span className="text-gray-500 text-xs">
                    {formData.mensagem.length}/{MAX_MENSAGEM_LENGTH}
                  </span>
                </div>
                {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem}</p>}
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="termos"
                  checked={formData.aceitaTermos}
                  onCheckedChange={handleCheckboxChange}
                  required
                />
                <label
                  htmlFor="termos"
                  className="text-sm text-gray-600"
                >
                  Concordo em receber comunicações e aceito a{" "}
                  <a href="#" className="text-gold hover:underline">Política de Privacidade</a>
                </label>
              </div>
              <div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-navy hover:bg-gold text-white transition-colors"
                  disabled={!isFormValid || isLoading || !formData.aceitaTermos}
                >
                  {isLoading ? (
                    "Enviando..."
                  ) : (
                    <>
                      Agendar Consulta Gratuita <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
