import {StyleSheet} from 'react-native';

export const primaryColor = '#a523c7';
export const secondaryColor = '#7104db';

export const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    fontWeight: 'bold',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo: {
    color: '#fff',
    fontWeight: '500',
    marginTop: 15,
    fontSize: 20,
  },
  logo: {
    width: 50,
    height: 43,
  },
  textCTA: {
    textAlign: 'center',
    color: 'rgba(255,255,255, .5)',
    fontWeight: '500',
  },
  buttonWhiteContainer: {
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  buttonWhiteText: {
    fontSize: 18,
    color: primaryColor,
    fontWeight: '600',
    alignSelf: 'center',
  },

  buttonContainer: {
    elevation: 8,
    backgroundColor: primaryColor,
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'center',
  },
  content: {
    flex: 3,
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    color: '#5b5b5b',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 50,
  },
});
