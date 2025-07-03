/**
 * A collection of animation styles used for interactive elements within IO App.
 */

export const SpringValues = {
  /* Used by Reanimated package */
  button: {
    damping: 20,
    mass: 0.5,
    stiffness: 300,
  },
  accordion: {
    damping: 30,
    mass: 1,
    stiffness: 325,
  },
  /* Used by selection items (checkbox, radio, etc…) */
  selection: {
    damping: 10,
    mass: 0.5,
    stiffness: 200,
  },
  header: {
    damping: 10,
    mass: 0.5,
    stiffness: 200,
  },
};

export type SpringValues = keyof typeof SpringValues;

export const ScaleEffect = {
  // Slight scale effect
  slight: 0.99,
  // Medium scale effect
  medium: 0.97,
  // Exaggerated scale effect
  exaggerated: 0.95,
};

export type ScaleEffect = keyof typeof ScaleEffect;
