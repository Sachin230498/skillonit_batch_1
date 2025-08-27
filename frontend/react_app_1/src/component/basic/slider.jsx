import React, { useRef, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const reviewers = [
  {
    name: "Richa Sharma",
    role: "Front-End Dev, Malgo",
    image:
      "https://storage.googleapis.com/a1aa/image/7f7ac0d7-c3a8-4372-ce4b-3a83bee690a8.jpg",
    bg: "bg-white",
  },
  {
    name: "Avani Kumar",
    role: "UI/UX Designer, Malgo",
    image:
      "https://storage.googleapis.com/a1aa/image/5d2eba24-f229-48d3-8b8b-601cf7b65061.jpg",
    bg: "bg-[#E0F3FF]",
  },
  {
    name: "Shahrukh K.",
    role: "UI/UX Designer, Malgo",
    image:
      "https://storage.googleapis.com/a1aa/image/f33e9e8c-180e-44f8-da6c-b59e5193ecfc.jpg",
    bg: "bg-[#FFF6E6]",
  },
  {
    name: "Amit Kumar",
    role: "UI/UX Designer, Malgo",
    image:
      "https://storage.googleapis.com/a1aa/image/e3a17ee4-5ce9-497a-5694-21449328e867.jpg",
    bg: "bg-[#E0F3FF]",
  },
  {
    name: "Datta Thakre",
    role: "Blockchain, Malgo",
    image:
      "https://storage.googleapis.com/a1aa/image/51bf86dc-ef00-41e7-f65c-d9c82aa80a5f.jpg",
    bg: "bg-[#E0F3FF]",
  },
  {
    name: "Akash P.",
    role: "Digital Marketer, Malgo",
    image:
      "https://storage.googleapis.com/a1aa/image/d8fe3c02-83f6-4aa3-963b-2028c77860e5.jpg",
    bg: "bg-[#E0F3FF]",
  },
];

const ReviewCarousel = () => {
  const trackRef = useRef(null);
  const speedRef = useRef(0.5); // Normal speed
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    let animationFrameId;

    const animate = () => {
      posRef.current -= speedRef.current;
      if (track) {
        track.style.transform = `translateX(${posRef.current}px)`;

        if (Math.abs(posRef.current) >= track.scrollWidth / 2) {
          posRef.current = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseEnter = () => {
      speedRef.current = 0.15;
    };

    const handleMouseLeave = () => {
      speedRef.current = 0.5;
    };

    const container = track.parentElement;
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const duplicatedReviewers = [...reviewers, ...reviewers];

  return (
    <div className="overflow-hidden w-full py-4 mt-4">
      <div
        className="flex gap-4 w-max will-change-transform"
        ref={trackRef}
        style={{ transition: "transform 0.1s linear" }}
      >
        {duplicatedReviewers.map((reviewer, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-4 p-3 rounded-xl min-w-[220px] max-w-[300px] w-[260px] flex-shrink-0 ${reviewer.bg} shadow-sm`}
          >
            <img
              src={reviewer.image}
              alt={reviewer.name}
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div className="text-sm">
              <div className="font-semibold text-[#0071E3]">
                {reviewer.name}
              </div>
              <div className="text-gray-500 text-xs">{reviewer.role}</div>
              <div className="flex items-center space-x-1 mt-1">
                <FaHeart className="text-red-600 text-sm" />
                <span className="font-semibold text-sm">4.5/5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
