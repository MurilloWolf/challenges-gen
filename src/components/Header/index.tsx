import { GithubLogo, YoutubeLogo, LinkedinLogo } from "@phosphor-icons/react";
import "./styles.css";
export default function Header() {
  return (
    <header className="header-wrapper">
      <h1 className="header-title">Project Generator</h1>
      <div className="icon-list">
        <div className="icon-right--position">
          <a target="_blank" href="https://github.com/MurilloWolf">
            <GithubLogo size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCEj2HCYuIopBY3-M8S1fM6w"
          >
            <YoutubeLogo size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/murillo-wolf-dev/"
          >
            <LinkedinLogo size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}
