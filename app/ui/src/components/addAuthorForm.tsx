import {useMutation} from '@apollo/client';
import {Button, Container, Typography, TextField, Grid} from '@mui/material';
import {useState} from 'react';
import Mutation from '../gql/mutation';

const AddAuthorForm = (props: any) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });
  const [addAuthor, {data, loading, error}] = useMutation(
    Mutation.addAuthor,
    {
      variables: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
    }
  );
  const [addEvent] = useMutation(Mutation.addApplicationEvent, {
    variables: {
      name: 'create-author',
    },
  });

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
    addAuthor();
    addEvent();
  };

  return (
    <Container maxWidth="sm" sx={{mb: 4}}>
      <Typography variant="h3" align="center">
        New Author
      </Typography>

      <br />

      {data ? (
        <Typography variant="h4" align="center">
          New author has been submitted
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
           <Grid item xs={12}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Firstname"
                fullWidth
                variant="outlined"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Lastname"
                fullWidth
                variant="outlined"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit">
                Add author
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Container>
  );
};

export default AddAuthorForm;
