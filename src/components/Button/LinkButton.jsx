import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function LinkButton({ text, href }) {
    return (
        <Stack direction="row" spacing={2}>
            <Button
                variant="contained"
                href={href}
                sx={{
                    padding: '5px 10px', // Adjust the padding to make the button smaller
                    fontSize: '14px',    // Adjust the font size if needed
                    lineHeight: '1.5',   // Adjust the line height if needed
                    marginTop: '10px',   // Optional: Add margin to create space above the button
                  }}
            >
                {text}
            </Button>
        </Stack>
    );
}
