import React from "react";
import "./ProfileCards.css"; // External CSS

const profiles = [
  {
    name: "Richa Sharma",
    role: "Front-End Dev, Malgo",
    rating: "4.5/5",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Avani Kumar",
    role: "UI/UX Designer, Malgo",
    rating: "4.5/5",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const ProfileCards = () => {
  return (
    <div className="container">
      {profiles.map((profile, index) => (
        <div className="card" key={index}>
          <img src={profile.image} alt={profile.name} />
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
          <div className="rating">
            <span>❤️</span> <span>{profile.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCards;
