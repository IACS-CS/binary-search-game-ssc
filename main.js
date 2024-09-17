import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Guess The Color of the Rainbow!");
ti.output("Is it a primary color?");
let primary = await ti.readYesOrNo();
if (primary) {
  ti.output("Is it a warm or cool color?");
  let warm = await ti.readYesOrNo();
  if (warm) {
    ti.output("Is it red or yellow?")
}} else {
  ti.output("Is it a secondary color?");
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
