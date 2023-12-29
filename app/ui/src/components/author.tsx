import {
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const Author = ({
  id,
  firstName,
  lastName,
  books,
}: {
  id: string;
  firstName: string;
  lastName: string;
  books: string[];
}) => {
  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card
        data-cy="author-comp"
        sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
      >
        <CardContent sx={{flexGrow: 1}}>
          <Typography data-cy="name" gutterBottom variant="h5" component="h2">
            {firstName} {lastName}
          </Typography>
          <Typography data-cy="id">ID: {id}</Typography>
          <List component="ul">
            Books:
            {books?.map((bookId: any) => {
              return (
                <ListItem component="li" key={bookId.title}>
                  <ListItemText primary={bookId.title} />
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Author;
