import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEdit, FaRegStar } from "react-icons/fa";
import { FiGitBranch } from "react-icons/fi";
import { SiAlbertheijn } from "react-icons/si";

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/koolkishan/chat-app-react-nodejs")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer>
      <Link
        href="https://github.com/farhan-sadik247"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">© Copyright Md. Farhan Sadik 2024. All Rights Reserved.</span>
        {githubInfo && (
          <div className="footer-git">
            <div className="footer-git-item">
              <FaRegStar className="footer-git-item-icon" />
              <span className="footer-git-item-text">Design by Kishan Sheth</span>
            </div>
            <div className="footer-git-item">
              <FaEdit className="footer-git-item-icon" />
              <span className="footer-git-item-text">Modified & Maintained by Farhan Sadik</span>
            </div>
          </div>
        )}
      </Link>
    </footer>
  );
}

export default Footer;
