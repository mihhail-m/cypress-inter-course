import {useMutation} from '@apollo/client';
import {Button, Container, Typography, TextField, Grid} from '@mui/material';
import {useState} from 'react';
import Mutation from '../gql/mutation';

const AddBookForm = (props: any) => {
  const [formData, setFormData] = useState({
    title: '',
    isbn: '',
    authorFirstName: '',
    authorLastName: '',
  });
  const [addBook, {data, loading, error}] = useMutation(
    Mutation.addNewBookAndAuthor,
    {
      variables: {
        title: formData.title,
        isbn: formData.isbn,
        firstName: formData.authorFirstName,
        lastName: formData.authorLastName,
      },
    }
  );

  if (loading) return <p>Submitting data...</p>;
  if (error) return <p>There been error during submission.</p>;

  const handleChange = (e: any) => {
    const {name, value}: {name: string; value: string} = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addBook();
  };

  return (
    <Container maxWidth="sm" sx={{mb: 4}}>
      <Typography variant="h3" align="center">
        New book
      </Typography>

      <br />

      {data ? (
        <Typography variant="h4" align="center">
          Book has been submitted
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="title"
                label="Title"
                name="title"
                fullWidth
                variant="outlined"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="isbn"
                label="ISBN"
                name="isbn"
                fullWidth
                variant="outlined"
                value={formData.isbn}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="authorFistName"
                name="authorFirstName"
                label="Firstname"
                fullWidth
                variant="outlined"
                value={formData.authorFirstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="authorLastName"
                name="authorLastName"
                label="Lastname"
                fullWidth
                variant="outlined"
                value={formData.authorLastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit">
                Add book
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Container>
  );
};

export default AddBookForm;
