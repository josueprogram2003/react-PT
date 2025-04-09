import { useEffect, useState } from "react";
import { pagesAll } from "../services/service";
import { Card } from "./ui/Card";
import { ButtonOutline } from "./ui/Button";

export default function Pages() {
  const [pages, setPages] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getDataAll();
  }, []);

  if (error) return <div>{error}</div>;

  async function getDataAll() {
    try {
      const response = await pagesAll();
      setPages(response);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }

  return (
    <div className="relative w-full pb-5">
      <h1 className="text-slate-800 text-4xl text-center mb-8 font-bold">
        Páginas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pages.map((page) => (
          <PagesCard key={page.id} pages={page} isLoading={true} />
        ))}
      </div>
    </div>
  );
}

const stripHtml = (html) => {
  return html.replace(/<\/?[^>]+(>|$)/g, "").trim();
};

function PagesCard({ pages }) {
  const excerpt = pages.excerpt?.rendered
    ? stripHtml(pages.excerpt.rendered)
    : "";
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = pages.content.rendered;
  const firstImage = tempContainer.querySelector("img");
  const imageUrl = firstImage ? firstImage.src : null;
  return (
    <Card>
      <div className="relative h-48 w-full">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={pages.title?.rendered || "pages"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-slate-800">
          {pages.title?.rendered || "Service Title"}
        </h3>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <ButtonOutline
          onClick={() => {
            window.location.href = pages.link;
          }}
          className="w-full bg-rose-600 cursor-pointer hover:bg-rose-700"
        >
          Leer más
        </ButtonOutline>
      </div>
    </Card>
  );
}
