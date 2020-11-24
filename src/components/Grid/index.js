import React from 'react';
import { useLocation } from 'react-router-dom';
import { getAllInfos } from "./service"
import Canva from '../Canva'

const Grid = () => {
  const params = new URLSearchParams(useLocation().search);
  const code = params.get('code-area');
  const arrContentMedia = getAllInfos(code);

  return (
    <>
      <div className="m-0 grid-style">
        {arrContentMedia.map((media, i) => (
          <Canva
            key={i}
            nameMedia={media.name}
            srcMedia={media.attributes.src}
            altMedia={media.attributes.alt}
            duration={media.attributes.dur}
            kids={media.kids} />
        ))}
      </div>
    </>
  )
}

export default Grid