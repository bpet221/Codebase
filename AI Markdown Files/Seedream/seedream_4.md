# Seedream 4.0 — Image Edit Prompt Best Practices (KCS Edition)

_Last updated: 9.24.25_

## TL;DR Principles
- **Be surgical**: Name exactly **what to change** and **what must not change**.
- **One intent per run**: Avoid multi‑goal prompts; chain edits.
- **Constrain scope**: Lock framing, camera, scale, lighting, palette, and materials unless specified.
- **Give success criteria**: “Output must match X traits; reject hallucinated items.”
- **Use references**: Attach multiple refs for style/identity; describe how to use each.
- **Determinism**: Fix `seed` for reproducibility; re‑roll only when exploring.

---

## Edit Prompt Skeletons

### A) Micro‑Edit (single object)
```
Edit the attached image: [ACTION] the [OBJECT] at [LOCATION].
Keep: framing, lens perspective, camera position, composition, scale of all other elements, materials, surface wear, existing shadows/reflections, white balance, color palette, and lighting ratio.
Style: [STYLE TAGS].
Hard constraints: do **not** add or remove other objects, text, or decor. No geometry shifts. No crop.
Quality: native resolution; photo‑real; clean edges; no halos.
```

**Examples**
- Replace the **area rug** under the coffee table with a flatweave Serena‑and‑Lily‑style runner in white / beige with **faded blue + maroon** accents. Match scene lighting; keep rug footprint and perspective identical. No new decor.
- Change the **cabinet handles** to **brushed stainless**, same size/position; preserve all cabinet lines and wood grain.

### B) Local “Reveal/Remove/Retouch”
```
Edit the attached image: remove [MARKED/MENTIONED ELEMENT].
Keep: composition, lighting, shadows, reflections, textures, camera FOV, and proportions intact.
Fill method: synthesize background consistent with nearby surfaces; avoid pattern repeats and blur seams.
Quality: no ghosting; maintain micro‑texture continuity.
```

### C) Text Edit (posters, labels)
```
Edit the attached image: change the text “{OLD}” to “{NEW}”.
Keep: font family, weight, kerning, baseline, color, alignment, and layout **unchanged**.
```

### D) Lighting‑Only Adjustment
```
Edit the attached image: increase interior key light by ~0.5 stops; keep evening exterior luminance unchanged. Preserve contrast, specular highlights, shadow directions, and color temperature.
No geometry/texture changes.
```

### E) Style Harmonization Pass (second run)
```
Refine the edited image: harmonize tones and noise so the inserted/repainted region matches surrounding grain, sharpness, and bokeh. Keep all geometry and layout fixed.
```

---

## Constraint Pack (copy/paste)
- **Framing lock**: “Do not crop, rotate, recenter, or change FOV.”
- **Camera lock**: “No camera move; keep same perspective lines and vanishing points.”
- **Scale lock**: “Maintain physical scale of unchanged objects.”
- **Lighting lock**: “Match incident light direction, softness, and intensity; preserve existing shadow lengths and softness.”
- **Color lock**: “Preserve global color palette and white balance; only modify the target region as specified.”
- **Material lock**: “Keep surface roughness, gloss, and micro‑scratches consistent with neighbors.”
- **No extras**: “Do not add new objects, text, or decor unless explicitly requested.”

---

## Reference Usage
- Attach **multiple reference images** for: color/finish, material micro‑detail, typography, or identity.
- In prompt, map each ref to a role: “Ref A = color; Ref B = handle shape; Ref C = noise/grain.”
- If consistency matters across outputs, reuse the **same seed** and references.

**Template**
```
Use Reference A strictly for color/finish; use Reference B strictly for silhouette/shape; ignore backgrounds in all references.
```

---

## Negative / Avoidance Language
- “No over‑smoothing; keep natural film‑like grain.”
- “No HDR glow or halo around edges.”
- “No duplication of nearby patterns; avoid tiling artifacts.”
- “No font substitution; keep kerning/baseline.”

---

## Debug Playbook
1. **Object shifts** → Add: *no geometry shifts; keep vanishing points.*
2. **Added clutter** → Add: *no new objects/decor.*
3. **Texture mismatch** → Add: *match roughness, specular, and micro‑scratches; harmonize noise.*
4. **Lighting mismatch** → Specify key direction, softness (softbox vs sun), and intensity delta in stops.
5. **Edge halos** → Add: *clean, high‑frequency edges; no glow.*
6. **Moved framing** → Add: *no crop/rotate/recenter; identical framing.*
7. **Text font drift** → Explicitly lock font traits (family/weight/kerning).

---

## KCS‑Ready Shortcuts (one‑liners)
- “Replace the living‑room rug with a white/beige flatweave runner with faded blue/maroon bands; **keep frame, perspective, palette, and lighting unchanged; no added decor; edges crisp, pile low; native res.**”
- “Make cabinet pulls brushed stainless; **same size/holes/positions;** preserve wood grain and reflections; **no other changes.**”
- “Soften window view by **–30% saturation, –0.3 EV, slight Gaussian blur equivalent to ~2 px @ 3K**; keep interior exposure/contrast identical.”

---

## Workflow (fast & deterministic)
1. **Lock a seed** → explore 3–5 prompt variants; keep best.
2. **Micro‑edit pass** → single intent.
3. **Harmonize pass** → tone/noise/grain alignment.
4. **Detail pass** → edges, reflections, shadow contact.
5. **Upscale** (if available) **after** edits; avoid re‑inventing details at low res.

---

## Advanced Tips
- Use numeric targets (e.g., “increase by **0.5 stops**”, “blur **2 px @ 3K**”).
- Call out **surface physics**: roughness, anisotropy, Fresnel, specular.
- When replacing materials, constrain **thickness** and **edge behavior** (“low‑pile; straight edges; no warping at corners”).
- For identity swaps (people, pets, logos), dedicate a reference per attribute and forbid cross‑contamination.

---

## Copy‑Ready Prompts

**Rug Replacement**
```
Edit the attached image: replace the rug in its exact footprint with a hand‑woven flatweave runner (white/beige base; faint horizontal texture; thin faded blue + faded maroon stripes). Match existing lighting, contrast, and white balance. Keep framing, camera, scale, and all other objects unchanged. No added decor. Clean edges; low pile; native res.
```

**Window De‑emphasis**
```
Edit the attached image: reduce exterior window emphasis—desaturate by ~30%, drop exposure by ~0.3 EV, add subtle depth blur (simulate f/4 bokeh) while preserving mullion sharpness. Keep interior lighting and contrast fixed; no geometry or object changes.
```

**Handle Finish Swap**
```
Edit the attached image: convert all cabinet handles to brushed stainless with fine linear grain oriented along the handle length, gloss ~0.25, no color cast. Keep handle size, hole spacing, positions, reflections and shadowing; preserve cabinet finish and scene lighting; no added or removed items.
```

---

## Checklist (use before every run)
- [ ] Single intent only
- [ ] Framing/camera locked
- [ ] What to edit stated in **one sentence**
- [ ] What **not** to change listed
- [ ] Reference images and roles mapped
- [ ] Seed fixed (unless exploring)
- [ ] Numeric targets for light/blur/scale
- [ ] Negative clauses to block clutter/halos
- [ ] Plan 2nd pass for harmonization

---

## Notes
- When platforms expose controls (seed, guidance scale, negative terms), **use them** for tighter adherence and repeatability.
- Prefer **two-pass** edits over long prompts.
- Keep language **plain, imperative, and bounded**.

