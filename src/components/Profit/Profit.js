import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCoffee, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion, faThumbsUp } from '@fortawesome/free-regular-svg-icons';

const Profit = () => {
    return (
        <Card sx={{ border: 1, borderColor: 'grey.500', borderRadius: 4, marginTop: 1, }}>
            <CardContent >

                <Box>
                    <Grid sx={{ display: 'flex', gap: 2 }}>
                        <FontAwesomeIcon icon={faThumbsUp} size="2x" color="#66bb6a" />

                        <Grid sx={{ padding: '2px', display: 'flex', gap: 2 }}>
                            <Typography variant="body1" color="grey.500" sx={{ fontWeight: 'bold', }}  >
                                Profitability
                            </Typography>
                            <Typography variant="body1" color="#66bb6a" sx={{ fontWeight: 'bold', }}  >
                                Profitability is Excellent
                            </Typography>
                            <Typography variant="body1" color="grey.500" sx={{ fontWeight: 'bold', }}  >
                                Collapse All
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box sx={{ borderBottom: 1, borderColor: '#9e9e9e', padding: '10px', borderWidth: '2px' }}>
                        <Grid container spacing={4} >
                            <Grid item xs={4}>
                                <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', }}>
                                    ROI
                                </Typography>
                                <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', marginTop: '10px' }}>
                                    Profit
                                </Typography>
                                <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', marginTop: '10px' }}>
                                    Lead Win Rate
                                </Typography>
                            </Grid>
                            <Grid xs={3} sx={{ marginTop: '35px', }}>
                                <Typography variant="body1" color="grey.700" sx={{ fontWeight: 'bold', }}>199.80%</Typography>
                                <Typography variant="body1" color="grey.700" sx={{ fontWeight: 'bold', marginTop: '10px' }}>$10.01/unit</Typography>
                                <Typography variant="body1" color="grey.700" sx={{ fontWeight: 'bold', marginTop: '10px' }}>100.00%</Typography>

                            </Grid>
                            <Grid xs={3} sx={{ marginTop: '35px', }}>
                                <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', }}>Margin </Typography>
                                <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', marginTop: '10px' }}>Total Profit </Typography>
                                <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', marginTop: '10px' }}>Breakeven </Typography>


                            </Grid>
                            <Grid xs={2} sx={{ marginTop: '35px', }}>
                                <Typography color="grey.700" sx={{ fontWeight: 'bold', }}>49.55%</Typography>
                                <Typography color="grey.700" sx={{ fontWeight: 'bold', marginTop: '10px' }}>$10.01</Typography>
                                <Typography color="grey.700" sx={{ fontWeight: 'bold', marginTop: '10px' }}>$9.32</Typography>

                            </Grid>
                        </Grid>
                    </Box>
                    <Grid container >
                        <Grid sx={{ display: 'flex', gap: 10, marginTop: '15px' }}>
                            <Grid sx={{ display: 'flex', gap: 1 }}>
                                <FontAwesomeIcon icon={faCircleQuestion} size="2x" color="grey" />
                                <Typography variant="body1" color="grey.500" sx={{ fontWeight: 'bold', marginTop: '2px' }}  >
                                    Red Flags
                                </Typography>
                            </Grid>
                            <Grid sx={{ padding: '2px', display: 'flex', gap: 1 }}>

                                <Typography variant="body1" color="#f44336" sx={{ fontWeight: 'bold', }}  >
                                    Login into Seller
                                </Typography>
                                <Typography variant="body1" color="#f44336" sx={{ fontWeight: '500', }}  >
                                    Central
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ padding: '10px', borderBottom: 1, borderColor: '#9e9e9e', borderWidth: '2px' }}>
                            <Grid item xs={6}>
                                <Grid>
                                    <Grid sx={{ display: 'flex', gap: 3 }}>
                                        <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', }}>
                                            Eligibility
                                        </Typography>
                                        <FontAwesomeIcon icon={faMinus} color="grey" style={{ padding: '5px' }} />
                                    </Grid>
                                    <Grid sx={{ display: 'flex', gap: 3 }}>
                                        <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', my: 1 }}>
                                            Hazmat
                                        </Typography>
                                        <FontAwesomeIcon icon={faMinus} color="grey" style={{ padding: '12px' }} />
                                    </Grid>
                                    <Grid sx={{ display: 'flex', gap: 5 }}>
                                        <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', }}>
                                            IPI Risk
                                        </Typography>
                                        <Typography variant="body1" color="#ffd600" sx={{ fontWeight: '500', }}>
                                            Medium
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} >

                                <Grid sx={{ display: 'flex', gap: 6 }}>
                                    <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', }}>
                                        Dangerous
                                    </Typography>
                                    <FontAwesomeIcon icon={faMinus} color="grey" style={{ padding: '5px' }} />

                                </Grid>
                                <Grid sx={{ display: 'flex', gap: 8, my: 1 }}>
                                    <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', }}>
                                        MelTable
                                    </Typography>
                                    <Typography variant="body1" color="#66bb6a" sx={{ fontWeight: '600', }}>
                                        No
                                    </Typography>

                                </Grid>
                                <Grid sx={{ display: 'flex', gap: 12 }}>
                                    <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', }}>
                                        BBS
                                    </Typography>
                                    <FontAwesomeIcon icon={faCircle} color="#66bb6a" style={{ padding: '5px' }} />


                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid container >
                        <Grid sx={{ display: 'flex', gap: 15, marginTop: '15px' }}>
                            <Grid sx={{ display: 'flex', gap: 1 }}>
                                <FontAwesomeIcon icon={faThumbsUp} size="2x" color="#66bb6a" />
                                <Typography variant="body1" color="grey.500" sx={{ fontWeight: 'bold', mt: '2px', p: '2px' }}  >
                                    Demand
                                </Typography>
                            </Grid>
                            <Typography variant="body1" color="#66bb6a" sx={{ fontWeight: 'bold', p: '2px' }}  >
                                Sales is Excellent
                            </Typography>
                        </Grid>
                        <Grid container sx={{ padding: '10px', borderBottom: 1, borderColor: '#9e9e9e', borderWidth: '2px' }}>
                            <Grid item xs={6}>
                                <Grid>
                                    <Grid sx={{ display: 'flex', gap: 8 }}>
                                        <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', }}>
                                            Metrics
                                        </Typography>
                                        <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', }}>
                                            Current
                                        </Typography>

                                    </Grid>
                                    <Grid sx={{ display: 'flex', gap: 9 }}>
                                        <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', my: 1 }}>
                                            Sales(E)
                                        </Typography>
                                        <Typography variant="body1" color="#66bb6a" sx={{ fontWeight: '500', my: 1 }}>
                                            222
                                        </Typography>

                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid item xs={6} >

                                <Grid sx={{ display: 'flex', gap: 13 }}>
                                    <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', }}>
                                        30D
                                    </Typography>
                                    <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', }}>
                                        90D
                                    </Typography>


                                </Grid>
                                <Grid sx={{ display: 'flex', gap: 13, my: 1 }}>
                                    <Typography variant="body1" color="#66bb6a" sx={{ fontWeight: '500', }}>
                                        434
                                    </Typography>
                                    <Typography variant="body1" color="#66bb6a" sx={{ fontWeight: '600', }}>
                                        166
                                    </Typography>

                                </Grid>
                                <Grid sx={{ display: 'flex', gap: 12 }}>




                                </Grid>
                            </Grid>
                            <Grid sx={{ display: 'flex', gap: 6 }}>
                                <Typography variant="body1" color="grey.500" sx={{ fontWeight: '500', }}>
                                    BSR #|%
                                </Typography>
                                <Typography variant="body1" color="#66bb6a" sx={{ fontWeight: '500', }}>
                                    3.8K | 0.37%
                                </Typography>
                                <Typography variant="body1" color="#66bb6a" sx={{ fontWeight: '500', }}>
                                    2K | 0.19%
                                </Typography>
                                <Typography variant="body1" color="#66bb6a" sx={{ fontWeight: '500', }}>
                                    4.7K | 0.45%
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid sx={{ display: 'flex', gap: 15, marginTop: '15px' }}>
                        <Grid sx={{ display: 'flex', gap: 1 }}>
                            <FontAwesomeIcon icon={faThumbsUp} size="2x" color="#66bb6a" />
                            <Typography variant="body1" color="grey.500" sx={{ fontWeight: 'bold', mt: '2px', p: '2px' }}  >
                                Supply
                            </Typography>
                        </Grid>
                        <Typography variant="body1" color="#66bb6a" sx={{ fontWeight: 'bold', p: '2px' }}  >
                            Supply is Excellent
                        </Typography>
                    </Grid>

                </Box>
            </CardContent>
        </Card>
    );
};

export default Profit;