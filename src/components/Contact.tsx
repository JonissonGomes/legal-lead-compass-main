import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Calendar, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      aceitaTermos: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de envio
    setTimeout(() => {
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
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6">
              Agende Sua Consulta Gratuita
            </h2>
            <div className="mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gold/10 p-2 rounded-full mr-4">
                    <FileText className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Consulta Jurídica Personalizada</h3>
                    <p className="text-gray-600 text-sm">
                      Análise detalhada do seu caso com orientações específicas
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold/10 p-2 rounded-full mr-4">
                    <FileText className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Documentação Simplificada</h3>
                    <p className="text-gray-600 text-sm">
                      Processo descomplicado e ágil para resolver seu caso
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold/10 p-2 rounded-full mr-4">
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
                  className="border-gray-300"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300"
                />
              </div>
              <div>
                <Input
                  placeholder="Telefone com DDD"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="border-gray-300"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Descreva brevemente seu caso"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="min-h-[120px] border-gray-300"
                />
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
                  disabled={isLoading}
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
