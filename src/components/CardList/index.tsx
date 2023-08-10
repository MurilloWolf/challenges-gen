import {
  PuzzlePiece,
  Shuffle,
  ListMagnifyingGlass,
} from "@phosphor-icons/react";

import "./cardList.css";
import { Link } from "react-router-dom";
export default function CardList() {
  const paragraphs = [
    "Get a random project",
    "Get a random challange with a punishement, you need to develop that challeng respecting that punishment",
    "See a full list of projects",
  ];
  const titles = ["Random Project", "Random Challange", "Project List"];
  const icons = [PuzzlePiece, Shuffle, ListMagnifyingGlass];
  return (
    <div className="card-list-options">
      {titles.map((title, index) => {
        const Icon = icons[index];
        return (
          <Link
            key={index}
            className="link card-list-option"
            to={`/` + titles[index].toLowerCase().replace(" ", "-")}
          >
            <div className="" key={index}>
              <div className="card-title">
                <Icon size={36} />
                <h2>{title}</h2>
              </div>
              <p className="card-paragraph">{paragraphs[index]}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
