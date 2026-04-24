/**
 * A/B Testing utility
 * Infrastructure for running split tests on headlines, CTAs, etc.
 */

// Get or create visitor ID
function getVisitorId() {
  let id = localStorage.getItem('eter_visitor_id');
  if (!id) {
    id = Math.random().toString(36).substring(2, 15);
    localStorage.setItem('eter_visitor_id', id);
  }
  return id;
}

// Simple hash for deterministic variant assignment
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0; // 32-bit int
  }
  return Math.abs(hash);
}

/**
 * Get variant for a given experiment
 * @param {string} experimentId - Unique experiment identifier
 * @param {string[]} variants - Array of variant values
 * @returns {string} Selected variant
 */
export function getVariant(experimentId, variants) {
  const visitorId = getVisitorId();
  const hash = hashCode(`${visitorId}-${experimentId}`);
  const index = hash % variants.length;
  
  // Log experiment assignment in dev
  if (import.meta.env.DEV) {
    console.log(`[AB Test] ${experimentId}: variant ${index} (${variants[index]})`);
  }

  return variants[index];
}

/**
 * Pre-defined experiments
 * Add new experiments here and use them in components
 */
export const experiments = {
  heroTitle: {
    id: 'hero_title_v1',
    variants: [
      'Tu negocio necesita herramientas.\nNo software innecesario.',
      'Deja de pagar por software que no usas.',
      'La plataforma modular para negocios inteligentes.',
    ],
  },
  ctaButton: {
    id: 'cta_button_v1',
    variants: [
      'Empieza tu prueba gratis',
      'Prueba eter gratis por 14 días',
      'Únete a la beta — es gratis',
    ],
  },
  ctaColor: {
    id: 'cta_color_v1',
    variants: ['accent', 'primary'],
  },
};

/**
 * Hook-like function to get experiment variant
 */
export function useExperiment(experiment) {
  return getVariant(experiment.id, experiment.variants);
}
