import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Guess The Color of the Rainbow!");
ti.output("Is it a primary color? (red, blue, yellow)");
let primary = await ti.readYesOrNo();
if (primary) {
  ti.output("Is it a warm color?");
  let warm = await ti.readYesOrNo();
  if (warm) {
    ti.output("Is it red?")
    let red = await ti.readYesOrNo();
    if (red) { 
      ti.output("Ooh! Nice color!")
    } else { 
      let yellow = await ti.readYesOrNo ();
      if (yellow) {
      ti.output("Ooh! Nice color!")
      }}
  } else ( 
    ti.output("Your color is blue! I like that color too!")

    // cool

  )
    }
 else {
  ti.output("Is it a secondary color? (orange, green, purple)");
  let secondary = await ti.readYesOrNo();
    if (secondary) {
    ti.output("Is it a cool color?");
    let cool = await ti.readYesOrNo ();
    if (cool) {
      ti. output(" Is it purple?")
      let purple = await ti.readYesOrNo ();
      if (purple) {
        ti.output("Ooh! Nice color!")
      }
    }
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
