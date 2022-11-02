import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Dropdown from "./Dropdown"
export default function AddressForm() {
  return (
    <Box sx={{py:6}}>
      <Typography sx={{pb:5}} variant="h6" gutterBottom>
        Add Jewellery
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Customer"
            name="customer"
            label="Customer"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
       
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="property"
            name="property"
            label="Property"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
         <Dropdown/>
        </Grid> 
        
        <Grid item xs={12}>
          <TextField
            multiline
            rows={5}
            name="note"
            label="Note"
            fullWidth
            variant="standard"
          />
        </Grid>
        
      </Grid>
      </Box>
  );
}