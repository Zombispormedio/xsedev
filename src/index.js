const { h, render } = require("ink");
const { author, description } = require("../package.json");
const Introduction = require("./Introduction");
const Choices = require("./Choices");

const languages = [
  {
    value: "Javascript",
    color: "#FFA000"
  },
  {
    value: "Node.js",
    color: "#689F38"
  },
  {
    value: "React.js",
    color: "#3f51b1"
  },
  {
    value: "Java",
    color: "#ff0000"
  },
  {
    value: "Android",
    color: "#4CAF50"
  },
  {
    value: "Golang",
    color: "#c4790f"
  }
];

render(
  <Introduction
    title={author.name}
    description={description}
    badges={languages}
  />
);

const linkedin = "https://www.linkedin.com/in/xsedev";

const github = "https://github.com/zombispormedio";

const twitter = "https://twitter.com/zombispormedio";

const items = [
  {
    label: `Website - ${author.url}`,
    url: author.url
  },
  {
    label: `GitHub - ${github}`,
    url: github
  },
  {
    label: `LinkedIn - ${linkedin}`,
    url: linkedin
  },
  {
    label: `Twitter - ${twitter}`,
    url: twitter
  },
  {
    label: `Email me to ${author.email}`,
    url: `mailto://${author.email}?subject=I saw your personal card`
  }
];

render(<Choices items={items} />);
