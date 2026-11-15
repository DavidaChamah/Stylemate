import { photoFor } from '../data/clothingPhotos';

export default function ClothingCard({ item, onDelete }) {
  const photo = photoFor(item.name);

  return (
    <div className="card">
      {photo ? (
        <img className="card-photo" src={photo} alt={item.name} />
      ) : (
        <div className="card-img">{item.category}</div>
      )}
      <h3 className="card-title">{item.name}</h3>
      <p className="card-meta">{item.category} · {item.color}</p>
      <button className="link-btn" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
}