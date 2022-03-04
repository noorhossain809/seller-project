import { Box, Card, CardContent, Grid, Rating, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import DatePicker from '@mui/lab/DatePicker';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';


const ProductInfo = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        <Box>
            <Card sx={{ border: 1, borderColor: 'grey.500', borderRadius: 4, marginTop: 1, }}>
                <CardContent>
                    <Grid >
                        <Box>
                            <Typography variant="body1" color="secondary" sx={{ fontWeight: 'bold', }}  >
                                Product Info
                            </Typography>
                            <Box >
                                <Grid container spacing={4} style={{ marginTop: '1px' }}>
                                    <Grid item xs={2}>
                                        <Typography variant="body1" color="grey.500" sx={{ fontWeight: 'bold', }}>
                                            Category
                                        </Typography>
                                    </Grid>
                                    <Grid xs={5} sx={{ padding: '28px', }}>
                                        <Typography variant="body1" color="grey.700" sx={{ fontWeight: 'bold', padding: '5px' }}>VideoGames</Typography>

                                    </Grid>
                                    <Grid xs={2} sx={{ padding: '28px', }}>
                                        <Typography variant="body1" color="grey.500" sx={{ fontWeight: 'bold', }}>Brand </Typography>


                                    </Grid>
                                    <Grid xs={3} sx={{ padding: '28px', }}>
                                        <Typography color="grey.700" sx={{ fontWeight: 'bold', }}>Lead SaiL</Typography>

                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} >
                                    <Grid item xs={4} >
                                        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', }}>
                                            ASIN
                                        </Typography>
                                        <Grid sx={{ display: 'flex', gap: 5, marginTop: '10px' }}>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', }}>
                                                B09172433z
                                            </Typography>
                                            <CollectionsOutlinedIcon />
                                        </Grid>
                                        <Typography color="grey.500" variant="body1" sx={{ fontWeight: 'bold', marginTop: '15px' }}>
                                            UPC
                                        </Typography>
                                        <Typography color="grey.500" variant="body1" sx={{ fontWeight: 'bold', marginTop: '50px' }}>
                                            MSKU
                                        </Typography>
                                        
                                    </Grid>
                                    <Grid xs={4} sx={{ padding: '28px', gap: '10px' }}>
                                        <Typography sx={{ paddingInline: 1 }}>Fees</Typography>
                                        <Grid sx={{ display: 'flex', marginTop: '10px' }}>
                                            <Typography sx={{ paddingInline: 1, fontWeight: 'bold' }}>$5.18</Typography>
                                            <FontAwesomeIcon icon={faCircleExclamation} size="lg"  color="grey"/>
                                        </Grid>
                                        <Typography color="grey.500" variant="body1" sx={{ fontWeight: 'bold', marginTop: '15px' }}>
                                            Oversized
                                        </Typography>
                                        <Grid sx={{ display: 'flex', gap: 2, }}>
                                            <Typography color="grey.500" variant="body1" sx={{ fontWeight: 'bold', marginTop: '5px' }}>
                                                No
                                            </Typography>
                                            <FontAwesomeIcon icon={faCircleExclamation} size="lg"  color="grey" style={{ marginTop: '5px'}} />
                                        </Grid>
                                        <Typography color="grey.500" variant="body1" sx={{ fontWeight: 'bold', marginTop: '15px' }}>
                                            Available From
                                        </Typography>
                                        
                                        

                                    </Grid>
                                    <Grid xs={4} sx={{ padding: '28px' }}>
                                        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', }}>Ratings</Typography>
                                        <Stack spacing={1} sx={{ marginTop: '5px' }}>
                                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />

                                        </Stack>
                                        <Typography color="grey.500" variant="body1" sx={{ fontWeight: 'bold', marginTop: '15px' }}>
                                            Max Price
                                        </Typography>
                                        <Typography color="grey.500" variant="body1" sx={{ fontWeight: 'bold', marginTop: '5px' }}>
                                            $16.99
                                        </Typography>

                                    </Grid>
                                    <Grid container spacing={5}>
                                        <Grid item xs={4}>
                                        <Typography color="grey.900" variant="body1" sx={{ fontWeight: '500', marginTop: '15px', marginLeft: '20px' }}>
                                            JDX 461216275
                                        </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                        <LocalizationProvider  dateAdapter={AdapterDateFns}>
                                            <Stack>
                                            <DatePicker
                                            disableFuture
                                            
                                            openTo="year"
                                            views={['year', 'month', 'day']}
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                            </Stack>

                                        </LocalizationProvider>
                                        </Grid>
                                    
                                </Grid>
                                </Grid>
                                

                            </Box>
                        </Box>
                    </Grid>
                    
                </CardContent>

            </Card>
        </Box>
    );
};

export default ProductInfo;