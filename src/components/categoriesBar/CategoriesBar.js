import React from "react";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "Music",
  "Sports",
  "News",
  "Gaming",
  "Movies",
  "Entertainment",
  "Comedy",
  "Education",
  "Howto",
  "Nonprofits",
  "Pets",
  "Science",
  "Tech",
  "Travel",
  "Autos",
]

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = React.useState("All");

  const handleClick = value => {
    setActiveElement(value)
  }
    return (
      <div className='CategoriesBar'>
        {keywords.map((value, index) => (
          <span
            onClick={() => handleClick(value)}
            key={index}
            className={activeElement === value ? "active" : ""}>
           {value}
          </span>
        ))}
      </div>
    );
  };

export default CategoriesBar;
