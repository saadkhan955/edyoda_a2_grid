import React from "react";
import './Cards.css';

const Cards = ({ item }) => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row justify-content-center">
          {item.map((Val) => {
            const trimmedTitle = Val.title.length > 50 ? Val.title.substring(0, 50) + "..." : Val.title;
            const trimmedDesc = Val.desc.length > 200 ? Val.desc.substring(0, 200) + "..." : Val.desc;

            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6 border-0 cards"
                key={Val.id}
              >
                <div className="card-img-top text-center">
                  <img src={Val.img} alt={Val.title} className="photo w-100 h-100 object-fit-fill" />
                </div>
                <div className="card-body">
                  <div className="card-title my-2">
                    {trimmedTitle}
                  </div>
                  <div className="author-name my-1 text-primary">{Val.name} <span className="dated text-black"> | {Val.dated}</span></div>
                  <div className="card-text">{trimmedDesc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
