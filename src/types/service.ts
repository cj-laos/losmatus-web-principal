export type ServiceCategory = "Infraestructura" | "Seguridad" | "Soporte TI";

export type Service = {
  title: string;
  description: string;
  slug?: string;
  category?: ServiceCategory;
  categoria?: string;
  highlights?: string[];
  beneficios?: string[];
  iconName?: string;
  popular?: boolean;
  esDestacado?: boolean;
};
