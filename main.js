import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Guess Your Hogwarts House");
ti.output("Are you brave?");
let brave = await ti.readYesOrNo();
if (brave) {
  ti.output("You are a Gryffindor!")
} else {
}

let compassionate = await ti.readYesOrNti.output("Are you compassionate?");o();
if (compassionate) {
  ti.output("You are a Hufflepuff!")
} else 

let ambitious = await ti.readYesOrNo();
if (ambitious) {
  ti.output("You are a Slytherin!")
}