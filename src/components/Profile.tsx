import React from "react";

const users = [
  {
    name: "Jakub Dąbrowski",
    imageUrl: "https://i.imgur.com/T3bIcAR.png",
    imageSize: 190,
    description:
      "Lider projektu, mistrz gitary, dobry bit daj, koneser poprawnie napisanego kodu, od dwóch miesięcy nie płaci swoim pracownikom.",
  },
  {
    name: "Oskar Baranowski",
    imageUrl: "https://i.imgur.com/T3bIcAR.png",
    imageSize: 190,
    description:
      'Pan i władzca bazy danych,potrafi podłączyć SQL jak mało kto, żyje w przekonaniu "Jeśli coś nie działa, trzeba to wyrzucić z bazy danych".',
  },
  {
    name: "Karol Pawłowski",
    imageUrl: "https://i.imgur.com/YXQ57rv.png",
    imageSize: 200,
    description: "kekw enjoyer, niby pomaga ale to typowy leecher.",
  },
];

export default function Profiles() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "70px",
        marginBottom: "1px",
      }}>
      {users.map((user, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "50px",
          }}>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={`Profile picture of ${user.name}`}
            style={{
              width: user.imageSize,
              height: user.imageSize,
              borderRadius: `${user.imageSize / 2}px`,
              marginRight: "20px",
            }}
          />
          <div>
            <h1
              style={{
                marginTop: "10px",
                fontWeight: "bold",
                color: "white",
                fontSize: "40px",
              }}>
              {user.name}
            </h1>
            <p style={{ color: "white", marginRight: "50px" }}>
              {user.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
