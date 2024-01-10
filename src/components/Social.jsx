import React from "react";

const SocialShare = [
  {
    iconName: "facebook",
    link: "https://web.facebook.com/favourmmy",
  },
  { iconName: "twitter", link: "https://twitter.com/FOEmmanuel2" },
  { iconName: "linkedin", link: "https://linkedin.com/in/favour-emmanuel-183226161"},
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
