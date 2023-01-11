const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} {props.age}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
