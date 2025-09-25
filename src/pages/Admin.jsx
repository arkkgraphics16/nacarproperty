import { useEffect, useMemo, useState } from 'react';
import AdminGuard from '../components/AdminGuard';
import { loadDraft, saveDraft, clearDraft } from '../lib/storage';

const blankProperty = {
  id: '',
  slug: '',
  status: 'for-sale',
  title: '',
  price: 0,
  currency: 'PHP',
  address: { city: '', province: '', country: 'Philippines' },
  lotSqm: 0,
  zoning: '',
  frontage: '',
  roadAccess: '',
  utilities: [],
  nearby: [],
  images: [],
  description: '',
  badges: [],
  seo: { title: '', description: '' },
  publishedAt: new Date().toISOString().slice(0, 10),
};

const parseList = (value) =>
  value
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);

const deepClone = (value) => {
  if (typeof structuredClone === 'function') {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
};

const AdminContent = ({ initialProperties }) => {
  const [properties, setProperties] = useState(() => initialProperties.map((item) => deepClone(item)));
  const [selectedId, setSelectedId] = useState(initialProperties[0]?.id ?? '');
  const [form, setForm] = useState(() => deepClone(initialProperties[0] ?? blankProperty));
  const [importText, setImportText] = useState('');

  useEffect(() => {
    const draft = loadDraft();
    if (draft?.properties?.length) {
      setProperties(draft.properties.map((item) => deepClone(item)));
      setSelectedId(draft.properties[0].id);
      setForm(deepClone(draft.properties[0]));
    }
  }, []);

  useEffect(() => {
    saveDraft({ properties });
  }, [properties]);

  const selectedProperty = useMemo(() => properties.find((item) => item.id === selectedId), [properties, selectedId]);

  useEffect(() => {
    if (selectedProperty) {
      setForm(deepClone(selectedProperty));
    }
  }, [selectedProperty]);

  const handleFieldChange = (path, transformer = (value) => value) => (event) => {
    const value = transformer(event.target.value);
    setForm((prev) => {
      const next = deepClone(prev);
      const keys = path.split('.');
      let pointer = next;
      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          pointer[key] = value;
        } else {
          pointer = pointer[key];
        }
      });
      return next;
    });
  };

  const handleSave = (event) => {
    event.preventDefault();
    const prepared = {
      ...form,
      utilities: Array.isArray(form.utilities) ? form.utilities : parseList(form.utilities || ''),
      nearby: Array.isArray(form.nearby) ? form.nearby : parseList(form.nearby || ''),
      images: Array.isArray(form.images) ? form.images : parseList(form.images || ''),
      badges: Array.isArray(form.badges) ? form.badges : parseList(form.badges || ''),
      price: Number(form.price) || 0,
      lotSqm: Number(form.lotSqm) || 0,
    };

    const saved = deepClone(prepared);

    setProperties((prev) => {
      const exists = prev.some((item) => item.id === prepared.id);
      if (!exists) {
        return [...prev, saved];
      }
      return prev.map((item) => (item.id === prepared.id ? saved : item));
    });
    setSelectedId(prepared.id);
    setForm(saved);
  };

  const handleCreateNew = () => {
    setForm(deepClone(blankProperty));
    setSelectedId('');
  };

  const handleDelete = (id) => {
    if (!window.confirm('Delete this property?')) return;
    setProperties((prev) => {
      const next = prev.filter((item) => item.id !== id);
      const nextSelected = next[0]?.id ?? '';
      setSelectedId(nextSelected);
      setForm(nextSelected ? deepClone(next[0]) : deepClone(blankProperty));
      return next;
    });
  };

  const handleImport = () => {
    try {
      const parsed = JSON.parse(importText);
      if (!Array.isArray(parsed)) throw new Error('Invalid format');
      setProperties(parsed);
      setSelectedId(parsed[0]?.id ?? '');
      setForm(parsed[0] ?? blankProperty);
    } catch (error) {
      alert('Unable to import JSON: ' + error.message);
    }
  };

  const handleClearDraft = () => {
    clearDraft();
    alert('Draft cleared from this browser.');
  };

  const exportData = JSON.stringify(properties, null, 2);

  return (
    <section className="container" style={{ padding: '4rem 0' }}>
      <h1 className="section-title">Admin: Manage Listings</h1>
      <div className="admin-grid">
        <div className="admin-panel">
          <div className="admin-actions" style={{ marginBottom: '1rem' }}>
            <button type="button" className="btn" onClick={handleCreateNew}>
              New Property
            </button>
            <button type="button" className="btn-outline" onClick={handleClearDraft}>
              Clear Local Draft
            </button>
          </div>
          <form className="admin-form" onSubmit={handleSave}>
            <label>
              Property ID
              <input value={form.id} onChange={handleFieldChange('id')} required />
            </label>
            <label>
              Slug
              <input value={form.slug} onChange={handleFieldChange('slug')} required />
            </label>
            <label>
              Title
              <input value={form.title} onChange={handleFieldChange('title')} required />
            </label>
            <label>
              Status
              <select value={form.status} onChange={handleFieldChange('status')}>
                <option value="for-sale">for-sale</option>
                <option value="reserved">reserved</option>
                <option value="sold">sold</option>
              </select>
            </label>
            <label>
              Price (PHP)
              <input type="number" value={form.price} onChange={handleFieldChange('price', Number)} />
            </label>
            <label>
              Lot Area (sqm)
              <input type="number" value={form.lotSqm} onChange={handleFieldChange('lotSqm', Number)} />
            </label>
            <label>
              Zoning
              <input value={form.zoning} onChange={handleFieldChange('zoning')} />
            </label>
            <label>
              Frontage
              <input value={form.frontage} onChange={handleFieldChange('frontage')} />
            </label>
            <label>
              Road Access
              <input value={form.roadAccess} onChange={handleFieldChange('roadAccess')} />
            </label>
            <label>
              City
              <input value={form.address.city} onChange={handleFieldChange('address.city')} />
            </label>
            <label>
              Province
              <input value={form.address.province} onChange={handleFieldChange('address.province')} />
            </label>
            <label>
              Country
              <input value={form.address.country} onChange={handleFieldChange('address.country')} />
            </label>
            <label>
              Description
              <textarea value={form.description} onChange={handleFieldChange('description')} />
            </label>
            <label>
              Utilities (one per line)
              <textarea value={Array.isArray(form.utilities) ? form.utilities.join('\n') : form.utilities} onChange={handleFieldChange('utilities')} />
            </label>
            <label>
              Nearby (one per line)
              <textarea value={Array.isArray(form.nearby) ? form.nearby.join('\n') : form.nearby} onChange={handleFieldChange('nearby')} />
            </label>
            <label>
              Badges (one per line)
              <textarea value={Array.isArray(form.badges) ? form.badges.join('\n') : form.badges} onChange={handleFieldChange('badges')} />
            </label>
            <label>
              Images (one URL per line)
              <textarea value={Array.isArray(form.images) ? form.images.join('\n') : form.images} onChange={handleFieldChange('images')} />
            </label>
            <label>
              SEO Title
              <input value={form.seo?.title ?? ''} onChange={handleFieldChange('seo.title')} />
            </label>
            <label>
              SEO Description
              <textarea value={form.seo?.description ?? ''} onChange={handleFieldChange('seo.description')} />
            </label>
            <label>
              Published At
              <input type="date" value={form.publishedAt} onChange={handleFieldChange('publishedAt')} />
            </label>
            <div className="admin-actions">
              <button type="submit" className="btn">
                Save Property
              </button>
              {form.id && (
                <button type="button" className="btn-outline" onClick={() => handleDelete(form.id)}>
                  Delete
                </button>
              )}
            </div>
          </form>
        </div>
        <aside className="admin-side">
          <h3>Existing Properties</h3>
          <div className="admin-list">
            {properties.map((item) => (
              <button key={item.id} type="button" onClick={() => setSelectedId(item.id)}>
                {item.title}
              </button>
            ))}
          </div>
          <h3 style={{ marginTop: '2rem' }}>Export JSON</h3>
          <textarea style={{ width: '100%', minHeight: '200px' }} value={exportData} readOnly />
          <p className="meta">Copy and paste this JSON into /src/data/properties.json to persist updates.</p>
          <h3>Import JSON</h3>
          <textarea
            style={{ width: '100%', minHeight: '120px' }}
            placeholder='Paste JSON array here'
            value={importText}
            onChange={(event) => setImportText(event.target.value)}
          />
          <div className="admin-actions" style={{ marginTop: '1rem' }}>
            <button type="button" className="btn" onClick={handleImport}>
              Import Draft
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

const Admin = ({ initialProperties }) => {
  return (
    <AdminGuard>
      <AdminContent initialProperties={initialProperties} />
    </AdminGuard>
  );
};

export default Admin;
