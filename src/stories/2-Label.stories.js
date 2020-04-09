import React from 'react';
import { text } from '@storybook/addon-knobs';

import Label from '../components/label';

export default {
  title: 'Label',
  component: Label,
};

export const LabelStory = () => <Label text={text('text', 'Hello world!')} />;
