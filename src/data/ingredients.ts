export type Ingredient = {
  name: string;
  description?: string;
  verified: boolean;
};

/** Solo se muestran públicamente los elementos verificados. */
export const ingredients: Ingredient[] = [];

export const nutritionClaims = {
  verified: false,
};