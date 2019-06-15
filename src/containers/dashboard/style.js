import { createStyles } from '@material-ui/core/styles';
import { styles as common } from '../style';
import { Colors } from '../../services/theme'
import { footerImage , circleShadeBGImage } from '../../images'

export const styles = createStyles(theme => ({
  ...common,

  container: { display: 'flex', alignItems: 'center', position: 'relative', flexDirection: 'column' },
  content: {
    [theme.breakpoints.up('sm')]: {
      width: '70%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '92%',
    },
    textAlign: 'left',
    marginTop : 45,
  },
  row: { paddingTop: theme.spacing(5), paddingBottom: theme.spacing(5), position: 'relative' },
  lowOrder: { order: 2 },
  centerContent: { alignItems: 'center', justifyContent: 'center' },
  center: { textAlign: 'center' },
  left : { textAlign : 'left' },
  right : { textAlign : 'right' },
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
  social : {
    [theme.breakpoints.up('md')]: {
      maxWidth : '22%'
    },
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
    maxWidth: 405,
    margin: 'auto',
  },
  whiteText: { color: 'white' },
  lightPeriwinkleText: { color: Colors.LightPeriwinkle },
  topUpContainer: {
    position: 'relative',
    marginTop: '10%',
    marginRight: 'auto',
    marginLeft: 'auto',
    minWidth: 350,
    maxWidth: 450,
    height: 430,
    borderRadius: 10,
    backgroundColor: 'white',
    boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.44);',
    display: 'flex',
    flexDirection: 'column',
  },

  header: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '15%',
      paddingRight: '15%',
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '4%',
      paddingRight: '4%',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(5),
    },
  },
  textButton: {
    textDecoration: 'none'
  },
  textButtonTitle: {
    color: Colors.LightPeriwinkle
  },
  logos: { textAlign: 'left' },
  logo: { maxWidth: '50%' },

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
    maxHeight: 500,
  },
  instantPays: {
    paddingTop: theme.spacing(4),
    textAlign: 'center',
  },
  instantPay: {
    height: 40,
    margin: theme.spacing(1)
  },
  payDescription: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '20%',
      paddingRight: '20%',
    },
  },

  decorateImage1: {
    zIndex: -10,
    position: 'absolute',
    left: '75%',
    top: '10%',
  },
  decorateImage2: {
    zIndex: -10,
    position: 'absolute',
    right: '50%',
    top: '75%',
    width: '85%',
  },
  decorateImage3: {
    position: 'absolute',
    left: -theme.spacing(4),
    top: '25%',
    width: '20%',
  },
  decorateImage4: {
    position: 'absolute',
    right: -theme.spacing(5),
    top: '75%',
    width: '24%',
  },
  backgroundImageTopContainer : {
    top: -131,
    left: -145,
    width: 740,
    height: 565,
    zIndex: -10,
    position: 'absolute',
    backgroundImage : `url(${circleShadeBGImage})`,
  },
  backgroundImage0: {
    zIndex: -10,
    position: 'absolute',
  },
  backgroundImage1: {
    zIndex: -20,
    position: 'absolute',
    left: '25%',
    top: -theme.spacing(10),
    width: '110%'
  },
  backgroundImage2: {
    zIndex: -20,
    position: 'absolute',
    left: '-15%',
    top: -theme.spacing(15),
    width: '80%'
  },
  backgroundImage3: {
    zIndex: -20,
    position: 'absolute',
    left: '45%',
    top: -theme.spacing(15),
    width: '70%',
    transform: 'scaleX(-1)',
  },

  footer: {
    marginTop: theme.spacing(10),
    backgroundImage: `url(${footerImage})`,
    minHeight: theme.spacing(25),
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  },
  footerDescriptions: {
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right'
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
  },
  socialButton: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  footerDescription: {
    color: 'white',
    paddingTop: theme.spacing(2),
  }
}));