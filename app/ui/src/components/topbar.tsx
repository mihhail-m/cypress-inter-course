import {AppBar, Grid, Toolbar, Typography} from '@mui/material';

const TopBar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Grid container direction="row" justifyContent="center">
          <Typography variant="h3" component="h3" align="center">
            Library
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
