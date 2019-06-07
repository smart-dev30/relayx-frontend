import { createStyles } from '@material-ui/core/styles';
import { styles as common } from '../../style'
import { Colors } from '../../../services/theme'

export const styles = createStyles(theme => ({
  ...common,

  formContent: {
    ...common.formContent,
    maxHeight: '291px',
  },
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
    position: 'relative',
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

  selectedPayAmountWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedPayAmountText: {
    color: Colors.ClearBlue,
    fontWeight: 'bold',
    fontSize: 16,
  },

  qrCodeWrapper: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  qrCode: {
    width: 120,
    height: 120,
  },
  timer: {
    marginTop: 10,
    fontSize: 23,
    fontWeight: 'bold',
    color: Colors.DarkGrey,
  }
}));