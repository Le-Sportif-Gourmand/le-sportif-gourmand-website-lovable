import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import partnerCtcpa from "@/assets/partner-ctcpa.png";
import partnerBpi from "@/assets/partner-bpi.png";
import partnerPepite from "@/assets/partner-pepite.png";

const PartnerCarousel = () => {
  const partners = [
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
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5">
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center hover:scale-105 transition-transform duration-300 p-4"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default PartnerCarousel;