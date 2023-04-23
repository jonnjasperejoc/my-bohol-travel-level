import React, { useState } from "react";

const MapTooltip = ({ visible, position, content }) => {
  if (!visible) return null;

  const tooltipStyle = {
    top: position.y,
    left: position.x,
  };

  return <span style={tooltipStyle} className="map-tooltip">{content}</span>;
};

const PhilippinesMapJSX = ({
  setSelectedProvince,
  setMenuPosition,
  setMenuVisible,
  setSelectedProvinceLayer,
  totalLevel,
}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipContent, setTooltipContent] = useState("");

  const handleProvinceClick = (event) => {
    const offsetY =
      event.target.getBoundingClientRect().y + 210 - window.innerHeight < 0
        ? 0
        : event.target.getBoundingClientRect().y + 210 - window.innerHeight;
    const offsetX =
      event.target.getBoundingClientRect().x + 200 - window.innerWidth < 0
        ? 0
        : event.target.getBoundingClientRect().x + 200 - window.innerWidth;
    setSelectedProvince(event.target.getAttribute("id"));
    setSelectedProvinceLayer(event.target);
    setMenuPosition({
      x: event.target.getBoundingClientRect().x + window.pageXOffset - offsetX,
      y: event.target.getBoundingClientRect().y + window.pageYOffset - offsetY,
    });
    setMenuVisible(true);
  };

  const handleMouseEnter = (event) => {
    event.target.setAttribute("fill", "#CCCCCC"); 
    const targetElement = event.target.parentNode;
    const position = targetElement.getBoundingClientRect();
    setTooltipPosition({
      x: position.x + window.pageXOffset,
      y: position.y + window.pageYOffset,
    });
    const tooltipContent = targetElement.getAttribute("id").replace(/_/g, " ");
    setTooltipContent(tooltipContent);
    setTooltipVisible(true);
  };

  const handleMouseLeave = (event) => {
    event.target.setAttribute("fill", "#fff");
    setTooltipVisible(false);
  };

  const handleOutsideClick = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <MapTooltip
        visible={tooltipVisible}
        position={tooltipPosition}
        content={tooltipContent}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg574"
        version="1.1"
        viewBox="0 0 840 1221"
        xmlSpace="preserve"
      >
        <g id="Background">
          <path
            id="rect11351"
            fill="#9dc3fb"
            fillOpacity="1"
            strokeWidth="0.75"
            d="M-1.031 1.031H841.288V1223.7849999999999H-1.031z"
            onClick={(event) => handleOutsideClick(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Talibon"
          fill="#fff"
          transform="translate(480 150)"
        >
          <path
            id="Talibon"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 18 245 L 23 326 L 43 338 L 117 298 L 117 269 L 88 243 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Bien_Unido"
          fill="#fff"
          transform="translate(577 172)"
        >
          <path
            id="Bien Unido"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 20 247 L 20 276 L 59 276 L 60 244 L 39 227 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Trinidad"
          fill="#fff"
          transform="translate(491 210)"
        >
          <path
            id="Trinidad"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 108 237 L 32 278 L 160 279 L 155 250 L 145 238 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Getafe"
          fill="#fff"
          transform="translate(350 206)"
        >
          <path
            id="Getafe"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 91 193 L 80 230 L 152 249 L 148 189 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Buenavista"
          fill="#fff"
          transform="translate(350 206)"
        >
          <path
            id="Buenavista"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 45 259 L 80 230 L 152 249 L 156 273 L 146 303 L 93 297 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Danao"
          fill="#fff"
          transform="translate(350 206)"
        >
          <path
            id="Danao"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 176 281 L 156 273 L 146 303 L 93 297 L 90 328 L 104 360 L 139 375 L 200 329 L 175 312 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="San Miguel"
          fill="#fff"
          transform="translate(487 192)"
        >
          <path
            id="San Miguel"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 39 296 L 38 326 L 88 360 L 132 361 L 160 328 L 164 297 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Ubay"
          fill="#fff"
          transform="translate(570 222)"
        >
          <path
            id="Ubay"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 72 237 L 76 267 L 76 292 L 48 331 L 103 331 L 175 302 L 173 269 L 152 240 L 109 241 L 66 226 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Pres. Carlos P. Garcia"
          fill="#fff"
          transform="translate(680 120)"
        >
          <path
            id="Pres. Carlos P. Garcia"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 56 301 L 59 321 L 56 336 L 56 349 L 62 342 L 68 333 L 69 316 L 84 324 L 95 327 L 83 313 L 83 306 L 90 300 L 92 283 L 81 290 L 70 300 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Inabanga"
          fill="#fff"
          transform="translate(285 198)"
        >
          <path
            id="Inabanga"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 116 263 L 80 277 L 72 323 L 110 348 L 170 367 L 162 330 L 160 292 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Dagohoy"
          fill="#fff"
          transform="translate(405 363)"
        >
          <path
            id="Dagohoy"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 83 217 L 110 228 L 114 252 L 163 247 L 194 190 L 170 182 L 141 169 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Pilar"
          fill="#fff"
          transform="translate(517 298)"
        >
          <path
            id="Pilar"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 81 255 L 52 311 L 32 312 L 61 349 L 99 350 L 123 311 L 101 255 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Alicia"
          fill="#fff"
          transform="translate(517 298)"
        >
          <path
            id="Alicia"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 191 241 L 179 304 L 156 300 L 123 311 L 101 255 L 148 253 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Mabini"
          fill="#fff"
          transform="translate(517 298)"
        >
          <path
            id="Mabini"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 191 241 L 179 304 L 211 308 L 235 292 L 235 261 L 213 261 L 218 230 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Candijay"
          fill="#fff"
          transform="translate(517 298)"
        >
          <path
            id="Candijay"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 156 299 L 179 304 L 211 308 L 240 338 L 224 355 L 172 354 L 113 328 L 126 307 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Anda"
          fill="#fff"
          transform="translate(517 298)"
        >
          <path
            id="Anda"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 250 405 L 269 381 L 266 342 L 240 338 L 224 355 L 212 410 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Guindulman"
          fill="#fff"
          transform="translate(517 298)"
        >
          <path
            id="Guindulman"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 162 408 L 92 350 L 113 328 L 175 350 L 224 355 L 212 410 L 192 410 L 177 392 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Duero"
          fill="#fff"
          transform="translate(517 298)"
        >
          <path
            id="Duero"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 162 408 L 92 350 L 80 390 L 114 434 L 141 435 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Sierra Bullones"
          fill="#fff"
          transform="translate(50 297)"
        >
          <path
            id="Sierra Bullones"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 529 350 L 559 351 L 547 390 L 513 402 L 460 394 L 468 316 L 502 313 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Carmen"
          fill="#fff"
          transform="translate(50 297)"
        >
          <path
            id="Carmen"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 430 278 L 405 268 L 371 333 L 411 401 L 460 394 L 468 316 L 465 292 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Sagbayan"
          fill="#fff"
          transform="translate(50 297)"
        >
          <path
            id="Sagbayan"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 345 249 L 405 268 L 371 333 L 349 335 L 330 317 L 325 270 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Clarin"
          fill="#fff"
          transform="translate(50 297)"
        >
          <path
            id="Clarin"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 272 243 L 292 273 L 276 291 L 307 296 L 330 317 L 325 270 L 346 249 L 308 219 L 294 234 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Tubigon"
          fill="#fff"
          transform="translate(50 297)"
        >
          <path
            id="Tubigon"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 272 243 L 292 273 L 276 291 L 246 297 L 226 310 L 200 267 L 250 243 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Calape"
          fill="#fff"
          transform="translate(50 297)"
        >
          <path
            id="Calape"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 139 306 L 176 345 L 226 310 L 200 267 L 172 280 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="San Isidro"
          fill="#fff"
          transform="translate(50 297)"
        >
          <path
            id="San Isidro"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 228 386 L 176 345 L 226 310 L 247 294 L 276 291 L 265 342 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Catigbian"
          fill="#fff"
          transform="translate(68 297)"
        >
          <path
            id="Catigbian"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 276 366 L 224 370 L 242 334 L 258 291 L 290 290 L 312 317 L 332 335 L 311 370 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Batuan"
          fill="#fff"
          transform="translate(68 297)"
        >
          <path
            id="Batuan"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 302 398 L 396 401 L 353 333 L 332 335 L 311 370 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Bilar"
          fill="#fff"
          transform="translate(68 297)"
        >
          <path
            id="Bilar"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 302 398 L 396 400 L 345 463 L 312 453 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Dimiao"
          fill="#fff"
          transform="translate(68 297)"
        >
          <path
            id="Dimiao"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 395 400 L 345 463 L 380 519 L 414 517 L 424 459 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Valencia"
          fill="#fff"
          transform="translate(68 297)"
        >
          <path
            id="Valencia"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 442 394 L 464 453 L 456 519 L 414 517 L 424 459 L 396 401 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Garcia Hernandez"
          fill="#fff"
          transform="translate(68 297)"
        >
          <path
            id="Garcia Hernandez"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 442 394 L 464 453 L 456 519 L 496 514 L 540 503 L 504 437 L 494 402 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Jagna"
          fill="#fff"
          transform="translate(68 297)"
        >
          <path
            id="Jagna"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 590 436 L 588 469 L 568 475 L 555 500 L 540 503 L 504 437 L 494 402 L 530 390 L 562 433 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Loon"
          fill="#fff"
          transform="translate(95 453)"
        >
          <path
            id="Loon"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 94 150 L 69 185 L 54 215 L 50 244 L 54 273 L 104 228 L 131 190 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Antiquera"
          fill="#fff"
          transform="translate(95 453)"
        >
          <path
            id="Antiquera"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 183 230 L 158 261 L 137 260 L 104 228 L 131 190 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Balilihan"
          fill="#fff"
          transform="translate(95 453)"
        >
          <path
            id="Balilihan"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 183 230 L 158 261 L 200 292 L 231 292 L 275 243 L 284 214 L 243 209 L 198 212 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Sevilla"
          fill="#fff"
          transform="translate(95 453)"
        >
          <path
            id="Sevilla"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 288 279 L 296 300 L 249 312 L 231 292 L 275 243 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Loboc"
          fill="#fff"
          transform="translate(95 453)"
        >
          <path
            id="Loboc"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 318 307 L 296 300 L 249 312 L 228 329 L 248 346 L 297 347 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Lila"
          fill="#fff"
          transform="translate(95 453)"
        >
          <path
            id="Lila"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 298 370 L 322 371 L 367 362 L 318 307 L 297 347 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Loay"
          fill="#fff"
          transform="translate(95 453)"
        >
          <path
            id="Loay"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 303 370 L 226 362 L 228 328 L 252 346 L 297 347 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Alburquerque"
          fill="#fff"
          transform="translate(95 453)"
        >
          <path
            id="Alburquerque"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 226 362 L 228 328 L 194 323 L 192 357 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Sikatuna"
          fill="#fff"
          transform="translate(95 453)"
        >
          <path
            id="Sikatuna"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 251 311 L 228 328 L 194 323 L 199 292 L 233 290 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Corella"
          fill="#fff"
          transform="translate(95 453)"
        >
          <path
            id="Corella"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 136 314 L 165 326 L 194 323 L 199 292 L 176 274 L 140 297 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Baclayon"
          fill="#fff"
          transform="translate(95 453)"
        >
          <path
            id="Baclayon"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 136 314 L 165 326 L 194 323 L 197 358 L 165 352 L 136 349 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Tagbilaran City"
          fill="#fff"
          transform="translate(95 453)"
        >
          <path
            id="Tagbilaran City"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 136 314 L 140 297 L 108 300 L 101 327 L 112 343 L 136 349 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Cortes"
          fill="#fff"
          transform="translate(95 453)"
        >
          <path
            id="Cortes"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 175 274 L 140 297 L 108 300 L 107 287 L 135 258 L 158 259 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Maribojoc"
          fill="#fff"
          transform="translate(-60 440)"
        >
          <path
            id="Maribojoc"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 220 281 L 240 280 L 262 300 L 290 271 L 261 239 L 209 286 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Dauis"
          fill="#fff"
          transform="translate(30 448)"
        >
          <path
            id="Dauis"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 168 348 L 140 359 L 120 378 L 155 411 L 182 385 L 198 358 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        <g
          className="province-layer"
          id="Panglao"
          fill="#fff"
          transform="translate(30 448)"
        >
          <path
            id="Panglao"
            fill="#fff"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M 91 404 L 102 384 L 124 375 L 156 410 L 138 430 L 116 442 L 99 436 L 91 421 L 77 418 Z"
            opacity="1"
            vectorEffect="non-scaling-stroke"
            onClick={(event) => handleProvinceClick(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={(event) => handleMouseLeave(event)}
          ></path>
        </g>
        
       
       
       
       
        <g
          id="g1953"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeOpacity="1"
          paintOrder="markers fill stroke"
          transform="matrix(1.63481 0 0 1.6089 -381.296 -140.998)"
        >
          <rect
            id="rect385"
            width="176.299"
            height="132.998"
            x="544.363"
            y="159.803"
            fill="#fff"
            stroke="#000"
            strokeWidth="1.5"
            display="inline"
            ry="6.754"
          ></rect>
          <rect
            id="rect1963"
            width="25.835"
            height="17.926"
            x="530.263"
            y="145.262"
            fill="#e84c3d"
            fillOpacity="1"
            stroke="#000"
            strokeWidth="0.525"
            ry="4.118"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          ></rect>
          <rect
            id="rect1963-1"
            width="25.835"
            height="17.926"
            x="530.263"
            y="175.262"
            fill="#d58337"
            fillOpacity="1"
            stroke="#000"
            strokeWidth="0.525"
            ry="4.118"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          ></rect>
          <rect
            id="rect1963-1-2"
            width="25.835"
            height="17.926"
            x="530.263"
            y="205.262"
            fill="#f3c218"
            fillOpacity="1"
            stroke="#000"
            strokeWidth="0.525"
            ry="4.118"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          ></rect>
          <rect
            id="rect1963-3"
            width="25.835"
            height="17.926"
            x="530.676"
            y="235.262"
            fill="#30cc70"
            fillOpacity="1"
            stroke="#000"
            strokeWidth="0.525"
            ry="4.118"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          ></rect>
          <rect
            id="rect1963-1-8"
            width="25.835"
            height="17.926"
            x="530.676"
            y="265.263"
            fill="#3598db"
            fillOpacity="1"
            stroke="#000"
            strokeWidth="0.525"
            ry="4.118"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          ></rect>
          <rect
            id="rect1963-1-2-1"
            width="25.835"
            height="17.926"
            x="530.676"
            y="295.263"
            fill="#fff"
            stroke="#000"
            strokeWidth="0.525"
            ry="4.118"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
          ></rect>
          <text
            id="text2045-3-8"
            x="723.828"
            y="189.117"
            fill="#fff"
            stroke="#000"
            strokeWidth="0.525"
            fontSize="16"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan2047-4-6"
              x="723.828"
              y="189.117"
              fill="#000"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="none"
              strokeWidth="0.75"
              fontSize="16"
            >
              Level: 4
            </tspan>
          </text>
          <text
            id="text2045-3-8-4"
            x="723.828"
            y="159.117"
            fill="#fff"
            stroke="#000"
            strokeWidth="0.525"
            fontSize="16"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan2047-4-6-1"
              x="723.828"
              y="159.117"
              fill="#000"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="none"
              strokeWidth="0.75"
              fontSize="16"
            >
              Level: 5
            </tspan>
          </text>
          <text
            id="text2045-3-7"
            x="723.828"
            y="219.117"
            fill="#fff"
            stroke="#000"
            strokeWidth="0.525"
            fontSize="16"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan2047-4-1"
              x="723.828"
              y="219.117"
              fill="#000"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="none"
              strokeWidth="0.75"
              fontSize="16"
            >
              Level: 3
            </tspan>
          </text>
          <text
            id="text2045-3-84"
            x="723.828"
            y="249.117"
            fill="#fff"
            stroke="#000"
            strokeWidth="0.525"
            fontSize="16"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan2047-4-9"
              x="723.828"
              y="249.117"
              fill="#000"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="none"
              strokeWidth="0.75"
              fontSize="16"
            >
              Level: 2
            </tspan>
          </text>
          <text
            id="text2045-3-73"
            x="723.828"
            y="279.117"
            fill="#fff"
            stroke="#000"
            strokeWidth="0.525"
            fontSize="16"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan2047-4-10"
              x="723.828"
              y="279.117"
              fill="#000"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="none"
              strokeWidth="0.75"
              fontSize="16"
            >
              Level: 1
            </tspan>
          </text>
          <text
            id="text2045-3-2"
            x="723.828"
            y="309.117"
            fill="#fff"
            stroke="#000"
            strokeWidth="0.525"
            fontSize="16"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan2047-4-3"
              x="723.828"
              y="309.117"
              fill="#000"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="none"
              strokeWidth="0.75"
              fontSize="16"
            >
              Level: 0
            </tspan>
          </text>
          <text
            id="text2045-5"
            x="569.215"
            y="189.117"
            fill="#fff"
            stroke="#000"
            strokeWidth="0.525"
            fontSize="16"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan2047-8"
              x="569.215"
              y="189.117"
              fill="#000"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="none"
              strokeWidth="0.75"
              fontSize="16"
            >
              Stayed there
            </tspan>
          </text>
          <text
            id="text2045-5-9"
            x="569.215"
            y="159.117"
            fill="#fff"
            stroke="#000"
            strokeWidth="0.525"
            fontSize="16"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan2047-8-2"
              x="569.215"
              y="159.117"
              fill="#000"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="none"
              strokeWidth="0.75"
              fontSize="16"
            >
              Lived there
            </tspan>
          </text>
          <text
            id="text2045-2"
            x="569.848"
            y="219.117"
            fill="#fff"
            stroke="#000"
            strokeWidth="0.525"
            fontSize="16"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan2047-9"
              x="569.848"
              y="219.117"
              fill="#000"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="none"
              strokeWidth="0.75"
              fontSize="16"
            >
              Visited there
            </tspan>
          </text>
          <text
            id="text2045-8"
            x="569.848"
            y="249.117"
            fill="#fff"
            stroke="#000"
            strokeWidth="0.525"
            fontSize="16"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan2047-2"
              x="569.848"
              y="249.117"
              fill="#000"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="none"
              strokeWidth="0.75"
              fontSize="16"
            >
              Alighted there
            </tspan>
          </text>
          <text
            id="text2045-0"
            x="568.828"
            y="279.117"
            fill="#fff"
            stroke="#000"
            strokeWidth="0.525"
            fontSize="16"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan2047-7"
              x="568.828"
              y="279.117"
              fill="#000"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="none"
              strokeWidth="0.75"
              fontSize="16"
            >
              Passed there
            </tspan>
          </text>
          <text
            id="text2045-4"
            x="568.828"
            y="309.117"
            fill="#fff"
            stroke="#000"
            strokeWidth="0.525"
            fontSize="16"
            transform="matrix(.6117 0 0 .62154 230.623 86.575)"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan2047-85"
              x="568.828"
              y="309.117"
              fill="#000"
              fillOpacity="1"
              stroke="none"
              strokeDasharray="none"
              strokeWidth="0.75"
              fontSize="16"
            >
              Never been there
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{ WebkitTextAlign: "center", textAlign: "center" }}
            id="text3282"
            x="637.208"
            y="147.041"
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeWidth="0.462"
            fontSize="20"
            textAnchor="middle"
            transform="scale(.99204 1.00802)"
          >
            <tspan
              id="tspan3280"
              style={{ WebkitTextAlign: "center", textAlign: "center" }}
              x="637.208"
              y="147.041"
              strokeWidth="0.462"
              textAnchor="middle"
            >
              Bohol Level {totalLevel}
            </tspan>
          </text>
        </g>
      </svg>
    </>
  );
};

export default PhilippinesMapJSX;
