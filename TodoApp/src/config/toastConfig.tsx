import { BaseToast, ErrorToast, InfoToast } from "react-native-toast-message";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const toastConfig = {

  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderBottomColor: 'green',borderBottomWidth:4,borderLeftWidth:0, justifyContent: "center", alignItems: "center",paddingLeft:60,marginHorizontal:25}}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        fontFamily:"serif"
      }}
      renderLeadingIcon={() => (
        <MaterialIcon name="check-circle" size={24} color="green" />
      )}

    />
  ),
  info: (props: any) => (
    <InfoToast
      {...props}
      style={{ borderBottomColor: 'orange',borderBottomWidth:4,borderLeftColor:0, justifyContent: "center", alignItems: "center",paddingLeft:60,marginHorizontal:25}}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        fontFamily:"serif"
      }}
      renderLeadingIcon={() => (
        <MaterialIcon name="info" size={24} color="orange" />
      )}

    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderBottomColor: 'red',borderBottomWidth:4,borderLeftColor:0, justifyContent: "center", alignItems: "center",minHeight:0,paddingLeft:60,marginHorizontal:25}}
      contentContainerStyle={{ paddingHorizontal: 10,paddingVertical:0, }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        fontFamily:"serif"
      }}
      renderLeadingIcon={() => (
        <MaterialIcon name="error" size={24} color="red" />
      )}

    />
  ),
}