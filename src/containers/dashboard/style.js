import { createStyles } from '@material-ui/core/styles';
import { styles as common } from '../style';
import { Colors } from '../../services/theme'

export const styles = createStyles(theme => ({
  ...common,

  container: { display: 'flex', justifyContent: 'center', position: 'relative' },
  content: {
    [theme.breakpoints.up('sm')]: {
      width: '70%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '92%',
    },
    textAlign: 'left',
  },
  row: { paddingTop: theme.spacing(5), paddingBottom: theme.spacing(5), position: 'relative' },
  lowOrder: { order: 2 },
  center: { textAlign: 'center' },
  title: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    color: Colors.EbonyClay,
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: 1.1,
    textAlign: 'center'
  },
  subTitle: {
    paddingTop: theme.spacing(5),
    color: Colors.EbonyClay,
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.1,
    textAlign: 'center'
  },
  description: {
    color: Colors.ShuttleGray,
    fontSize: '1.05rem',
    fontWeight: 500,
    paddingTop: theme.spacing(4),
    textAlign: 'center',
  },

  logoHeader: {
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2)
    },
  },
  logo: { maxWidth: '35%' },

  downloadLinks: {
    paddingTop: theme.spacing(3)
  },
  downloadLink: {
    maxWidth: '100%'
  },

  phones: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),
    },
    position: 'relative',
  },
  phone: {
    maxWidth: '100%',
  },
  instantPays: {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
  },
}));