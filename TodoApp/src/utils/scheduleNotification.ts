import notifee, { TimestampTrigger, TriggerType, AndroidImportance } from '@notifee/react-native';

export async function scheduleNotification( title: string, description: string, todoId: string, triggerDate: Date) {
  await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: triggerDate.getTime(),
    alarmManager: true,
  };

  await notifee.createTriggerNotification(
    {
      title: ` ${title}`,
      body: ` ${description}\nTime to complete your task!`,
      android: {
        channelId: 'default',
        pressAction: {
          id: 'default',
        },
      },
      data: {
        todoId,
      },
    },
    trigger
  );
}
