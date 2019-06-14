import { createStyles } from '@material-ui/core/styles';
import { styles as common } from '../../style'
import { Colors } from '../../../services/theme'

export const styles = createStyles(theme => ({
  ...common,

  title: {
    paddingBottom: 15,
  },
  list: {
    maxHeight: 199,
    overflow: 'auto',
  },
  litItem: {
    overflow: 'auto',
    marginBottom: 10,
    borderRadius: 6,
    cursor: 'pointer',
  },
  activeListItem: {
    backgroundColor: Colors.ClearBlue,
  },
  inactiveListItem: {
    backgroundColor: Colors.PaleGrey,
  },
  listIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  paymentName: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  activePaymentName: {
    color: 'white',
  },
  inactivePaymentName: {
    color: Colors.DarkGrey,
  }

}));