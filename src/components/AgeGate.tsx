import { Shield } from "lucide-react";

interface AgeGateProps {
  onAccept: () => void;
  onReject: () => void;
}

const AgeGate = ({ onAccept, onReject }: AgeGateProps) => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center p-4 z-50">
      <div className="anime-card rounded-xl max-w-lg w-full p-8 md:p-10 text-center glow-border">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center border border-primary/30">
            <Shield className="w-8 h-8 text-primary" />
          </div>
        </div>

        <h1 className="font-display text-3xl font-bold text-foreground mb-2">
          Advertencia
        </h1>
        <h2 className="text-xl font-semibold text-gradient mb-4">
          Contenido para Adultos
        </h2>

        <p className="text-muted-foreground mb-2 leading-relaxed">
          Este sitio web contiene material exclusivamente para personas mayores de 18 años. Al continuar, confirmas que tienes la edad legal para acceder a este contenido en tu jurisdicción.
        </p>
        <p className="text-muted-foreground/60 text-sm mb-8">
          Si no cumples con este requisito, por favor abandona este sitio.
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={onReject}
            className="px-6 py-2.5 rounded-lg border border-border text-muted-foreground hover:bg-muted transition-colors font-medium"
          >
            Soy menor de 18
          </button>
          <button
            onClick={onAccept}
            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold shadow-lg"
          >
            Tengo 18 o más
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeGate;
