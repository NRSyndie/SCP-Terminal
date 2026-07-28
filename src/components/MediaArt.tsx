interface MediaArtProps {
  entryId: string;
  image?: string;
}

function MediaArt({ entryId, image }: MediaArtProps) {
  return (
    <div className="media-frame">
      {image ? (
        <img
          src={new URL(`../assets/images/scp/${image}`, import.meta.url).href}
          alt={entryId}
          className="media-image"
        />
      ) : (
        <div className="media-empty">NO IMAGE ON FILE</div>
      )}
      <div className="media-scanlines" />
    </div>
  );
}

export default MediaArt;