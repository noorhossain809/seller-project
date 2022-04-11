import { Card, CardContent, CardMedia, Grid, Slider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { CgCalculator } from 'react-icons/cg';
import DisplayCalculator from '../DisplayCalculator/DisplayCalculator';


const inputValue = [

    {
        price: '$5.01',
        sellPrice: '$6.01',
        Qty: '1',
        BQty: '1',
        discount: '0.00%'
    }

]




const Calculator = () => {
    return (

        <Box>
            <Card sx={{ border: 1, borderColor: 'grey.500', borderRadius: 4, marginTop: 1, height: '220px' }}>
                <CardContent>

                    <Box>
                        <Typography variant="body1" color="secondary" sx={{ fontWeight: 'bold', }}  >
                            Calculator
                        </Typography>
                        <Box >
                            <Grid container spacing={3} style={{ marginTop: '1px', marginLeft: '0px' }}>
                                {
                                    inputValue.map(inpValue => <DisplayCalculator inpValue={inpValue}></DisplayCalculator>)
                                }
                            </Grid>

                        </Box>
                    </Box>

                </CardContent>

            </Card>
            <div>

            </div>

            {/* <Card sx={{ border: 1, borderColor: 'grey.500', borderRadius: 4, marginTop: 1, height: '220px'}}>
                <CardContent>
                    <Grid >
                        <Box>
                            <Typography variant="body1" color="secondary" sx={{ fontWeight: 'bold', }}  >
                                Calculator
                            </Typography>
                            <Box >
                            <Grid container spacing={3} style={{marginTop: '1px'}}>
                                <Grid item xs={3}>
                                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', }}>
                                        Buy Price
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', marginTop: '30px'}}>
                                        Qty
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', marginTop: '30px'}}>
                                        Discount
                                    </Typography>
                                </Grid>
                                <Grid xs={4}>
                                <Grid  sx={{ display: 'flex', padding: '28px', gap: '10px',}}>
                                    <Typography sx={{ border: 1, borderColor: 'grey.500', borderRadius: 1, paddingInline: 1 }}>$5.01</Typography>
                                    <CgCalculator style={{ width: '30px', height: '30px', backgroundColor: "#9500ae", borderRadius: 2 }} />
                                </Grid>
                                <Typography sx={{ border: 1, borderColor: 'grey.500', borderRadius: 1, paddingInline: 1, width: '50px', marginLeft: '25px'}}>$5.01</Typography>
                                <Box sx={{ width: 300, marginTop: '20px' }}>
                                        <Slider
                                            aria-label="Temperature"
                                            defaultValue={0}
                                            getAriaValueText={valuetext}
                                            color="secondary"
                                        />
                                    </Box>
                                </Grid>
                                <Grid xs={5} >
                                <Grid sx={{ display: 'flex', padding: '28px', gap: '20px' }}>
                                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', }}>Sell Price</Typography>
                                    <Typography sx={{ border: 1, borderColor: 'grey.500', borderRadius: 1, paddingInline: 1 }}>$5.01</Typography>

                                </Grid>
                                <Grid sx={{ display: 'flex', gap: '10px', marginLeft: '25px' }}>
                                <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', }}>Bundle Qty</Typography>
                                <Typography sx={{  borderRadius: 1, paddingInline: 1, width: '40px', backgroundColor: 'grey.500'}}>1</Typography>
                                </Grid>
                                <Typography color="#66bb6a" sx={{ border: 1, borderColor: 'grey.500', borderRadius: 1, paddingInline: 2, width: '40px', marginTop: '25px', marginLeft: '135px' }}>0.00%</Typography>
                                </Grid>
                            </Grid>
                        
                            
                            </Box>
                        </Box>
                    </Grid>
                </CardContent>

            </Card> */}
        </Box>
    );
};

export default Calculator;