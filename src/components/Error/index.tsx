// src/pages/Error/Error.tsx
import { Button, Card, Center, Group, Image, Stack, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './styles.module.css';

export default function Error() {
  return (
    <Center className={classes.wrapper}>
      <Card shadow="sm" className={classes.card}>
        <Stack gap="sm">
          <Group justify="space-between" align="flex-start">
            <div>
              <Title order={3} mb={4} className={classes.title}>
                Упс! Такой страницы<br />не существует
              </Title>
              <Text size="sm" className={classes.text}>
                Давайте перейдём к началу.
              </Text>
            </div>

            <Button
              component={Link}
              to="/"
              color="blue"
              size="xs"
              className={classes.button}
            >
              На главную
            </Button>
          </Group>

          <Image
            src="src\components\image\Cat.gif"
            alt="Funny cat"
            radius="md"
            fit="cover"
            className={classes.image}
          />
        </Stack>
      </Card>
    </Center>
  );
}

