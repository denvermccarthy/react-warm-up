import React from 'react';
import cats from '../../cats';
import ImageItem from '../ImageItem/ImageItem';

import './Main.css';

export default function Main() {
  return (
    <div className="main">
      {cats.map((cat) => (
        <ImageItem key={cat.name} name={cat.name} url={cat.url} type={cat.type} />
      ))}
    </div>
  );
}
