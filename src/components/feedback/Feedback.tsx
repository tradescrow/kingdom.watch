import { useForm, SubmitHandler } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

type Inputs = {
  typeSubmission: string;
  title: string;
  message: string;
  account: string;
  discordHandle: string;
  email: string;
};

function Feedback() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <Container component="div" sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h4" sx={{ marginBottom: '1.35em' }}>
        Feedback, feature requests and bug reports
      </Typography>

      <Grid
        component="form"
        container
        spacing={2}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          '& .MuiGrid-container': {
            justifyContent: 'center',
            alignItems: 'center',
          },
          '& .MuiTypography-root': {
            margin: '8px',
          },
        }}
      >
        <Grid container xs={2}>
          <Typography variant="subtitle1">Type of feedback</Typography>
        </Grid>
        <Grid container xs={10}>
          <TextField
            id="select-feedback"
            label="Please select type"
            select
            fullWidth
            defaultValue=""
            {...register('typeSubmission', { required: true })}
            required
            size="small"
            error={errors.typeSubmission ? true : undefined}
            helperText={
              errors.typeSubmission ? 'type of submission is empty' : undefined
            }
          >
            <MenuItem key="1" value="Feedback">
              Feedback
            </MenuItem>
            <MenuItem key="2" value="Feature request">
              Feature request
            </MenuItem>
            <MenuItem key="3" value="Bug report">
              Bug report
            </MenuItem>
          </TextField>
        </Grid>
        <Grid container xs={2}>
          <Typography variant="subtitle1">Title</Typography>
        </Grid>
        <Grid container xs={10}>
          <TextField
            id="outlined-basic"
            label="Title of message"
            variant="outlined"
            fullWidth
            required
            size="small"
            {...register('title', { required: true })}
            error={errors.title ? true : undefined}
            helperText={errors.title ? 'title is empty' : undefined}
          />
        </Grid>
        <Grid container xs={2}>
          <Typography variant="subtitle1">Message</Typography>
        </Grid>
        <Grid container xs={10}>
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={6}
            variant="outlined"
            fullWidth
            required
            {...register('message', { required: true })}
            error={errors.message ? true : undefined}
            helperText={errors.message ? 'message is empty' : undefined}
          />
        </Grid>
        <Grid container xs={2}>
          <Typography variant="subtitle1">Account Address</Typography>
        </Grid>
        <Grid container xs={10}>
          <TextField
            id="outlined-basic"
            label="Optional account address to recreate error"
            variant="outlined"
            fullWidth
            size="small"
            {...register('account')}
          />
        </Grid>

        <Divider
          flexItem
          variant="fullWidth"
          sx={{ width: '100%', borderColor: '#fafafa', opacity: '0.1' }}
        ></Divider>

        <Grid container xs={12}>
          <Typography variant="subtitle1">
            If you want me to be able to get back to you, consider providing at
            least one of these fields.
          </Typography>
        </Grid>
        <Grid container xs={2}>
          <Typography variant="subtitle1">Discord handle</Typography>
        </Grid>
        <Grid container xs={10}>
          <TextField
            id="outlined-basic"
            label="Optional Discord handle"
            variant="outlined"
            fullWidth
            size="small"
            {...register('discordHandle')}
          />
        </Grid>
        <Grid container xs={2}>
          <Typography variant="subtitle1">Email address</Typography>
        </Grid>
        <Grid container xs={10}>
          <TextField
            id="outlined-basic"
            label="Optional Email address"
            variant="outlined"
            fullWidth
            size="small"
            {...register('email')}
          />
        </Grid>
        <Button variant="contained" type="submit" sx={{ marginTop: '3rem' }}>
          Send
        </Button>
      </Grid>
    </Container>
  );
}

export default Feedback;
