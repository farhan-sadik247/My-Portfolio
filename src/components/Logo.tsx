import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="FS" transform="translate(21, 28) scale(1.4)">

        <path
          fill="currentColor"
          d="M4.523,23.758V0h14.712v4.021H9.319v5.625h9.916v4.016H9.319v10.096H4.523z"
        />

        <path
          fill="currentColor"
          transform="translate(18, 0) scale(1.8)"
          d="M4.742 18.359c1.164 0 2.053-.273 2.666-.82.616-.546.923-1.274.923-2.182 0-.616-.142-1.109-.426-1.48-.283-.374-.756-.696-1.416-.965l-1.275-.484c-.905-.34-1.571-.74-2-1.2-.426-.463-.64-1.07-.64-1.82 0-.903.354-1.629 1.062-2.18.711-.552 1.662-.828 2.852-.828.758 0 1.42.108 1.987.324.567.216 1.073.523 1.519.92l-1.081 2.818c-.826-.682-1.658-1.023-2.493-1.023-.505 0-.898.111-1.18.334-.283.223-.424.524-.424.904 0 .371.156.686.468.944.311.26.79.484 1.436.674l1.196.35c.903.26 1.56.63 1.971 1.108.414.48.62 1.108.62 1.884 0 1.023-.358 1.81-1.072 2.363-.712.554-1.66.83-2.846.83-1.002 0-1.904-.232-2.704-.694-.8-.462-1.418-1.106-1.854-1.93l1.12-2.625c.416.627.883 1.082 1.4 1.366.516.284 1.065.426 1.646.426z"
        />
        </g>

        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;
