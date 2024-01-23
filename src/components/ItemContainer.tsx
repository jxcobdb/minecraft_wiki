import React from "react";

interface Props {
  children: React.ReactNode;
}

const ItemContainer: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="flex items-center justify-center shadow-xl transition-transform transform hover:scale-105"
      style={{
        backgroundImage: "url(/assets/GridSlot.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        justifyContent: "center",
        padding: "10px",
        borderRadius: "10px",
        width: "300px",
        height: "200px",
      }}>
      {children}
    </div>
  );
};

export default ItemContainer;
