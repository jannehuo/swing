import * as React from "react";
import { Link } from "react-router-dom";
import { NEW_PAGE } from "../constants";
import AppContext from "../context";

const Instructions: React.SFC<{}> = () => {
  const data = React.useContext(AppContext);
  const { localizations } = data;
  const content: any = localizations;
  return (
    <div className="flex-container flex-container--column flex-container--center-content">
      <div className="instuctions-container">
        <div className="instructions-icon margin-bottom">
          <i className="fas fa-lightbulb"></i>
        </div>
        <h1>{content.instructions.header}</h1>
        <p className="margin-top margin-bottom">
          {content.instructions.infoText}
        </p>
        <ol>
          {content.instructions.steps.map((step: string, i: number) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Instructions;
