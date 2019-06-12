export const styles = {
  container: {
    padding: 30,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    position: 'relative',
    width: 450,
    height: 450,
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

  formContent: { flex: 1, padding: '30px 50px', textAlign: 'left' },
  formFooter: { marginBottom: 55, flexDirection: 'row', justifyContent: 'center' },

  actionButton: {
    margin: '0 10px',
    width: 166,
    height: 40,
  },
  nextButton: {
    color: 'white'
  },
};