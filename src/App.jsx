import { useState, useRef, useEffect } from "react";
import Markdown from "marked-react";

export default function App() {
  // Variables
  const input = useRef();

  // States
  const [prev, setPrev] = useState();

  // Fonction de mise à jour de la prévisualisation
  const updatePrevisualisation = () => {
    setPrev(input.current.value);
  };

  // Donne le focus à l'éditeur
  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
    updatePrevisualisation();
  }, []);

  return (
    <main className="App">
      <div className="elements">
        {/* Editeur */}
        <div className="element">
          <textarea
            rows={30}
            ref={input}
            defaultValue="# `Prévisualisateur de Markdown`&#13;### Cool ! &#13;Ce projet réalisé entièrement avec React permet de transformer le markdown en *HTML* !&#13;&#13;### Cas d'utilisation&#13;* *italique*&#13;* **gras**&#13;* `monospace`&#13;* ~~barré~~&#13;* # h1&#13;* ## h2&#13;* ### h3&#13;* #### etc&#13;[JMighty](https://blog.jmighty.fr)"
            placeholder={"Saisissez votre texte markdown ici. Exemple : # Titre"}
            onChange={updatePrevisualisation}></textarea>
        </div>

        {/* Prévisualisateur */}
        <div className="element">
          <Markdown>{prev}</Markdown>
        </div>
      </div>
    </main>
  );
}
