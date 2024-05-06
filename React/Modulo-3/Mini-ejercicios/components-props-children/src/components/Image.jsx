import React from 'react';

const Image = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

<Image src="ruta_de_la_imagen" alt="Texto alternativo" width="100" height="100" />

export default Image;