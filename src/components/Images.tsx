
import { Image } from "lucide-react";

export const HeroImage = () => (
  <div className="absolute inset-0 -z-10 opacity-20">
    <img
      src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop"
      alt="Conceito de justiça e advocacia"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-navy/80" />
  </div>
);

export const ServiceImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="mb-6 relative h-48 overflow-hidden rounded-lg">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>
);
