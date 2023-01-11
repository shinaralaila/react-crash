export const Child = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.greetHandler("shinu");
        }}
      >
        Greet
      </button>
    </div>
  );
};
