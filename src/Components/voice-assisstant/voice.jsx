import React, { useState } from 'react';
import './voice.css';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { BiSolidCopyAlt } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";
import { BsFillMicMuteFill } from "react-icons/bs";
import { SiConvertio } from "react-icons/si";
import tts from 'tts-js';

const VoiceAss = () => {
  const [copyTxt, setCopyTxt] = useState('');
  const [isCopied, setCopied] = useClipboard(copyTxt);

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-In' });
  const stopListening = () => SpeechRecognition.stopListening();

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return alert('no browsersupport');
  }
  return (
    <>
      <div className="container">
        <h1>Speech to Text Converter <SiConvertio className="headIcon"/></h1>
        <p>Note: To copy written text, firstly click once on the white board after clicking Stop button.</p>
        <div className="main-content" onClick={() => setCopyTxt(transcript)}>
          {transcript}
        </div>
        <div className="btn">
          <button onClick={startListening}><BsFillMicFill />Start</button>
          <button onClick={stopListening}><BsFillMicMuteFill />Stop</button>
          <button onClick={setCopied}>
            <BiSolidCopyAlt />{isCopied ? " Copied" : " Copy to clipboard"}
          </button>
        </div>
        {/* <div className='btn-1' onClick={handleSpeakClick}>Click me</div> */}
      </div>
    </>
  );
};

export default VoiceAss;
