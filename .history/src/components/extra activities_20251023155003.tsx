import { useState } from "react";

// Example event images and descriptions
import event1a from '../assets/events/event1.jfif';
import event1b from '../assets/events/event2.jfif';
import event2a from '../assets/events/cyber2023.jpg';
import event3a from '../assets/events/cyber20232.jpg';
import event3b from '../assets/events/cyber2024.jpg';
import event3c from '../assets/events/cyber20242.jpg';

const events = [
  {
    images: [event1a, event1b],
    title: "Choose your destination event organized by GDSC ISSATSO",
    description: "Had the privilege of reuniting with my mentor Ghaith Mkhinini to introduce the world of hashtag SAP to ISSAT Sousse students during the ''Choose your destination'' event organized by GDSC ISSATSO. It was a great opportunity to share insights and inspire the next generation of tech enthusiasts! "
  },
  {
    images: [event2a,event3a],
    title: "Cyber Trace Club 2022-2023",
    description: "One of my best experiences was joining the Cyber Trace Club’s marketing team — working with amazing people, organizing events, and learning how impactful communication can be in the tech world."
  },
  {
    images: [event3b, event3c],
    title: "Cyber Trace Club 2023-2024",
    description: "Moving to leadership as the Marketing Team Leader at the Cyber Trace Club was one of my best experiences — driving innovative campaigns, boosting engagement, and helping grow a passionate community around cybersecurity."
  }
];

function EventModal({ event, onClose }: { event: { images: string[]; title: string; description: string }; onClose: () => void }) {
  const [imgIdx, setImgIdx] = useState(0);
  const total = event.images.length;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center max-w-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-blue-600 text-2xl font-bold"
          aria-label="Close"
        >×</button>
        {total > 1 && (
          <button
            onClick={() => setImgIdx((imgIdx - 1 + total) % total)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-2 rounded-full shadow hover:bg-blue-800 text-xl"
            aria-label="Previous"
          >&#8592;</button>
        )}
        <img
          src={event.images[imgIdx]}
          alt={event.title}
          className="w-full h-96 object-cover rounded-lg  shadow-xl mb-4"
        />
        {total > 1 && (
          <button
            onClick={() => setImgIdx((imgIdx + 1) % total)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-2 rounded-full shadow hover:bg-blue-800 text-xl"
            aria-label="Next"
          >&#8594;</button>
        )}
        <h3 className="text-2xl font-bold mb-2 text-gray-500 text-center">{event.title}</h3>
        <p className="text-gray-600 text-lg text-center">{event.description}</p>
        {total > 1 && (
          <div className="flex gap-2 mt-4">
            {event.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setImgIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === imgIdx ? 'bg-blue-600 scale-125' : 'bg-blue-200 scale-100'}`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ExtraActivities() {
  const [selected, setSelected] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (idx: number) => {
    setSelected(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-6">Gallery of Events & Clubs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer"
            onClick={() => openModal(idx)}
          >
            <img
              src={event.images[0]}
              alt={event.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg border-2  group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
              <h3 className="text-white text-lg font-semibold text-center">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && selected !== null && (
        <EventModal event={events[selected]} onClose={closeModal} />
      )}
    </div>
  );
}

export default ExtraActivities;
