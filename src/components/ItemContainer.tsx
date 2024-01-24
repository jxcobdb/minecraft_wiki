import React from "react";

interface Props {
  children: React.ReactNode;
}

const ItemContainer: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="flex items-center justify-center shadow-xl transition-transform transform hover:scale-125"
      style={{
        backgroundImage: "url(/assets/GridSlot.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        justifyContent: "center",
        width: "220px",
        height: "200px",
      }}>
      {children}
    </div>
  );
};

export default ItemContainer;
