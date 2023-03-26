import * as React from 'react';
import {View} from 'react-native';

import {Button, Text} from '~/components/core';
import {Task} from '~/models';

import {storeDetailStyles as styles} from './store-detail.styles';

interface Props {
  storeId: string | undefined;
  tasks: Task[] | undefined;
  onPress: (storeId: string, taskId: string) => void;
}

export const StoreDetailTasks = ({storeId, tasks, onPress}: Props) =>
  tasks?.length ? (
    <>
      {tasks.map((task, index) => (
        <View key={task.id} style={[styles.itemDetail, styles.indent]}>
          <Text>{`${index + 1}.`}</Text>
          <View style={[styles.itemLabel, styles.task]}>
            <Text style={styles.taskDescription}>{task.description}</Text>
            <View style={styles.taskAssign}>
              {task.assigned ? (
                <Text bold center variant="label" style={styles.taskAssigned}>
                  Assigned
                </Text>
              ) : (
                <Button
                  small
                  label="Assign"
                  onPress={() => onPress(storeId!, task.id)}
                />
              )}
            </View>
          </View>
        </View>
      ))}
    </>
  ) : null;
