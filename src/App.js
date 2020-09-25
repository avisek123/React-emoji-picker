import React, { useState } from "react";
import "./styles.css";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

export default function App() {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  const EmojiData = ({ chosenEmoji }) => (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <br></br>
      <strong>Names:</strong>{" "}
      <span className="text">
        {chosenEmoji.names.join(", ")}
        <br />
      </span>
      <strong>Symbol:</strong>{" "}
      <span className="text">
        {chosenEmoji.emoji}
        <br />
      </span>
    </div>
  );
  return (
    <>
      <h1>Emoji picker</h1>
      <div className="area">
        <Picker onEmojiClick={onEmojiClick} skinTone={SKIN_TONE_MEDIUM_DARK} />
      </div>
      <br />
      <hr className="horizontal"></hr>
      {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />}
    </>
  );
}
