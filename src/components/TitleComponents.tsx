import React from "react";
interface Props {
  title: string;
}
const TitleComponents = ({ title }: Props) => {
  return (
    <h2 className="text-4xl leading-8 font-medium text-center my-5 ">
      {title}
    </h2>
  );
};

export default TitleComponents;
