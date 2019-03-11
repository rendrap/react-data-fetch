import React from 'react';
import Gif from './Gif';

const GifList = props => {
  const result = props.data;
  let gifs = result.map(gif =>
    <Gif
    url={gif.images.fixed_height.url}
    key={gif.id}
    />
  );


  return (
    <ul className='gif-list'>
      {gifs}
    </ul>
  );
};

export default GifList;
