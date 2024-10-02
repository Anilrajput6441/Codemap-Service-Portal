import { useRef } from "react";

const AddServices = () => {
  const title = useRef(null);
  const description = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title.current.value);
    console.log("Description:", description.current.value);
  };
  return (
    <form>
      <input type="text" className="text" ref={title} />
      <input type="file" className="text" />
      <input type="text" className="text" ref={description} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
export default AddServices;
