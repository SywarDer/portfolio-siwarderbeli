import { useState } from "react";
import cert1 from '../assets/certifications/cert1.jpg';
import cert2 from '../assets/certifications/cert2.jpg';
import cert3 from '../assets/certifications/cert3.jpg';
import cert4 from '../assets/certifications/cert4.jpg';
import cert5 from '../assets/certifications/cert5.jpg';
import forage from '../assets/certifications/forage.jfif';
import linkedin from '../assets/certifications/linkedin.jfif';
import powerbi from '../assets/certifications/powerbi.jfif';
import udemy from '../assets/certifications/udemy.jfif';

const certificationImages = [cert1, cert2, cert3, cert4, cert5, forage, linkedin, powerbi, udemy];

function Certifications() {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const total = certificationImages.length;

  const getVisibleIndices = () => {
    if (total < 3) return [0, 1, 2].slice(0, total);
    const prev = (current - 1 + total) % total;
    const next = (current + 1) % total;
    return [prev, current, next];
  };

  const visibleIndices = getVisibleIndices();
  const openModal = (idx: number) => {
    setCurrent(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 py-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">My Certifications</h2>

      <div className="relative w-full flex items-center justify-center py-4">
        {/* Prev Button */}
        <button
          onClick={() => setCurrent((current - 1 + total) % total)}
          className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-full shadow hover:bg-blue-800 text-lg sm:text-xl z-10"
          aria-label="Previous"
        >&#8592;</button>

        <div className="flex items-center justify-center gap-4 sm:gap-8 overflow-x-auto w-full py-2">
          {visibleIndices.map((idx) => (
            <img
              key={idx}
              src={certificationImages[idx]}
              alt={`Certification ${idx + 1}`}
              onClick={() => openModal(idx)}
              className={`flex-shrink-0 object-contain rounded-lg border transition-all duration-500 cursor-pointer
                ${idx === current
                  ? 'scale-105 sm:scale-110 shadow-2xl border-blue-600 opacity-100 w-48 sm:w-96 h-32 sm:h-64 z-10'
                  : 'scale-90 opacity-40 border-gray-300 w-32 sm:w-60 h-20 sm:h-40 z-0'
                }`}
              style={{ boxShadow: idx === current ? '0 8px 32px rgba(37,99,235,0.2)' : undefined }}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrent((current + 1) % total)}
          className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-full shadow hover:bg-blue-800 text-lg sm:text-xl z-10"
          aria-label="Next"
        >&#8594;</button>
      </div>

      {/* Modal */}
    {modalOpen && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-start sm:items-center justify-center overflow-y-auto">
    <div className="relative bg-white rounded-lg shadow-2xl p-4 sm:p-6 flex flex-col items-center max-w-full sm:max-w-3xl mt-12 sm:mt-0 mb-12 sm:mb-0">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-500 hover:text-blue-600 text-2xl font-bold"
        aria-label="Close"
      >
        ×
      </button>
      <img
        src={certificationImages[current]}
        alt={`Certification ${current + 1}`}
        className="w-full max-w-full h-auto max-h-[80vh] object-contain rounded-lg border-2 shadow-xl"
      />
    </div>
  </div>
)}

    </div>
  );
}

export default Certifications;
