import './App.css';
import {useMutation, useQuery} from '@apollo/client';
import Query from './gql/query';
import Book from './components/book';
import {
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
  Stack,
  Button,
  Box,
  Typography,
} from '@mui/material';
import TopBar from './components/topbar';
import Author from './components/author';
import {useState} from 'react';
import AddBookForm from './components/addBookForm';
import Mutation from './gql/mutation';

const DisplayItems = ({children, loading, error, itemsName}: any) => {
  if (loading) return <p>Loading data...</p>;
  if (error) return <p>There is an error: {error?.message}</p>;

  return (
    <Container sx={{py: 8}} maxWidth="md">
      <Stack spacing={4}>
        <Grid container justifyContent="center">
          <Typography variant="h3">{itemsName}</Typography>
        </Grid>
        <Grid container spacing={4}>
          {children}
        </Grid>
      </Stack>
    </Container>
  );
};

const DisplayBooks = () => {
  const {loading, error, data} = useQuery(Query.getBooks);

  return (
    <DisplayItems error={error} loading={loading} itemsName="Books">
      {data?.getBooks?.map(
        ({id, isbn, title}: {id: string; isbn: string; title: string}) => {
          return <Book id={id} isbn={isbn} title={title} />;
        }
      )}
    </DisplayItems>
  );
};

const DisplayAuthors = () => {
  const {loading, error, data} = useQuery(Query.getAuthors);

  return (
    <DisplayItems loading={loading} error={error} itemsName="Authors">
      {data?.getAuthors?.map(
        ({
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
            <Author
              id={id}
              firstName={firstName}
              lastName={lastName}
              books={books}
            />
          );
        }
      )}
    </DisplayItems>
  );
};

const ShowItemsButton = ({children, handleOnClick}: any) => {
  return (
    <Button variant="contained" onClick={handleOnClick}>
      {children}
    </Button>
  );
};

const defaultTheme = createTheme();

function App() {
  const [createShowItemsEvent] = useMutation(Mutation.addApplicationEvent, {
    variables: {
      name: 'get-items',
    },
  });
  const [isBooksVisible, setShowBooks] = useState(true);
  const handleOnClick = () => {
    setShowBooks(prev => !prev);
    createShowItemsEvent();
  };
  const [showAddBookForm, setShowAddBookForm] = useState(false);
  const handleShowAddBookForm = () => {
    setShowAddBookForm(prev => !prev);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <TopBar />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Stack
              sx={{pt: 4}}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {isBooksVisible ? (
                <ShowItemsButton handleOnClick={handleOnClick}>
                  Show Authors
                </ShowItemsButton>
              ) : (
                <ShowItemsButton handleOnClick={handleOnClick}>
                  Show Books
                </ShowItemsButton>
              )}
              {isBooksVisible && (
                <Button onClick={handleShowAddBookForm}>
                  Show add book form
                </Button>
              )}
            </Stack>
          </Container>
        </Box>

        {showAddBookForm && <AddBookForm />}
        {isBooksVisible ? <DisplayBooks /> : <DisplayAuthors />}
      </main>
    </ThemeProvider>
  );
}

export default App;
