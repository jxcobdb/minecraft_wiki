import React from "react";

interface Props {
  children: React.ReactNode;
  type?: "default" | "animated";
}

const ItemContainer: React.FC<Props> = ({ type = "default", children }) => {
  switch (type) {
    case "animated": {
      return (
        <button
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
        </button>
      );
    }
    default: {
      return (
        <button
          className="flex items-center justify-center shadow-xl"
          style={{
            backgroundImage: "url(/assets/GridSlot.svg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            justifyContent: "center",
            width: "320px",
            height: "300px",
          }}>
          {children}
        </button>
      );
    }
  }
};

export default ItemContainer;
