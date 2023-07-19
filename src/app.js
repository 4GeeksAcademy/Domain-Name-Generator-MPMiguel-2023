/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const pronouns = ["the", "our", "their", "his", ""];
const adjectives = ["great", "big", "small", "loud", "mean", "pro"];
const nouns = ["runner", "racoon", "coffee", "tea", "shop", "cup", ""];
const extensions = [".com", ".es", ".net", ".edu", ".org"];

const generateDomainNames = () => {
  let generatedDomains = [];

  pronouns.forEach(pronoun => {
    adjectives.forEach(adjective => {
      nouns.forEach(noun => {
        extensions.forEach(extension => {
          let domain = pronoun + adjective + noun + extension;
          generatedDomains.push(domain);
        });
      });
    });
  });

  return generatedDomains;
};

const displayDomainNames = () => {
  const generatedDomains = generateDomainNames();
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = generatedDomains.join("<br>");
};

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", displayDomainNames);
