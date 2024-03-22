import React, { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";

export function CommentsField() {
  const [comment, setComment] = useState<string>('');
  const [boxContent, setBoxContent] = useState<string>(() => {
    return localStorage.getItem("boxContent") || "";
  });
  const [isBoxVisible, setBoxVisibility] = useState<boolean>(() => !!localStorage.getItem("boxContent"));

  useEffect(() => {
    localStorage.setItem("boxContent", boxContent);
  }, [boxContent]);

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
    setBoxVisibility(false);
  };

  const isSaveButtonDisabled = comment.trim() === '';

  const handleSaveClick = () => {
    setBoxContent(comment);
    setBoxVisibility(true);
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
      {isBoxVisible && (
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
        disabled={isSaveButtonDisabled}
      >
        Salvar
      </Button>
    </form>
  )
}
