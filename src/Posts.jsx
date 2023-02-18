import { VscDiffAdded } from "react-icons/vsc";

export function Posts() {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }}
    >
      <VscDiffAdded />
      Get Data
    </button>
  );
}
