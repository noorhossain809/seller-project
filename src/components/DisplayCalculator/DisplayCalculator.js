import React from 'react';
import { Card, CardContent, CardMedia, Grid, Slider, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { CgCalculator } from 'react-icons/cg';

function valuetext(value) {
    return `${value}°C`;
}

const DisplayCalculator = (props) => {
    const {price,sellPrice,Qty,BQty,discount} = props.inpValue;
    return (
        <Box>
           
                                <Grid item xs={12}>
                                    <Grid sx={{display: 'flex', gap: '70px'}}>
                                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', }}>
                                        Buy Price
                                    </Typography>
                                    <Grid  sx={{ display: 'flex',height: '30px', gap: '10px',}}>
                                    <Typography sx={{ border: 1, borderColor: 'grey.500', borderRadius: 1, paddingInline: 1 }}>{price}</Typography>
                                    <CgCalculator style={{ width: '30px', height: '30px', backgroundColor: "#9500ae", borderRadius: 2 }} />
                                </Grid>
                                <Grid sx={{ display: 'flex', height: '28px', gap: '20px' }}>
                                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', }}>Sell Price</Typography>
                                    <Typography sx={{ border: 1, borderColor: 'grey.500', borderRadius: 1, paddingInline: 1 }}>{sellPrice}</Typography>

                                </Grid>
                                    </Grid>
                                    <Grid sx={{display: 'flex',marginTop: '30px', gap: '120px'}}>
                                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', }}>
                                        Qty
                                    </Typography>
                                    
                                
                                <Typography sx={{  borderRadius: 1, paddingInline: 1, width: '40px', backgroundColor: 'grey.500', }}>1</Typography>
                   
                                    <Grid sx={{ display: 'flex', gap: '10px', }}>
                                <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', }}>Bundle Qty</Typography>
                                <Typography sx={{  borderRadius: 1, paddingInline: 1, width: '40px', backgroundColor: 'grey.500'}}>1</Typography>
                                </Grid>
                                    </Grid>
                                    <Grid sx={{ display: 'flex', gap: '20px',marginTop: '30px'}}>
                                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', }}>
                                        Discount
                                    </Typography>
                                    
                                <Box sx={{ width: 300, }}>
                                        <Slider
                                            aria-label="Temperature"
                                            defaultValue={0}
                                            getAriaValueText={valuetext}
                                            color="secondary"
                                        />
                                    </Box>
                                    <Typography color="#66bb6a" sx={{ border: 1, borderColor: 'grey.500', borderRadius: 1, paddingInline: 2, width: '40px',  marginLeft: '0px' }}>0.00%</Typography>
                                    </Grid>
                                
                                </Grid>
                                
                                
                                
                                <Grid xs={5} >
                              
                                
                               
                                </Grid>
                            
       </Box>
    );
};

export default DisplayCalculator;