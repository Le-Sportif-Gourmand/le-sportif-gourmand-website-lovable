import partnerCtcpa from "@/assets/partner-ctcpa.png";
import partnerBpi from "@/assets/partner-bpi.png";
import partnerPepite from "@/assets/partner-pepite.png";
import madeInFrance from "@/assets/made-in-france.png";

const PartnerCarousel = () => {
  const partners = [
    { name: "CTCPA", logo: partnerCtcpa, url: "https://www.ctcpa.org/" },
    { name: "BPI France", logo: partnerBpi, url: "https://www.bpifrance.fr/" },
    { name: "Pépite France", logo: partnerPepite, url: "https://www.pepite-france.fr/" },
    // Duplicate for seamless scrolling
    { name: "CTCPA", logo: partnerCtcpa, url: "https://www.ctcpa.org/" },
    { name: "BPI France", logo: partnerBpi, url: "https://www.bpifrance.fr/" },
    { name: "Pépite France", logo: partnerPepite, url: "https://www.pepite-france.fr/" },
    // Duplicate for seamless scrolling
    { name: "CTCPA", logo: partnerCtcpa, url: "https://www.ctcpa.org/" },
    { name: "BPI France", logo: partnerBpi, url: "https://www.bpifrance.fr/" },
    { name: "Pépite France", logo: partnerPepite, url: "https://www.pepite-france.fr/" },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Ils nous font confiance
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-48 mx-8 flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCarousel;