import { Box, Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";

export function CommentsField() {
  const [comment, setComment] = useState<string>('');
  const [boxContent, setBoxContent] = useState<string>(() => {
    return localStorage.getItem("boxContent") || "";
  });
  const [showBox, setShowBox] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("boxContent", boxContent);
  }, [boxContent]);

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
    setShowBox(false);
  };

  const isButtonDisabled = comment.trim() === '';

  const handleSaveClick = () => {
    setShowBox(true);
    setBoxContent(comment);
    setComment('');
  };

  return (
    <form>
      <TextField 
        variant="outlined"
        label="Observações:"
        id="commentField"
        multiline
        maxRows={4}
        margin="normal"
        fullWidth
        value={comment}
        onChange={handleCommentChange}
      />
      {showBox && (
        <Box 
          component="p"
          display="flex"
          justifyContent="center"
          margin={1}
          padding={1.5}
          borderRadius={2}
          sx={{ border: '1px solid grey', color: '#757371' }}
        >
          {boxContent}
        </Box>
      )}

      <Button
        variant="contained"
        onClick={handleSaveClick}
        disabled={isButtonDisabled}
      >
        Salvar
      </Button>
    </form>
  )
}
