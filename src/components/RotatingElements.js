import React from 'react';

const RotatingElements = () => {
  return (
    <div className="rotating-container">
      {/* Основной 3D куб */}
      <div className="cube-container">
        <div className="cube">
          <div className="face front">💻</div>
          <div className="face back">⚡</div>
          <div className="face right">🚀</div>
          <div className="face left">🎨</div>
          <div className="face top">⭐</div>
          <div className="face bottom">🔧</div>
        </div>
      </div>

      {/* Вращающиеся кольца */}
      <div className="ring-container">
        <div className="ring ring-1">
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
        </div>
        <div className="ring ring-2">
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
        </div>
        <div className="ring ring-3">
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
          <div className="ring-dot"></div>
        </div>
      </div>

      {/* Плавающие геометрические фигуры */}
      <div className="floating-shapes">
        <div className="shape triangle"></div>
        <div className="shape square"></div>
        <div className="shape circle"></div>
        <div className="shape hexagon"></div>
        <div className="shape diamond"></div>
      </div>

      {/* Спиральные элементы */}
      <div className="spiral-container">
        <div className="spiral spiral-1"></div>
        <div className="spiral spiral-2"></div>
        <div className="spiral spiral-3"></div>
      </div>
    </div>
  );
};

export default RotatingElements;

