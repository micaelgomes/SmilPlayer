import React from 'react';

const Canva = ({ typeMedia, srcMedia, altMedia, duration }) => {
  var element;

  switch (typeMedia) {
    case 'img':
      element = <img className={`image-grid`} style={{animation: duration ? `hiddenAfter 0s ease-in ${duration} forwards` : "none"}} src={'assets/' + srcMedia} alt={altMedia} />;
      break;
    case 'video':
      element = <video className="video-grid" controls><source src={'assets/' + srcMedia} type="video/mp4" /></video>;
      break;
    default:
      element = <p>Empty!</p>;
  }

  return (
    <>
      <div className="col-4 p-0 m-0" style={{ border: '3px solid #FB5681'}}>
        {element}
      </div>
    </>
  )
}

export default Canva