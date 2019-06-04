import {createStyles} from '@material-ui/core/styles';

export const styles = createStyles(theme => ({
  authPanel: {
    marginTop: '10em',
    padding: 20,
    minWidth: 300,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: theme.palette.background.paper,
    display: 'inline-block'
  },
  inputForm: {
    marginBottom: 10,
  },
  section: {
    paddingTop: 20,
  }
}));