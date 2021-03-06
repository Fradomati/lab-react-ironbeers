import React, { useState, useEffect } from "react";
import { newBeer } from "../../lib/ApiBeer";
import { Layout } from "../layouts/layout";

export const NewBeer = () => {
  const [beer, setBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  });

  const handleInputChange = e => {
    const id = e.target.id;
    const value = e.target.value;
    setBeer({ ...beer, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = { ...beer };
    newBeer(formData);
  };

  return (
    <>
      <Layout />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={beer.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Tagline">Tagline: </label>
          <input
            type="text"
            id="tagline"
            value={beer.tagline}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Description">Description: </label>
          <input
            type="text"
            id="description"
            value={beer.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="first_brewed">Date of first brew: </label>
          <input
            type="text"
            id="first_brewed"
            value={beer.first_brewed}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="brewers_tips">Some tips for brewers: </label>
          <input
            type="text"
            id="brewers_tips"
            value={beer.brewers_tips}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="attenuation_level">Level of attenuation: </label>
          <input
            type="number"
            id="attenuation_level"
            value={beer.attenuation_level}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="contributed_by">Created by: </label>
          <input
            type="text"
            id="contributed_by"
            value={beer.contributed_by}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">ADD NEW</button>
        </div>
      </form>
    </>
  );
};
