import { useState } from "react";
import Supabase from '../models/SupabaseClient';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    height: '90vh',
    paddingTop: '30vh',
  },
  buttonSubmit: {
    backgroundColor: '#212121',
    color: '#ffffff'
  }
}));

const Auth = () => {
  const classes = useStyles();

  const [ loading, setLoading ] = useState(false);
  const [ email, setEmail ] = useState('');

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { error } = await Supabase.auth.signIn({ email });

      if (error) throw error;
      alert('Check your email for login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <h1 style={{ marginBottom: '10%', textAlign: 'center' }}>Movie Trend</h1>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="email"
                  size="small"
                  variant="outlined"
                  placeholder="Your email"
                  value={email}
                  onChange={ (event) => setEmail(event.target.value) }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button 
              className={ classes.buttonSubmit }
              fullWidth 
              type="submit"
              onClick={ (event) => {
                event.preventDefault();
                handleLogin(email);
              }}
              variant="contained">
              { loading ? <span>Loading</span> : <span>Send magic link</span> }
            </Button>
          </Grid>
        </Grid>
    </Container>
  );
};

export default Auth;
