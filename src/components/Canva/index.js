import React from 'react';

const renderElement = (nameMedia, srcMedia, altMedia, duration, kids) => {
  switch (nameMedia) {
    case 'img':
      return (
        <div className="col-4 p-0 m-0">
          <img
            className={`image-grid`}
            style={{ animation: duration ? `hiddenAfter 0s ease-in ${duration} forwards` : "none", border: '3px solid #FF5681' }}
            src={'assets/' + srcMedia}
            alt={altMedia} />
        </div>
      );

    case 'video':
      return (
        <div className="col-4 p-0 m-0">
          <video
            className="video-grid"
            style={{ animation: duration ? `hiddenAfter 0s ease-in ${duration} forwards` : "none", border: '3px solid #5681FF' }}
            autoPlay
          >
            <source src={'assets/' + srcMedia} type="video/mp4" />
          </video>
        </div>
      );

    case 'body':
    case 'seq':
      return (
        <div className="fluid-container">
          <div className="seq">
            {kids.map((media, i) => {
              console.log(media)
              return (
                <Canva
                  key={i}
                  nameMedia={media.name}
                  srcMedia={media.attributes.src}
                  altMedia={media.attributes.alt}
                  duration={media.attributes.dur}
                  kids={media.kids} />
              )
            })}
          </div>
        </div>
      );

    case 'par':
      return (
        <div className="fluid-container">
          <div className="row">
            {kids.reverse().map((media, i) => {
              // console.log(media)
              return (
                <Canva
                  key={i}
                  nameMedia={media.name}
                  srcMedia={media.attributes.src}
                  altMedia={media.attributes.alt}
                  duration={media.attributes.dur}
                  kids={media.kids} />
              )
            })}
          </div>
        </div>
      );

    case 'head':
      return (
        <div>
          {kids.map((media, i) => {
            console.log(media)
            return (
              <Canva
                key={i}
                nameMedia={media.name}
                srcMedia={media.attributes.src}
                altMedia={media.attributes.alt}
                duration={media.attributes.dur}
                kids={media.kids} />
            )
          })}
        </div>
      );

    case 'smil':
      return (
        <div>
          {kids.map((media, i) => {
            console.log(media)
            return (
              <Canva
                key={i}
                nameMedia={media.name}
                srcMedia={media.attributes.src}
                altMedia={media.attributes.alt}
                duration={media.attributes.dur}
                kids={media.kids} />
            )
          })}
        </div>
      );

    default:
      return (
        <p>not renderElement</p>
      );
  }
}

const Canva = ({ nameMedia, srcMedia, altMedia, duration, kids }) => {

  return (
    <>
      {renderElement(nameMedia, srcMedia, altMedia, duration, kids)}
    </>
  )
}

export default Canva