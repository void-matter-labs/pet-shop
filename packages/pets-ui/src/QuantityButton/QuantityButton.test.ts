
import { describe, test } from 'vitest'
import { composeStory } from '@storybook/react';
import meta, { DecreaseCurrentValue, IncreaseCurrentValue } from './QuantityButton.stories';

describe('QuantityButton', () => {
  test('When the increase button is clicked, it should call onIncrease with the incremented value', composeStory(IncreaseCurrentValue, meta).run);

  test('When the decrease button is clicked, it should call onDecrease with the decremented value', composeStory(DecreaseCurrentValue, meta).run);
});