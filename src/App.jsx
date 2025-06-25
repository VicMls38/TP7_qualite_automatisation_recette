import React,{ useEffect, useState } from 'react';


function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [seed, setSeed] = useState(1); // Seed pour le mock dynamique

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/products?seed=${seed}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [seed]);

  return (
    <>
      <h1>Catalogue produits</h1>
      <button onClick={() => setSeed(seed + 1)}>Recharger</button>

      {isLoading && <p>Chargement...</p>}

      {!isLoading && products.length === 0 && (
        <p>Aucun produit disponible.</p>
      )}

      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} — {p.price}€
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
