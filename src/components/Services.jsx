import { useEffect, useState } from "react";
import { Card } from "./ui/Card";
import { ButtonOutline } from "./ui/Button";
import { servicesAll } from "../services/service";

export default function Services() {
  const [services, setServices] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await servicesAll();
        setServices(response);
      } catch (error) {
        setError("Error al obtener los servicios.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="servicios" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones digitales completas para ayudar a tu negocio a
            destacar en el mundo digital
          </p>
        </div>
        {error && <div className="text-center text-red-500 mb-8">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} isLoading={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple regex to remove HTML tags
const stripHtml = (html) => {
  return html.replace(/<\/?[^>]+(>|$)/g, "").trim();
};

function ServiceCard({ service }) {
  const excerpt = service.excerpt?.rendered
    ? stripHtml(service.excerpt.rendered)
    : "";
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = service.content.rendered;
  const firstImage = tempContainer.querySelector("img");
  const imageUrl = firstImage ? firstImage.src : null;

  return (
    <Card>
      <div className="relative h-48 w-full">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={service.title?.rendered || "Service"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 relative h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-slate-800">
            {service.title?.rendered || "Service Title"}
          </h3>
          <p className="text-gray-700 mb-4">{excerpt}</p>
        </div>
        <ButtonOutline
          onClick={() => {
            window.location.href = service.link;
          }}
          className="w-full bg-rose-600 cursor-pointer hover:bg-rose-700 "
        >
          Leer más
        </ButtonOutline>
      </div>
    </Card>
  );
}
