import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useResponsiveFontSize } from "@/hooks/useResponsiveFontSize";
import PrivacyTermsModal from "./PrivacyTermsModal";
import { privacyPolicy, termsOfUse } from "@/content/legal-content";

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
const contactPhone = import.meta.env.VITE_CONTACT_PHONE;
const contactAddress = import.meta.env.VITE_CONTACT_ADDRESS;

const Footer = () => {
  const fontSize = useResponsiveFontSize();

  return (
    <footer className="bg-navy text-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className={`font-serif ${fontSize.h4} font-bold mb-4`}>Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gold" />
                <a href={`mailto:${contactEmail}`} className="hover:text-gold transition-colors">
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gold" />
                <a href={`tel:${contactPhone.replace(/\D/g, '')}`} className="hover:text-gold transition-colors">
                  {contactPhone}
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gold" />
                <span>{contactAddress}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`font-serif ${fontSize.h4} font-bold mb-4`}>Acessos Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-gold transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gold transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-gold transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`font-serif ${fontSize.h4} font-bold mb-4`}>Legal</h3>
            <ul className="space-y-2">
              <li>
                <PrivacyTermsModal
                  title="Política de Privacidade"
                  content={privacyPolicy}
                  trigger={
                    <button className="hover:text-gold transition-colors">
                      Política de Privacidade
                    </button>
                  }
                />
              </li>
              <li>
                <PrivacyTermsModal
                  title="Termos de Uso"
                  content={termsOfUse}
                  trigger={
                    <button className="hover:text-gold transition-colors">
                      Termos de Uso
                    </button>
                  }
                />
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`font-serif ${fontSize.h4} font-bold mb-4`}>Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className={`${fontSize.small} text-gray-400`}>
            © {new Date().getFullYear()} Pinheiro & Guimarães. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
