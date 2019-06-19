export const styles = {
  container: {
    padding: 30,
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content: {
    position: 'relative',
    minWidth: 350,
    maxWidth: 450,
    height: 430,
    borderRadius: 10,
    backgroundColor: 'white',
    boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.44);',
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  formContent: { flex: 1, padding: '30px 40px', textAlign: 'left', display: 'flex', flexDirection: 'column' },
  formFooter: { paddingBottom: 35, flexDirection: 'row', justifyContent: 'center' },

  actionButton: {
    margin: '0 10px',
    maxWidth: 136,
    width: '100%',
    height: 40,
  },
  nextButton: {
    color: 'white'
  },
};