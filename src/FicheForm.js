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
    console.log("Fiche créée :", fiche);
    alert("Fiche enregistrée (dans la console pour l’instant) ✅");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Créer une fiche</h2>

      <input name="domaine" value={fiche.domaine} onChange={handleChange} placeholder="Domaine" className="block w-full p-2 border" />
      <input name="niveau" value={fiche.niveau} onChange={handleChange} placeholder="Niveau" className="block w-full p-2 border" />
      <input name="duree" value={fiche.duree} onChange={handleChange} placeholder="Durée" className="block w-full p-2 border" />
      <input name="sequence" value={fiche.sequence} onChange={handleChange} placeholder="Titre de la séquence" className="block w-full p-2 border" />
      <input name="seance" value={fiche.seance} onChange={handleChange} placeholder="Titre de la séance" className="block w-full p-2 border" />
      <textarea name="objectifs" value={fiche.objectifs} onChange={handleChange} placeholder="Objectifs" className="block w-full p-2 border" />
      <textarea name="competences" value={fiche.competences} onChange={handleChange} placeholder="Compétences visées" className="block w-full p-2 border" />
      <textarea name="prerequis" value={fiche.prerequis} onChange={handleChange} placeholder="Prérequis" className="block w-full p-2 border" />
      <input name="nom_enseignant" value={fiche.nom_enseignant} onChange={handleChange} placeholder="Nom de l’enseignant" className="block w-full p-2 border" />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">Créer la fiche</button>
    </form>
  );
}

