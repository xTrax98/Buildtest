# Albion Build Creator 0.3.60 — TEST

Experimental voice build parser.

Changes:
- Captures the voice transcript first and searches only after recognition ends.
- Faster item matching with slot pre-filtering and cheap exact-token matching before fuzzy matching.
- Added Clear voice text button.
- Generic "Bolsa" prefers the generic Bolsa item and then selects its maximum tier.
- Generic "Guiso" resolves to Guiso de ternera at maximum tier; "Guiso avalonico" remains specific.
- If no tier is spoken, the parser selects the highest available tier for the matched family.
- Explicit tiers remain supported.
