export default function ClothingCard({ item, onDelete }) {
  return (
    <div className="card">
      <div className="card-img">{item.category}</div>
      <h3 className="card-title">{item.name}</h3>
      <p className="card-meta">{item.category} · {item.color}</p>
      <button className="link-btn" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
}