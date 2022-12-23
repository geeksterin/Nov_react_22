import React,{useState} from 'react'
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import copy from "copy-to-clipboard";

function TextInput() {
    const [input, setInput] = useState('');
    const [preview, setPreview] = useState('Type in text box to see the preview');
    const handleAnalyse = (e) => {
        setInput(e.target.value);
        setPreview(e.target.value)
    }
    const handleUppercase = () => {
        setInput(input.toUpperCase());
    }

    const handleLowercase = () => {
        setInput(input.toLowerCase());
    }

  const handleCopyText = () => {
    copy(input);
  }
  
  const handleClearText = () => {
    setInput("");
    setPreview("Type in text box to see the preview");
  }

  const handleExtraSpaces = () => {
    let str = input; // input ='hello   ' -> 'hello'
    console.log(str.length);
    let regex=/\s+/g
    str = str.replace(regex, ' ');
    console.log(str.length);
    setInput(str);

  }
    
    return (
      <div className="text-area">
        <Typography variant="h2">Enter the text to Analyze Below</Typography>
        <TextField
          color="secondary"
          fullWidth
          label="Enter Text"
          id="fullWidth"
          multiline
          value={input}
          onChange={handleAnalyse}
        />
        <Button variant="contained" color="secondary" onClick={handleUppercase}>
          Convert to UPPERCASE
        </Button>
        <Button variant="contained" color="secondary" onClick={handleLowercase}>
          Convert to lowercase
        </Button>
        <Button variant="contained" color="secondary" onClick={handleCopyText}>
          Copy Text
        </Button>
        <Button variant="outlined" color="error" onClick={handleClearText}>
          Clear Text
        </Button>
        <Button variant="contained" color="secondary" onClick={handleExtraSpaces}>
          Remove extra spaces
        </Button>
        <Typography variant="h4">Text Summary</Typography>
        <Typography variant="h6">{input.split(" ").length-1} words {input.split('').length} characters</Typography>
        <Typography variant="h6">{(input.split(' ').length-1) * 0.33} seconds to read</Typography>
        <Typography variant="h4">Preview</Typography>
        <Typography variant="h6">{preview}</Typography>
      </div>
    );
}

export default TextInput