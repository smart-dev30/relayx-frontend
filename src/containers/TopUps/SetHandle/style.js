import { createStyles } from '@material-ui/core/styles';
import { styles as common } from '../../style'
import { Colors } from '../../../services/theme'

export const styles = createStyles(theme => ({
  ...common,

  handleWrapper: { ...common.row, padding: '30px 0' },
  handlePrefix: { fontSize: 30, fontWeight: 'bold', color: Colors.ClearBlue, textAlign: 'right' },
  inputHandle: { flex: 1, fontSize: 27, fontWeight: 'bold' },


}));