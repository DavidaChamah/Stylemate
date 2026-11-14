import { useState, useEffect } from 'react';
import ClothingCard from '../components/ClothingCard';
import { initialItems, categories } from '../data/wardrobe';

function loadItems() {
  try {
    const saved = localStorage.getItem('wardrobe');
    return saved ? JSON.parse(saved) : initialItems;
  } catch {
    return initialItems;
  }
}

export default function Wardrobe() {
  const [items, setItems] = useState(loadItems);
  const [filter, setFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', category: 'Tops', color: '' });

  useEffect(() => {
    try {
      localStorage.setItem('wardrobe', JSON.stringify(items));
    } catch {
      /* storage unavailable, ignore */
    }
  }, [items]);

  const visible = filter === 'All' ? items : items.filter((i) => i.category === filter);
  const count = (c) => items.filter((i) => i.category === c).length;

  function addItem(e) {
    e.preventDefault();
    if (!form.name.trim()) return;
    setItems([...items, { id: Date.now(), ...form, name: form.name.trim() }]);
    setForm({ name: '', category: 'Tops', color: '' });
    setShowForm(false);
  }

  function deleteItem(id) {
    setItems(items.filter((i) => i.id !== id));
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>My Wardrobe</h1>
          <p className="subtitle">Good style starts with what you already own.</p>
        </div>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          + Add Clothing
        </button>
      </div>

      {showForm && (
        <form className="add-form" onSubmit={addItem}>
          <input
            placeholder="Clothing name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <input
            placeholder="Color"
            value={form.color}
            onChange={(e) => setForm({ ...form, color: e.target.value })}
          />
          <button className="btn-primary" type="submit">Save</button>
        </form>
      )}

      <div className="stats">
        <div className="stat"><strong>{items.length}</strong><span>Total items</span></div>
        <div className="stat"><strong>{count('Tops')}</strong><span>Tops</span></div>
        <div className="stat"><strong>{count('Bottoms')}</strong><span>Bottoms</span></div>
        <div className="stat"><strong>{count('Shoes')}</strong><span>Shoes</span></div>
        <div className="stat"><strong>{count('Accessories')}</strong><span>Accessories</span></div>
      </div>

      <div className="tabs">
        {['All', ...categories].map((c) => (
          <button
            key={c}
            className={filter === c ? 'tab active' : 'tab'}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {visible.map((item) => (
          <ClothingCard key={item.id} item={item} onDelete={deleteItem} />
        ))}
      </div>
    </div>
  );
}
