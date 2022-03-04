import { ButtonGroup, CardMedia, Container, Grid } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../images/mouse.jpg'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { green, pink, red } from '@mui/material/colors';
import Calculator from '../Calculator/Calculator';
import ProductInfo from '../ProductInfo/ProductInfo';
import Profit from '../Profit/Profit';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { HiDotsCircleHorizontal } from 'react-icons/hi';


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',

    pointerEvents: 'none',
    alignItems: 'end',
    justifyContent: 'end',
}));

const options = ['Create a merge commit', 'Save', 'Rebase and merge'];

const DocComponent = () => {

    const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={12} md={6} sx={{ marginTop: 4, marginBottom: 4 }}>
                    <Card sx={{ border: 1, borderColor: 'grey.500', borderRadius: 4 }}>
                        <CardContent>
                            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={2}>
                                    <CardMedia
                                        component="img"

                                        image={img}
                                        alt=""
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold', text: 'disabled' }} component="div" gutterBottom>
                                        Product Name
                                    </Typography>
                                    <Typography variant="subtitle2" mt={2} sx={{ fontWeight: 'bold', text: 'disabled' }} component="div" gutterBottom>
                                        LeadsaiL Gaming Mouse Wired R...
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} mt={3} justifyContent="flex-end">
                                    <SearchIconWrapper >
                                        <SearchIcon sx={{ fontSize: 40, color: green[400] }} />
                                    </SearchIconWrapper>
                                </Grid>

                            </Grid>
                        </CardContent>

                    </Card>
                    <Calculator></Calculator>
                    <ProductInfo></ProductInfo>
                </Grid>
                <Grid item xs={12} md={6} sx={{ marginTop: 4, marginBottom: 4 }}>
                    <Card  sx={{ height: 50, border: 1, borderColor: 'grey.500', borderRadius: 4 }}>
                        <Box>
                            <CardContent>
                                <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                    <Grid>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold',}} color="secondary">
                                        Overall Score
                                    </Typography>
                                    </Grid>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold',fontSize: 20, color: red[500],}}>
                                        0.00%
                                    </Typography>
                                    </Grid>
                                   
                                    </Grid>
                            </CardContent>
                        </Box>

                    </Card>
                    <Profit></Profit>
                </Grid>


            </Grid>
            <Grid sx={{ display: 'flex', gap: 1}}>
            <ButtonGroup variant="contained" color="secondary" ref={anchorRef} aria-label="split button" sx={{mb:1, }}>
        <Button onClick={handleClick} sx={{borderRadius: 6, width: '75%'}}>{options[selectedIndex]} </Button>
        <Button
          sx={{borderRadius: 6, borderLeft: 1, borderColor: 'white', borderWidth: '2px'}}
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
            <ButtonGroup variant="contained" color="secondary" ref={anchorRef} aria-label="split button" sx={{mb:1,}}>
        <Button onClick={handleClick} sx={{borderRadius: 6, }}>Approve & Next </Button>
        <Button
          sx={{borderRadius: 6, borderLeft: 1, borderColor: 'white', borderWidth: '2px'}}
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Button variant="contained" color='secondary' sx={{borderRadius: 6, height: 1}}>Variations </Button>
      <ButtonGroup variant="contained" color="secondary" ref={anchorRef} aria-label="split button" sx={{mb:1,}}>
        <Button onClick={handleClick} sx={{borderRadius: 6, }}>Search On </Button>
        <Button
          sx={{borderRadius: 6, borderLeft: 1, borderColor: 'white', borderWidth: '2px'}}
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <HiDotsCircleHorizontal style={{fontSize: 40, color: '#6d1b7b',}} />
            </Grid>
        </Container>
    );
};

export default DocComponent;