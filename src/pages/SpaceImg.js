import React, { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=I7pPR36Gyj3NHDJzeMjnRIkwZEac0AaNrMWHbzN6`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <>
      <h1 className="space-text">Astronomy picture of the day</h1>
      <div style={{ backgroundColor: "#000023" }} className="nasa-photo">
        {photoData.media_type === "image" ? (
          <img src={photoData.url} alt={photoData.title} className="photo" />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        <div>
          <h2 className="space-text">{photoData.title}</h2>
          <p style={{ color: "#bbb" }} className="date">
            {photoData.date}
          </p>
          <p className="explanation">{photoData.explanation}</p>
        </div>
      </div>
    </>
  );
}
