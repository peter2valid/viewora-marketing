// Shared by pages/partners.vue and server/api/partner-request.post.ts so the
// form's choices and the server's checks never drift apart.
export const PARTNER_PLATFORM_TYPES = [
  'Property portal or listing site',
  'Car marketplace or dealer group',
  'Real estate agency',
  'Software company building for clients',
  'Something else',
] as const

export const PARTNER_AGENT_BANDS = ['1–10', '11–50', '51–200', 'More than 200', 'Not sure yet'] as const

// TODO(legal): consent wording needs a lawyer's review under Kenya's Data Protection Act.
export const PARTNER_CONSENT_TEXT =
  'I agree that Viewora may use these details to contact me about partner access. I can ask to have them deleted at any time.'
