import React from "react";

function JournalItem(props) {
  return (
    <>
    <div className="journal-item flex flex-row gap-4 my-8">
      <div className="img-container w-[125px] h-[168px] bg-amber-500 overflow-clip flex-shrink-0 rounded-sm">
        <img
          className="image-cover h-full w-full object-cover"
          src={props.imageUrl || "src/mount-fuji.png"}
          alt={props.title}
        />
      </div>
      <div>
        <div className="flex flex-row items-center">
          <img src="/src/marker.png" alt="marker" className="w-4" />
          <span className="location text-sm mr-2">{(props.location).toUpperCase()}</span>
          <a className="google-map-link text-sm" href={props.mapLink}>
            <span className="text-white underline font-medium">View on Google Map</span>
          </a>
        </div>
        <h1 className="title text-2xl font-semibold mt-1">{props.title}</h1>
        <p className="date text-sm mt-2">{props.dates}</p>
        <p className="text-desc text-sm mt-2 line-clamp-3">{props.description}</p>
      </div>
    </div>
    <hr className="opacity-30" />
    </>
  );
}

export default JournalItem;
