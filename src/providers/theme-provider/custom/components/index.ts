import { Button } from './Button';
import { checkboxTheme } from './Checkbox';
import { Text } from './Text';

export const components = {
  Button: {
    ...Button,
  },

  Text: {
    ...Text,
  },
  Checkbox: checkboxTheme,
};
