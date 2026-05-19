import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import http from "../service/http";

export default function GalleryDetails() {
  // const images = [
  //   "/b12.png",
  //   "/g1.jpg",
  //   "/g2.jpg",
  //   "/g3.jpg",
  //   "/b12.png",
  //   "/g1.jpg",
  //   "/g2.jpg",
  //   "/g3.jpg",
  //   "/b12.png",
  //   "/g1.jpg",
  //   "/g2.jpg",
  //   "/g3.jpg",
  // ];

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id"); // ✅ get id from URL
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetails();
  }, [id]);

  const fetchDetails = async () => {
    setLoading(true);

    try {
      const res = await http.get(`/gallery/${id}`);
      const data = res.data;

      setEvent(data.event);
      setImages(data.images || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ LOADING STATE
  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }
  return (
    // <section className="bg-[#E7F9FF] min-h-screen py-10 px-4 md:px-10 pt-24 md:pt-40">
    //   <div className="max-w-7xl mx-auto">
    //     {/* BACK */}
    //     <button className="flex items-center gap-2 text-[#133C49] text-[12px] mb-4 hover:text-[#01D4FF] transition">
    //       <ArrowLeft size={16} />
    //       Back to Gallery
    //     </button>

    //     {/* TITLE */}
    //     <h1 className="text-[#133C49] text-[32px] md:text-[42px] font-semibold mb-8">
    //       Business World Event Introduction
    //     </h1>

    //     {/* IMAGE GRID */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    //       {images.map((img, i) => (
    //         <div key={i} className="rounded-[12px] overflow-hidden">
    //           <img
    //             src={img}
    //             className="w-full h-[180px] object-cover rounded-[12px]"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="bg-[#E7F9FF] min-h-screen py-10 px-4 md:px-10 pt-24 md:pt-40">
      <div className="max-w-7xl mx-auto">
        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#133C49] text-[12px] mb-4 hover:text-[#01D4FF] transition"
        >
          <ArrowLeft size={16} />
          Back to Gallery
        </button>

        {/* TITLE */}
        <h1 className="text-[#133C49] text-[32px] md:text-[42px] font-semibold mb-2">
          {event?.title}
        </h1>

        {/* DATE */}
        <p className="text-[#6b8b93] mb-8 text-sm">
          {new Date(event?.event_date).toDateString()}
        </p>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.length > 0 ? (
            images.map((img) => (
              <div key={img.id} className="rounded-[12px] overflow-hidden">
                <img
                  src={img.image}
                  className="w-full h-[180px] object-cover rounded-[12px]"
                />
              </div>
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
    </section>
  );
}
