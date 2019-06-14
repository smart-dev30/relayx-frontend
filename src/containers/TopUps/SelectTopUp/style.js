import { createStyles } from '@material-ui/core/styles';
import { styles as common } from '../../style'
import { Colors } from '../../../services/theme'

export const styles = createStyles(theme => ({
  ...common,

  title: { padding: '10px 0' },
  listIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  selectedPayOption: {
    overflow: 'auto',
    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: Colors.PaleGrey,
  },
  selectedPayOptionTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    color: Colors.DarkGrey,
    flex: 1,
  },
  buttonChangePayOption: {
    padding: 0,
    margin: 0,
  },

  orderList: {
    padding: '10px 0',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
  },
  orderItem: {
    width: 100,
    height: 100,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 23,
  },
  orderText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  activeOrderItem: {
    backgroundColor: Colors.ClearBlue,
  },
  inactiveOrderItem: {
    backgroundColor: Colors.PaleGrey,
  },
  activeOrderText: {
    color: 'white',
  },
}));