import {
  ElementType,
  ComponentPropsWithoutRef,
  Ref
} from 'react'

export interface PolymorphicComponent<T extends ElementType> {
  as?: T;
  [key: `data-${string}`]: string
}

export type PolymorphicComponentProps<T extends ElementType, OwnProps> = PolymorphicComponent<T>
& OwnProps & ComponentPropsWithoutRef<T> & { ref?: Ref<T> }
