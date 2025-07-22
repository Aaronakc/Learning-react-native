import { BaseToast, InfoToast } from "react-native-toast-message";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const toastConfig = {

  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderBottomColor: 'green',borderBottomWidth:4,borderLeftWidth:0, justifyContent: "center", alignItems: "center",marginTop:8 }}
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
      style={{ borderBottomColor: 'orange',borderBottomWidth:4,borderLeftColor:0, justifyContent: "center", alignItems: "center",marginTop:8 }}
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
}