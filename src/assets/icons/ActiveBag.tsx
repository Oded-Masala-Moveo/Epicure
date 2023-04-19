import React from "react";

export const ActiveBag: React.FC<{ quantity: number }> = ({ quantity }) => {
  const styleIcon = {
    color: "white",
    width: "12px",
    textAlign: "start",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.153 7H26.847L29 29H7L9.153 7Z"
          stroke="black"
          stroke-width="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.0469 10C13.0469 10 12.1209 18.098 18.4999 18C24.8799 17.9 23.9529 10 23.9529 10"
          stroke="black"
          stroke-width="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="8" cy="8" r="8" fill="black" />
        <svg>
          <rect width="30" height="30" fill="" />
          <foreignObject x="2" y="0" width="30" height="30">
            <div
              style={{
                color: "white",
                width: "12px",
                textAlign: "start",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {quantity}
            </div>
          </foreignObject>
        </svg>
      </svg>
    </>
  );
};