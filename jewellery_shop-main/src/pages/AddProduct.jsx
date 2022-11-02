import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImagePicker from "../Component/imagePicker/imagePicker"
import AddProductFrom from "../Component/AddProduct/addProductForm"
import Button from '@mui/material/Button';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
export default function AddProduct() {

    return (
        <div>
            <Grid container spacing={2} sx={{ pt: 6 }}>
                <Grid item md={6} >
                    <AddProductFrom />
                </Grid>
                <Grid items md={6} >
                    <ImagePicker />
                </Grid>
                <Grid
                     md={12}
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    width = "100%"
                    sx={{pt:6, mt:5}}
                    // style={{ minHeight: '100vh' }}

                >
                    <Button variant="contained" component="span"  sx={{pt:4}} size="large" startIcon={<DataSaverOnIcon />}
                     style={{maxWidth: '200px', maxHeight: '1000px', minWidth: '200px', minHeight: '50px'}}>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}
