import React from "react";
import api from "./apiServices";

const App = () => {
  const getAll = async (e) => {
    e.preventDefault();
    const path = "/samples";
    await api.get(path);
  };

  const createSample = async (e) => {
    e.preventDefault();
    const path = "/samples";

    await api.post(path, {
      name: "sample name",
      content: "sample content",
    });
  };

  const updateSample = async (e) => {
    e.preventDefault();
    const path = "/samples/612471ed4292df3650d259be";
    await api.put(path, { content: "updated" });
  };
  const deleteSample = async (e) => {
    e.preventDefault();
    const path = "/samples/612471ed4292df3650d259be";
    await api.delete(path);
  };

  return (
    <div>
      <button onClick={getAll}>Get all</button>
      <button onClick={createSample}>Create</button>
      <button onClick={updateSample}>Update</button>
      <button onClick={deleteSample}>Delete</button>
    </div>
  );
};

export default App;
