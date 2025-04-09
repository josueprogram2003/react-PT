import { ButtonPrimary } from "./ui/Button";

export default function Banner() {
  const bannerData = {
    title: "Soluciones digitales para tu negocio",
    description:
      "Transformamos ideas en experiencias digitales excepcionales que impulsan el crecimiento de tu empresa",
    buttonText: "Conoce más",
    buttonUrl: "#servicios",
  };

  return (
    <section className="relative w-full">
      <div className="relative h-[500px] md:h-[600px] w-full">
        <img
          src="/wall.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-50 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {bannerData.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              {bannerData.description}
            </p>
            <ButtonPrimary className="bg-primary">
              <a href={bannerData.buttonUrl}>{bannerData.buttonText}</a>
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  );
}
