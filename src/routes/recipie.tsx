import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipieDetails } from "../models/RecipieDetails";

export default function Recipie() {
  let params = useParams();
  const [recipie, setRecipie] = useState<RecipieDetails>();

  useEffect(() => {
    const recipieURL = `https://picniic-recipes.s3.us-west-2.amazonaws.com/${params.recipieId}`;

    axios.get(recipieURL).then((response) => setRecipie(response.data));
  }, [params.recipieId]);

  return (
    <>
      {recipie && (
        <>
          <h2>{`Recipie: ${recipie.label}`}</h2>
          <h3>Ingredients</h3>
          <ul>
            {recipie.ingredientLines.map((ingredientLine) => (
              <li>{ingredientLine}</li>
            ))}
          </ul>
          {recipie.directionLines && recipie.directionLines.length > 0 && (
            <>
              <h3>Directions</h3>
              <ul>
                {recipie.directionLines.map((directionLine) => (
                  <li>{directionLine}</li>
                ))}
              </ul>
            </>
          )}
          {recipie.notes && (
            <>
              <h3>Notes</h3>
              <span>{recipie.notes}</span>
            </>
          )}
        </>
      )}
    </>
  );
}
