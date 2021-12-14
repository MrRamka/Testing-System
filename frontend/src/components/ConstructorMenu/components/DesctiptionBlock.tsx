import React from "react";

interface DescriptionBlockProps {
  description?: string;
}

export const DescriptionBlock = ({
  description,
}: DescriptionBlockProps): JSX.Element => {
  return (
    <>
      {" "}
      {description ? (
        <div>
          <span className="font-semibold">Description: </span>
          <p>{description}</p>
        </div>
      ) : null}
    </>
  );
};
