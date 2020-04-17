import * as React from "react";
import { Link } from "react-router-dom";
import { NEW_PAGE } from "../constants";

const Instructions: React.SFC<{}> = () => {
  return (
    <div className="flex-container flex-container--column flex-container--center-content">
      <div className="instuctions-container">
        <div className="instructions-icon">
          <i className="fas fa-lightbulb"></i>
        </div>
        <h1>You have no active challenges</h1>
        <p className="margin-top margin-bottom">
          Start by creating a challenge for yourself. It can be pushups, squats,
          kettlebell swings or whatever you decide.
        </p>
        <ol>
          <li>Set start date for your challenge</li>
          <li>Set end date for your challenge</li>
          <li>Set goal for your challenge</li>
          <li>
            <Link to={NEW_PAGE} className="text-bold">
              Create <i className="fas fa-arrow-right"></i>
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Instructions;
