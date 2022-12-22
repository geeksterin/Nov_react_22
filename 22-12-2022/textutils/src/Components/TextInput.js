import React,{useState} from 'react'
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TextInput() {
    const [input, setInput] = useState('');
    const [preview, setPreview] = useState('');
    const handleAnalyse = (e) => {
        setInput(e.target.value);
        setPreview(e.target.value)
    }
    const handleUppercase = () => {
        setInput(input.toUppercase());
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
        <Button variant="contained" color="secondary">
          Convert to lowercase
        </Button>
        <Button variant="contained" color="secondary">
          Copy Text
        </Button>
        <Button variant="outlined" color="error">
          Clear Text
        </Button>
        <Button variant="contained" color="secondary">
          Remove extra spaces
        </Button>
        <Typography variant="h4">Text Summary</Typography>
        <Typography variant="h6">0 words o characters</Typography>
        <Typography variant="h6">0 minutes to read</Typography>
        <Typography variant="h4">Preview</Typography>
            <Typography variant="h6">{preview}</Typography>
        
      </div>
    );
}

export default TextInput