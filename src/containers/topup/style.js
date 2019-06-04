import { createStyles } from '@material-ui/core/styles';
import { styles as common } from '../style'
import { Colors } from '../../services/theme'

export const styles = createStyles(theme => ({
  ...common,

  header: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper: { padding: 10 },
  headerLeftIcon: { width: 16, height: 16 },
  title: { flex: 1, textAlign: 'center', color: Colors.LightGrey },

  formContent: { flex: 1, padding: '30px 50px', textAlign: 'left' },
  handleWrapper: { ...common.row, padding: '30px 0' },
  handlePrefix: { fontSize: 30, fontWeight: 'bold', color: Colors.ClearBlue, display: 'inline-block', paddingRight: 5 },
  inputHandle: { fontSize: 27, fontWeight: 'bold' },

  formFooter: { marginBottom: 55, flexDirection: 'row', justifyContent: 'center' },
  actionButton: {
    margin: '0 10px',
    width: 166,
    height: 40,
  },
  nextButton: {
    color: 'white'
  },
}));