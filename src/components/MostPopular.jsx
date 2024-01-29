import { useEffect, useState } from "react";

export const MostPopular = () => {
  const [mNews, setMnews] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://dev.to/api/articles?top=2&per_page=5"
      );
      const data = await response.json();
      console.log(data);
      setMnews(data[0].title);
    }
    getData();
  }, []);
  return (
    <div>
      <div>
        <p></p>
        <h3>{mNews}</h3>
      </div>
    </div>
  );
};
