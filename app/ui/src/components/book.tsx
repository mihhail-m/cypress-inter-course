import {Grid, Card, CardContent, Typography} from '@mui/material';

const Book = ({id, isbn, title}: {id: string; isbn: string; title: string}) => {
  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card
        data-cy="book-comp"
        sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
      >
        <CardContent sx={{flexGrow: 1}}>
          <Typography data-cy="title" gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography data-cy="id">ID: {id}</Typography>
          <Typography data-cy="isbn">ISBN: {isbn}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Book;
