import { Child } from "./Child";
export const Parent = () => {
  const greetParent = (childName) => {
    alert(`hello parent ${childName}`);
  };
  return <Child greetHandler={greetParent} />;
};
