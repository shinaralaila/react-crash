export const UserGreetings = () => {
  const IsLoggedIn = true;
  //   return <div>Welcome {IsLoggedIn ? "shinu" : "shinara"}</div>;
  return (
    <div>
      <h1>Welcome {IsLoggedIn && "ShinaraLaila"}</h1>
    </div>
  );
};
