import React, { useState } from "react";
import estrella from '../assets/estrella-violeta.png'

const MagicBtn = ({ link, texto, color, claseAdicional }) => {
  const [sparkles, setSparkles] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false); // Bandera para controlar la animación

  const handleMouseOver = () => {
    if (isAnimating) return; // Evita que se reinicie la animación mientras está activa

    setIsAnimating(true); // Marca que la animación ha iniciado

    const newSparkles = Array.from({ length: 5 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 100 - 50, // Rango aleatorio horizontal
      y: Math.random() * 100 - 50, // Rango aleatorio vertical
    }));

    setSparkles(newSparkles);

    setTimeout(() => {
      setSparkles([]); // Limpia las estrellitas después de 1s
      setIsAnimating(false); // Permite nuevas animaciones
    }, 1000); // Duración total de la animación
  };

  return (
    <div className="magic-btn-container" onMouseOver={handleMouseOver}>
      <a
        href={link}
        className={`magic-btn-efecto magic-btn-${color} ${
          claseAdicional && claseAdicional
        }`}
      >
        {texto}
      </a>
      <div className="sparkles-container">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="sparkle"
            style={{
              left: `${50 + sparkle.x}%`,
              top: `${50 + sparkle.y}%`,
            }}
          >
            ✨ 
            {/* <img src={estrella} alt="estrellita_violeta" width={20}/> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagicBtn;
