import React, { useState } from 'react';

const AudioTranscription = () => {
  const [transcriptionResult, setTranscriptionResult] = useState('');
  let mediaRecorder;

  const startRecording = () => {
    console.log('hello from startRecording');
    const chunks = [];

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
          chunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(chunks, { type: 'audio/wav' });
          uploadAudioForTranscription(audioBlob);
          chunks.length = 0;
        };

        mediaRecorder.start();
      })
      .catch(err => {
        console.error('Error accessing microphone:', err);
      });

    setTimeout(() => {
      if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
      }
    }, 10000); // Stop recording after 10 seconds, adjust as needed
  };

  const uploadAudioForTranscription = async (audioBlob) => {
    const token = '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'; // Replace with your actual OpenAI API token

    const formData = new FormData();
    formData.append('file', audioBlob, 'recorded_audio.wav');
    formData.append('model', 'whisper-1');
    // formData.append('language' ,'tel')

    fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const result = data.transcription; 
      console.log(result);// Assuming the API response contains a 'transcription' field
      setTranscriptionResult(result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      mediaRecorder.onstop(); // Trigger the stop event manually
      // uploadAudioForTranscription(audioBlob);
    }
  };

  return (
     <div>
      <h1>Audio Transcription</h1>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <p>{transcriptionResult}</p>
    </div>
  );
};

export default AudioTranscription;
