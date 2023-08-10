import { Link } from "react-router-dom";
import { CaretLeft } from "@phosphor-icons/react";
import "./not-found.css";
import NotFoundImg from "./assets/not-found.svg";
export default function NotFound() {
  return (
    <>
      <div className="not-found--wrapper">
        <div className="not-found--content">
          <figure className="not-found--figure">
            <img alt="Not Found" src={NotFoundImg} />
          </figure>
          <p className="not-found--paragraph">
            Sorry we can't find this page 😢
          </p>
          <Link to="/" className="not-found--link">
            <CaretLeft size={24} />
            Go back to home
          </Link>
        </div>
      </div>
    </>
  );
}
