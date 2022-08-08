import App from "./App";

const UserFavoriteColors = (props) => {
  console.log(props);
  return props.animals.map((animals) => (
    <ul key={animals}>
      <li>{animals}</li>
    </ul>
  ));
};

export default UserFavoriteColors;
