# Nano Banana AI Reference

## Model

Gemini 2.5 Flash "Nano Banana" - Image editing and generation model

## Access Points

* Gemini app (free)
* Google AI Studio
* Freepik, Adobe Firefly, Canva

## Core Capabilities

* Identity preservation across edits
* One-shot precision edits
* Multiple image blending
* Style transfer
* Annotation-based generation

## Prompt Categories

### Basic Edits

* Remove: "Erase the \[object] in the background"
* Replace: "Swap the \[object1] for \[object2]"
* Recolor: "Make the \[color1] \[object] \[color2]"
* Reframe: "Show this person from \[angle/perspective]"
* Add: "Add \[object/text] on the \[location]"
* Enhance: "Use my attached image as inspiration for a new image that is identical to it but rendered as a new sharper, higher resolution image"

### Multi-Image Operations

* Outfit transfer: "Place the person from image one in the outfit from image two"
* Style application: "Apply the artistic style of image two to image one"
* Scene merge: "Place subject from image one into the environment of image two"
* Feature swap: "Give the person in image one the hairstyle from image two"

### Advanced Techniques

* Annotation: Add labels on image ("plant here", "table here") then prompt to fill
* Perspective: Draw arrow, prompt "What does this arrow see?"
* Isometric: "Generate isometric view of \[subject]"
* Sketch render: "Turn this sketch into a polished rendering"
* Enhancement: Use "inspiration" wording for better results: "Use image as inspiration for a new identical but \[enhanced quality] image"

### AI-to-Description Workflow

For recreating reference images without direct upload, use AI to analyze and describe:

* Composition: "Subject positioned \[location] of frame, \[pose/angle], \[framing]"
* Lighting: "\[Type] lighting from \[direction], \[intensity] shadows, \[mood]"
* Colors: "\[Primary] palette with \[accent] highlights, \[saturation] tones"
* Style: "\[Art style/period], \[rendering technique], \[texture quality]"
* Details: "\[Specific elements], \[patterns], \[materials/surfaces]"

Example pattern: "Create image with \[composition], using \[lighting], in \[color palette], styled as \[reference style], featuring \[key details]"

Text-only recreation prompts:

* "Apply cinematic portrait lighting with soft shadows from upper left, warm golden hour tones"
* "Use minimalist composition with subject in lower third, negative space above, muted pastel palette"
* "Create editorial fashion photography style with high contrast, desaturated colors except red accents"
* "Generate in oil painting style with visible brushstrokes, impressionist color mixing, textured canvas feel"

### Style Transfers

* "Make this look like \[watercolor/cyberpunk/retro poster/cartoon/comic]"
* "Apply sepia vintage filter"
* "Create coloring-book outline from this photo"
* "Generate \[style] version while preserving face identity"

#### Architectural Line Drawing (Proven Prompt)

* "3D architectural line drawing in black and white"
  *Best-performing short prompt for converting complex kitchen or product photos into clean technical-style black and white line drawings. Produces crisp outlines, perspective-true geometry, and simplified but accurate detail without shading.*

### Product/Brand Applications

* "Add \[logo] to \[product surface]"
* "Create mockup of this design on \[billboard/mug/shirt/packaging]"
* "Generate branded filter maintaining \[color scheme/style elements]"

### Space Modifications

* "Redesign room with \[décor style/elements]"
* "Add \[landscaping elements] to outdoor space"
* "Transform office into \[style/theme]"
* "Create before/after renovation view"

## Prompt Modifiers

* Consistency: Reference same image across prompts for character continuity
* Collage input: Combine multiple references in single upload when limited
* Preservation: Specify "preserve face identity" or "keep details intact"
* Enhancement: Add "hyper real" or "enhance final result"
* Inspiration technique: Use "as inspiration for a new identical but \[improved quality]" instead of direct enhancement commands
* AI description mode: When using AI to describe reference images for text-only prompts, include composition, lighting, color, style, and detail elements

## Limitations

* Occasional prompt misinterpretation
* May produce artifacts in complex edits

## Levels

1. Basic Chat: Single image, natural language edits
2. Smart Blending: Multiple image combination
3. Scene Generation: Reusable prompt templates
4. Style Transfer Systems: Consistent branded filters
