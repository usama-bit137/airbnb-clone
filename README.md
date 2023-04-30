# Airbnb Clone
## Introduction
This is a quick project which is all about creating a clone of Airbnb using React components.

## Purpose
The purpose of this project was to produce a complete react project from scratch. It is demontration of how to structure a React project using some of the native concepts such as using custom components and passing `props`. 

A further extention to the project was to absract the data contained in each `<Card />` component to a JSON format. The data is stored in `card.json` and is read into `App.js` wherein a `.map()` method was used to iterate over the JSON object and produce several `<Card />` components but passing different `props`. The purpose of this abstraction is to reduce the number of times that lines of code are repeated which of course reduced the amount of code to correct and reduces the number of potential bugs. 