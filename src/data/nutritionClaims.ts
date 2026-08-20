export type NutritionClaim = {
  id: string;
  title: string;
  nutrients: string[];
  statement: string;
  approved: boolean;
  evidenceNote?: string;
};

export const nutritionClaims: NutritionClaim[] = [
  {
    id: "energy",
    title: "Energía y vitalidad",
    nutrients: ["Complejo B", "Ácido fólico"],
    statement:
      "Forman parte del aporte nutricional relacionado con el metabolismo energético y el mantenimiento de su vitalidad diaria.",
    approved: true,
  },
  {
    id: "muscle",
    title: "Desarrollo muscular",
    nutrients: ["Aminoácidos"],
    statement:
      "Aporta aminoácidos, componentes esenciales de las proteínas que contribuyen al mantenimiento y desarrollo del tejido muscular.",
    approved: true,
  },
  {
    id: "skin-coat",
    title: "Piel y pelaje",
    nutrients: ["Omega 3", "Omega 6", "Omega 9"],
    statement:
      "Los ácidos grasos Omega 3, 6 y 9 contribuyen al mantenimiento de una piel saludable y un pelaje en buenas condiciones.",
    approved: true,
  },
  {
    id: "vitamins",
    title: "Vitaminas",
    nutrients: ["A", "D", "E", "K", "Complejo B", "Ácido fólico"],
    statement:
      "Aporte de vitaminas A, D, E, K, Complejo B y ácido fólico como parte del perfil nutricional de la fórmula.",
    approved: true,
  },
  {
    id: "minerals",
    title: "Minerales esenciales",
    nutrients: ["Calcio", "Fósforo", "Magnesio", "Zinc", "Hierro"],
    statement:
      "Aporte de minerales —calcio, fósforo, magnesio, zinc y hierro— importantes dentro de una alimentación correctamente formulada.",
    approved: true,
  },
  {
    id: "complete",
    title: "Nutrición completa",
    nutrients: ["Proteínas", "Vitaminas", "Minerales", "Aminoácidos", "Ácidos grasos"],
    statement:
      "Una formulación completa y balanceada, diseñada para aportar diferentes nutrientes importantes dentro de su alimentación diaria.",
    approved: true,
    evidenceNote:
      "El propietario confirma respaldo científico de la formulación. No atribuir aval veterinario directo salvo confirmación de MVZ.",
  },
];

export const omegaClaim = nutritionClaims.find((c) => c.id === "skin-coat")!;
export const aminoAcidsClaim = nutritionClaims.find((c) => c.id === "muscle")!;
