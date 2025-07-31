import { Platform, PermissionsAndroid } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';


const createNotificationChannel = async () => {
  await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  })
}


const requestNotificationPermission = async () => {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    )
  }
}


const setupForegroundHandler = () => {
  return messaging().onMessage(async remoteMessage => {
    await notifee.displayNotification({
      title: remoteMessage.notification?.title || 'Notification',
      body: remoteMessage.notification?.body || 'You have a new message',
      android: {
        channelId: 'default',
      },
      data: remoteMessage.data || {},
    })
  })
}


export const setupPushNotifications = async () => {
  await createNotificationChannel();
  await requestNotificationPermission();

  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  console.log('FCM Token:', token);

  const unsubscribe = setupForegroundHandler();
  return unsubscribe;
};
