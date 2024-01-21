import {Grid, Card, CardContent, Typography} from '@mui/material';

const ApplicationEvent = ({id, name, createdAt}: {id: string; name: string; createdAt: string}) => {
  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card
        data-cy="event-comp"
        sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
      >
        <CardContent sx={{flexGrow: 1}}>
          <Typography data-cy="eventName" gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography data-cy="eventId">ID: {id}</Typography>
          <Typography data-cy="createdAt">Created At: {createdAt}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ApplicationEvent;
