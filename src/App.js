import React from "react";
import ProfileCard from "./Components/ProfileCard";
import Navbar from "./Components/Navbar";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  const alexaTags = ["#amazon", "#shopping", "#google"];
  const cortanaTags = ["#microsoft", "#gpt4", "#bing"];
  const siriTags = ["#apple", "#macOS", "#safari"];

  return (
    <div className="flex flex-col items-center my-24">
      <Navbar />
      <div className="text-3xl font-bold mb-4 mt-10">
        Personal Digital Assistants
      </div>
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
        style={{ marginTop: "64px" }}
      >
        <ProfileCard
          title="Alexa"
          handle="@alexa99"
          image={AlexaImage}
          tag1={alexaTags[0]}
          tag2={alexaTags[1]}
          tag3={alexaTags[2]}
        />
        <ProfileCard
          title="Cortana"
          handle="@cortana32"
          image={CortanaImage}
          tag1={cortanaTags[0]}
          tag2={cortanaTags[1]}
          tag3={cortanaTags[2]}
        />
        <ProfileCard
          title="Siri"
          handle="@siri01"
          image={SiriImage}
          tag1={siriTags[0]}
          tag2={siriTags[1]}
          tag3={siriTags[2]}
        />
      </div>
    </div>
  );
}

export default App;
