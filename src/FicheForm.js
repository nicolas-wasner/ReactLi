import React, { useState } from 'react';

export default function FicheForm() {
  const [fiche, setFiche] = useState({
    domaine: '',
    niveau: '',
    duree: '',
    sequence: '',
    seance: '',
    objectifs: '',
    competences: '',
    prerequis: '',
    nom_enseignant: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiche({ ...fiche, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://prepli.alwaysdata.net/api/fiche', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fiche)
    })
      .then(res => {
        if (!res.ok) throw new Error('Erreur API');
        return res.json();
      })
      .then(data => {
        alert('✅ Fiche envoyée avec succès !');
        setFiche({
          domaine: '',
          niveau: '',
          duree: '',
          sequence: '',
          seance: '',
          objectifs: '',
          competences: '',
          prerequis: '',
          nom_enseignant: ''
        });
      })
      .catch(err => {
        console.error(err);
        alert('❌ Une erreur est survenue. Vérifiez votre connexion ou le serveur.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Créer une fiche de préparation</h2>

      <input name="domaine" value={fiche.domaine} onChange={handleChange} placeholder="Domaine" className="block w-full p-2 border rounded" />
      <input name="niveau" value={fiche.niveau} onChange={handleChange} placeholder="Niveau" className="block w-full p-2 border rounded" />
      <input name="duree" value={fiche.duree} onChange={handleChange} placeholder="Durée" className="block w-full p-2 border rounded" />
      <input name="sequence" value={fiche.sequence} onChange={handleChange} placeholder="Titre de la séquence" className="block w-full p-2 border rounded" />
      <input name="seance" value={fiche.seance} onChange={handleChange} placeholder="Titre de la séance" className="block w-full p-2 border rounded" />
      <textarea name="objectifs" value={fiche.objectifs} onChange={handleChange} placeholder="Objectifs" className="block w-full p-2 border rounded" />
      <textarea name="competences" value={fiche.competences} onChange={handleChange} placeholder="Compétences visées" className="block w-full p-2 border rounded" />
      <textarea name="prerequis" value={fiche.prerequis} onChange={handleChange} placeholder="Prérequis" className="block w-full p-2 border rounded" />
      <input name="nom_enseignant" value={fiche.nom_enseignant} onChange={handleChange} placeholder="Nom de l’enseignant" className="block w-full p-2 border rounded" />

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Enregistrer la fiche
      </button>
    </form>
  );
}
