// Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Main } from '../Main'; // Импортируйте ваш компонент
import { ClickProvider } from '../CounterProviders/ContextClick'; // Импортируйте ваш провайдер

export default {
  title: 'Components/Main/Button',
  component: Main.Button,
  decorators: [(Story) => <ClickProvider><Story /></ClickProvider>], // Оберните в ClickProvider
} as Meta<typeof Main.Button>;

const Template: StoryFn<typeof Main.Button> = (args) => <Main.Button {...args} />;

// Стор для основного кнопки
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  size: 28,
  colorBg: '#61dafb',
  variant: 'primary',
  count: true,
  focused: true,
};

// Стор для кнопки с счетчиком
const CounterTemplate: StoryFn<typeof Main.Button> = (args) => (
  <Main.Button {...args}>
    <Main.Button.Counter size={20} variant="primary" pulse={false} color='#FFA07A' />
  </Main.Button>
);

export const ButtonWithCounter = CounterTemplate.bind({});
ButtonWithCounter.args = {
  size: 28,
  colorBg: '#61dafb',
  variant: 'primary',
  count: true,
  focused: true,
};
