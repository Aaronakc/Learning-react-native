import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import { navigate } from '../navigation/RooteNavigation';

export function setupNotificationHandlers() {
  notifee.onForegroundEvent(({ type, detail }) => {
    if (type === 1) { 
      const todoIdRaw = detail.notification?.data?.todoId;
      const todoId = todoIdRaw ? String(todoIdRaw) : undefined;
      if (todoId) {
        navigate('DetailScreen', { todoid: todoId });
      }
    }
  });


  notifee.onBackgroundEvent(async ({ type, detail }) => {
    if (type === 1) {
      const todoIdRaw = detail.notification?.data?.todoId;
      const todoId = todoIdRaw ? String(todoIdRaw) : undefined;
      if (todoId) {
        navigate('DetailScreen', { todoid: todoId });
      }
    }
  });

  messaging().setBackgroundMessageHandler(async remoteMessage => {
  });
}
