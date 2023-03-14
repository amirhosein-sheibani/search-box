import { useState } from "react";
import "../src/app.scss";
import Table from "./assets/Table";
import { Users } from "../src/user.js";

function App() {
  const [query, setQuery] = useState("");



  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)}></Table>
    </div>
  );
}

export default App;
