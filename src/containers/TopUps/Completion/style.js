import { createStyles } from '@material-ui/core/styles';
import { styles as common } from '../../style'
import { Colors } from '../../../services/theme'

export const styles = createStyles(theme => ({
  ...common,

  formContent: {
    ...common.formContent,
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    display: 'flex',
    padding: '40px 30px'
  },
  nextButton: {
    ...common.nextButton,
    minWidth: 200,
  },
  title: { padding: '10px 0' },
  amount: { color: Colors.ClearBlue, fontWeight: 'bold', padding: '20px 0' },
  description: { padding: '10px 0' },
}));