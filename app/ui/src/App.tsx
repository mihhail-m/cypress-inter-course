import './App.css';
import {useQuery} from '@apollo/client';
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
} from '@mui/material';
import TopBar from './components/topbar';
import Author from './components/author';
import {useState} from 'react';

const DisplayItems = ({children, loading, error}: any) => {
  if (loading) return <p>Loading data...</p>;
  if (error) return <p>There is an error: {error?.message}</p>;

  return (
    <Container sx={{py: 8}} maxWidth="md">
      <Grid container spacing={4}>
        {children}
      </Grid>
    </Container>
  );
};

const DisplayBooks = () => {
  const {loading, error, data} = useQuery(Query.getBooks);

  return (
    <DisplayItems error={error} loading={loading}>
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
    <DisplayItems loading={loading} error={error}>
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
  const [isBooksVisible, setShowBooks] = useState(true);
  const handleOnClick = () => {
    setShowBooks(prev => !prev);
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
            </Stack>
          </Container>
        </Box>
        {isBooksVisible ? <DisplayBooks /> : <DisplayAuthors />}
      </main>
    </ThemeProvider>
  );
}

export default App;
