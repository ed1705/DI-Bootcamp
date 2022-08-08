import "./Excercise4.css";

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

const Exercise4 = () => {
  return (
    <div>
      <h1 style={style_header}>Header</h1>
      <p className="para">Paragraph</p>
    </div>
  );
};

export default Exercise4;
