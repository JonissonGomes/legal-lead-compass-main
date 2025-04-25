import { Scale } from "lucide-react";
import PrivacyTermsModal from "./PrivacyTermsModal";
import { privacyPolicy, termsOfUse } from "@/content/legal-content";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 text-gold mr-2" />
              <span className="font-playfair text-xl font-bold">Pinheiro & Guimarães</span>
            </div>
            <p className="text-gray-300 text-sm">
              Soluções jurídicas personalizadas para seu negócio e necessidades pessoais.
            </p>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-gold transition-colors">Serviços</a></li>
              <li><a href="#contato" className="hover:text-gold transition-colors">Contato</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>contato@pinheiroeguimaraes.com.br</li>
              <li>(81) 99999-99999</li>
              <li>Espinheiros, 1000, Recife - PE</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4">Certificações</h3>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 p-2 rounded text-xs text-center w-20">
                OAB<br />Certificado
              </div>
              <div className="bg-white/10 p-2 rounded text-xs text-center w-20">
                ISO<br />9001
              </div>
              <div className="bg-white/10 p-2 rounded text-xs text-center w-20">
                LGPD<br />Compliant
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Pinheiro & Guimarães. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <li>
                <PrivacyTermsModal
                  title="Política de Privacidade"
                  content={privacyPolicy}
                  trigger={
                    <a className="block sm:inline text-xs sm:text-sm hover:text-gold transition-colors cursor-pointer">
                      Política de Privacidade
                    </a>
                  }
                />
              </li>
              <li>
                <PrivacyTermsModal
                  title="Termos de Uso"
                  content={termsOfUse}
                  trigger={
                    <a className="block sm:inline text-xs sm:text-sm hover:text-gold transition-colors cursor-pointer">
                      Termos de Uso
                    </a>
                  }
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
