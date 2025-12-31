# Kitchen Image Prompt Instruction Guide — Cabinet Updates

## Scope

This file defines the workflow for **Nano Banana** kitchen design generation focused on **Kitchen Scene Cabinet Updates**. Workflow: **ChatGPT digests references and outputs text-only prompts; Nano Banana runs subject kitchen image + prompt only.**

---

## Correct Workflow

1. **Style Digest (ChatGPT step)**

   * Upload **reference cabinet image** (single cabinet product photo).
   * Upload **reference kitchen photo** (the wide-angle kitchen you want edited).
   * Instruct ChatGPT to generate a **Kitchen Scene Cabinet Updates prompt** that restyles the cabinets while preserving everything else.
   * Output is **text-only prompt**.

2. **Generation (Nano Banana step)**

   * Upload **subject kitchen photo only**.
   * Paste the ChatGPT-generated prompt.
   * **Do not upload the cabinet reference into Nano Banana.** The prompt text already encodes its identity.

3. **Iterate**

   * Adjust prompts for finish, reflections, geometry, or realism if needed.
   * Keep Nano Banana inputs limited to **one subject image** each run.

---

## Kitchen Scene Cabinet Updates Prompt Example

```
Wide-Angle Kitchen Scene — Cabinet Updates

Transform the attached wide-angle kitchen photo into a photorealistic rendering where the cabinetry adopts the exact design, finish, and proportions of the attached cabinet reference. The existing kitchen layout, architecture, black-paned windows, pendant lights, dining table, countertops, flooring, and decor must remain completely unchanged. Only the cabinetry is updated. The result must feel seamless and indistinguishable from an original photograph of the kitchen built with this cabinet style.

### Identity Preservation
- Extract every precise detail of the cabinet reference: door profile, paint color, subtle satin sheen, finish texture, and crisp recessed shaker geometry.
- Apply these features consistently to all visible cabinetry — base units, wall cabinets, tall units, and drawers.
- Preserve dimensional accuracy so the new cabinet finish maps perfectly to existing cabinet geometry.

### Cabinet Geometry Enforcement
- All cabinet doors and drawers in the scene must adopt the exact recessed panel geometry of the reference cabinet.
- Replace any beveled, rounded, or alternate profiles with the sharp 90-degree edge inset panel of the reference design.
- No existing door or drawer shapes may remain. Updated cabinets must appear physically rebuilt with the reference design.

### Pose, Framing, and Layout
- The kitchen’s perspective, wide-angle framing, and one-point depth must remain locked exactly as in the original photo.
- The dining table, chairs, pendant lights, countertops, windows, and outdoor view remain untouched.
- Do not introduce or remove any other elements.

### Lighting & Atmosphere
- Preserve the existing soft daylight streaming through the large windows, including natural highlights and shadows across cabinetry and floors.
- Ensure the new cabinet surfaces reflect light realistically with depth, subtle highlights, and consistent midtone detail.
- Atmosphere must remain calm, modern, and aspirational — as though photographed for a premium kitchen catalog.

### Material Integration
- Keep countertops, floors, walls, appliances, and decor identical, but update edge shadows and reflections so they interact naturally with the updated cabinetry.
- Cabinet color must harmonize realistically with the existing daylight tones and surrounding surfaces.

### Realism & Detailing
- Maintain brushed metal handles, hinges, and fine joinery, updated only to harmonize with the new finish.
- Ensure sharp, photorealistic edges with no warping or distortion of cabinet proportions.
- Keep depth-of-field, reflections, and environmental realism intact.

### Final Aesthetic
The final image must look like the original wide-angle photo of this kitchen, but with all cabinetry seamlessly transformed into the cabinet style reference with sharp recessed panels. Every other detail of the room remains frozen in time. The result should be indistinguishable from a real photograph of the same kitchen, updated for product marketing and e-commerce.
```

---

## Do / Don’t

* **Do**: Use ChatGPT to process cabinet reference + kitchen photo → output text-only prompt.
* **Do**: Upload **only the kitchen photo** into Nano Banana with the prompt.
* **Don’t**: Upload multiple refs directly into Nano Banana. Use prompt text to enforce cabinet identity and geometry.

---

## Inputs Summary

* **ChatGPT**: receives *cabinet reference* + *kitchen photo* → outputs prompt text.
* **Nano Banana**: receives *kitchen photo only* + prompt text.
9.15.25 12:52p

I pulled up your existing `nano_banana_kitchen_cabinet_Finish:Style_prompt_engineer.md` file and I’ll restructure it exactly how you asked:

1. Keep the **current section about color/finish changes** (cabinet identity + style updates).
2. Add a **second major section** about structural/frame edits — door spacing, drawer alignment, and panel shapes — using **red-marked images + reference images**.
3. End with a **summary + example prompt template** optimized for AI model readability (Nano Banana friendly, not human-friendly).

Here’s the updated file draft:

---

# Kitchen Image Prompt Instruction Guide — Cabinet Updates

## Part 1 — Finish / Color Updates

### Scope

Defines workflow for **Nano Banana** kitchen design generation focused on **cabinet finish and style updates**. Workflow: **ChatGPT digests cabinet reference + kitchen photo → outputs text-only prompt. Nano Banana runs subject kitchen photo + prompt only.**

### Correct Workflow

1. **Style Digest (ChatGPT)**

   * Input: reference cabinet product photo + subject kitchen photo.
   * Output: text-only cabinet update prompt.

2. **Generation (Nano Banana)**

   * Input: subject kitchen photo only + prompt.
   * Never upload reference cabinet image directly.

3. **Iteration**

   * Adjust finish, reflections, realism through prompt refinement.
   * Always keep Nano Banana inputs limited to one subject image each run.

### Prompt Example — Finish Update

```
Wide-Angle Kitchen Scene — Cabinet Finish Update

Transform the attached wide-angle kitchen photo into a hyper-realistic rendering where cabinetry adopts the exact color, finish, and sheen of the reference cabinet. Preserve layout, proportions, architecture, countertops, floors, windows, decor, and lighting. Only cabinet finish is updated. The result must appear indistinguishable from a real kitchen photograph with the new finish applied consistently to all visible cabinets and drawers.
```

---

## Part 2 — Frame / Geometry Updates

### Scope

Defines workflow for **door spacing, frame geometry, and panel shape corrections**. Workflow: **ChatGPT digests a marked-up cabinet image + clean reference → outputs text-only prompt. Nano Banana runs subject kitchen photo + prompt only.**

### Correct Workflow

1. **Geometry Digest (ChatGPT)**

   * Input:

     * Subject kitchen photo (with red markup indicating incorrect geometry).
     * Reference cabinet image (shows correct proportions / panel shapes).
   * Output: prompt text describing removal of red and enforcing correct frame geometry.

2. **Generation (Nano Banana)**

   * Input: subject kitchen photo only + geometry prompt.
   * Do not upload marked-up or reference directly into Nano Banana.

3. **Iteration**

   * Refine prompt for door alignment, drawer spacing, inset panel depth, crisp edge definition.

### Prompt Example — Geometry Update

```
Wide-Angle Kitchen Scene — Cabinet Geometry Update

Transform the attached wide-angle kitchen photo into a hyper-realistic rendering that removes all red markup and rebuilds the cabinetry with the precise frame geometry of the provided reference. Correct door spacing, drawer alignment, and recessed panel profiles so every cabinet matches the reference identity. Preserve original kitchen layout, architecture, finishes, lighting, floors, countertops, and decor. No new objects may be introduced. The result must look like a real photograph where the cabinetry has been physically rebuilt to correct proportions.
```

---

## Prompt Writing Summary

**Always:**

* Start with *“Hyper-realistic”* directive.
* State which cabinet attributes are updated (finish, frame, spacing).
* Lock environment (architecture, windows, floors, decor untouched).
* Directly instruct to “remove red markup” when geometry edit is based on annotated images.
* Use identity preservation from reference (finish color, sheen, panel shape).

**Never:**

* Upload multiple references to Nano Banana.
* Ask Nano Banana to infer complex blending.
* Leave out explicit mention of what stays unchanged.

---

## Unified Prompt Template

```
[Scene Context Title]

Transform the attached [kitchen photo] into a hyper-realistic rendering where the cabinetry adopts the exact [finish/geometry] of the attached reference. Remove any red markup completely. Correct [door spacing / drawer alignment / panel shape] so that all cabinetry matches the reference identity. Preserve architecture, layout, countertops, flooring, appliances, lighting, and decor exactly as shown. The result must be indistinguishable from a real photograph of the same kitchen with updated cabinetry.
```


