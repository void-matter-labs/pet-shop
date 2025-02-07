import { composeStory } from '@storybook/react'
import {
  describe,
  it,
} from 'vitest'
import meta, { AsChild, Primary, WithAsProp, WithHrefProp } from './Button.stories'

describe("Button", ()=>{
  it("renders by default a button", composeStory(Primary, meta).run)
  it("when as child, renders the child merged", composeStory(AsChild, meta).run)
  it("when has a href prop, defaults to anchor element", composeStory(WithHrefProp, meta).run)
  it(
    "when as prop used as anchor, renders the component is an anchor",
    composeStory(WithAsProp, meta).run
  )
})
