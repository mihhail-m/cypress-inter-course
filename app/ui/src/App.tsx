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
import ApplicationEvent from './components/applicationEvent';
import AddAuthorForm from './components/addAuthorForm';

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

const DisplayApplicationEvents = () => {
  const {loading, error, data} = useQuery(Query.getApplicationEvents, {
    pollInterval: 5000
  });

  return (
    <DisplayItems error={error} loading={loading} itemsName="Application Events">
      {data?.getAllEvents?.map(
        ({id, name, createdAt}: {id: string; name: string; createdAt: string}) => {
          return <ApplicationEvent id={id} name={name} createdAt={createdAt} />;
        }
      )}
    </DisplayItems>
  );
};


const DisplayBooks = () => {
  const {loading, error, data} = useQuery(Query.getBooks, {
    pollInterval: 5000
  });

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
  const {loading, error, data} = useQuery(Query.getAuthors, {
    pollInterval: 5000
  });

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

const ShowBooksButton = ({handleOnClick}: any) => {
  return <ShowItemsButton handleOnClick={handleOnClick}>Books</ShowItemsButton>
}

const ShowAuthorsButton = ({handleOnClick}: any) => {
  return <ShowItemsButton handleOnClick={handleOnClick}>Authors</ShowItemsButton>
}

const ShowApplicationEventsButton = ({handleOnClick}: any) => {
  return <ShowItemsButton handleOnClick={handleOnClick}>Application Events</ShowItemsButton>
}


const defaultTheme = createTheme();

function App() {
  const [createShowBooksEvent] = useMutation(Mutation.addApplicationEvent, {
    variables: {
      name: 'get-books',
    },
  });
  const [createShowAuthorsEvent] = useMutation(Mutation.addApplicationEvent, {
    variables: {
      name: 'get-authors',
    },
  });
  const [createShowApplicationEvent] = useMutation(Mutation.addApplicationEvent, {
    variables: {
      name: 'get-events',
    },
  });
  const [createDeleteBooksApplicationEvent] = useMutation(Mutation.addApplicationEvent, {
    variables: {
      name: 'delete-books'
    }
  });
  const [createDeleteAuthorsApplicationEvent] = useMutation(Mutation.addApplicationEvent, {
    variables: {
      name: 'delete-authors'
    }
  });

  const [itemsVisible, setShowItems] = useState({
    books: true,
    authors: false,
    events: false
  });

  const handleShowBooksOnClick = () => {
    setShowItems(prev => {
      prev = {
        books: !prev.books,
        authors: false,
        events: false
      }

      if (prev.books === true) createShowBooksEvent();

      return prev;
    });
  };
  const handleShowAuthorsOnClick = () => {
    setShowItems(prev => {
      prev = {
        authors: !prev.authors,
        books: false,
        events: false,
      }
      if (prev.authors === true) createShowAuthorsEvent();

      return prev;
    })
  };
  const handleShowEventsOnClick = () => {
    setShowItems(prev => {
      prev = {
        books: false,
        authors: false,
        events: !prev.events,
      }

      if (prev.events === true) createShowApplicationEvent();
      return prev;
    })
  };

  const [showAddBookForm, setShowAddBookForm] = useState(false);
  const handleShowAddBookForm = () => {
    setShowAddBookForm(prev => !prev);
  };

  const [showAddAuthorForm, setShowAuthorAddForm] = useState(false);
  const handleShowAddAuthorForm = () => {
    setShowAuthorAddForm(prev => !prev);
  };

  const [deleteBooks] = useMutation(Mutation.deleteAllBooks);
  const handleDeleteBooksOnClick = () => {
    createDeleteBooksApplicationEvent();
    deleteBooks();
  }

  const [deleteAuthors] = useMutation(Mutation.deleteAllAuthors);
  const handleDeleteAuthorsOnClick = () => {
    createDeleteAuthorsApplicationEvent();
    deleteAuthors();
  }

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
              <ShowAuthorsButton handleOnClick={handleShowAuthorsOnClick}/>
              <ShowBooksButton handleOnClick={handleShowBooksOnClick} />
              <ShowApplicationEventsButton handleOnClick={handleShowEventsOnClick} />
              {
                itemsVisible.books &&
                <Button onClick={handleShowAddBookForm}>
                  Add book
                </Button>
              }
              {
                itemsVisible.authors &&
                <Button onClick={handleShowAddAuthorForm}>
                  Add author
                </Button>
              }
              {
                itemsVisible.books &&
                <Button data-cy="delete-books" onClick={handleDeleteBooksOnClick}>Delete books</Button>
              }
              {
                itemsVisible.authors &&
                <Button data-cy="delete-authors" onClick={handleDeleteAuthorsOnClick}>Delete authors</Button>
              }
            </Stack>
          </Container>
        </Box>

        {showAddBookForm ? <AddBookForm /> : null}
        {showAddAuthorForm ? <AddAuthorForm /> : null}
        {itemsVisible.books ? <DisplayBooks /> : null}
        {itemsVisible.authors ? <DisplayAuthors /> : null}
        {itemsVisible.events ? <DisplayApplicationEvents /> : null}
      </main>
    </ThemeProvider>
  );
}

export default App;
