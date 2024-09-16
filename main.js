import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Guess Your Hogwarts House");
ti.output("Are you brave?");
let brave = await ti.readYesOrNo();
if (brave) {
  ti.output("You are a Gryffindor!");
} else {
  ti.output("Are you compassionate?");
  let compassionate = await ti.readYesOrNo();
    if (compassionate) {
    ti.output("You are a Hufflepuff!");
} else {
   ti.output("Are you ambitious?");
  let ambitious = await ti.readYesOrNo();
  if (ambitious) {
    ti.output("You are a Slytherin!");
  } else {
    ti.output("Are you loyal?");
    let loyal = await ti.readYesOrNo();
    if (loyal) {
      ti.output("You are a Ravenclaw!");  }
}}}
