---
title: "Fonts"
source: https://shopify.dev/docs/storefronts/themes/architecture/settings/fonts
sections: Key concepts > Settings
created: 2025-07-29 15:24:15
---

Title: Fonts

URL Source: https://shopify.dev/docs/storefronts/themes/architecture/settings/fonts

Markdown Content:
Skip to main content
Apps
Storefronts
APIs and references
Log in
Sign up
STOREFRONTS
Overview
Themes
Web API / Headless
Mobile
Expand sidebar
Fonts

You can add fonts to your theme in the following ways:

Use fonts from Shopify’s font library
Use custom fonts
Tip

In general, fonts are a separate resource that need to be downloaded by the browser before any text is rendered, which impacts a store's overall performance. To make the theme more performant, system fonts that are already installed on the customers computer can be used by merchants that choose fonts from the System fonts category of the Shopify font library.

Shopify font library
Anchor link to section titled "Shopify font library"

Shopify’s font library is a collection of fonts that includes system fonts and a selection of Google Fonts. These fonts are free to use on all Shopify online stores, and are provided in both WOFF and WOFF2 formats.

The files for each font include the following Unicode ranges, if the ranges are available for the font:

Basic Latin
Latin-1 Supplement
Latin Extended-A
Currency Symbols

A limited number number of fonts also include the CJK Unicode ranges used in Japanese writing (e.g. CJK Unified Ideographs).

This selection of fonts covers a broad range of use cases. However, due to licensing restrictions, there are some fonts that Shopify can't include. If you need to use a broader range of characters, then you can use system fonts, Typekit, and other solutions.

To learn more about using Shopify’s font library, refer to Add Shopify fonts to your theme.

Note

Personal access to the font files isn't currently available.

System fonts
Anchor link to section titled "System fonts"

System fonts are fonts that are already installed on a user’s computer. This removes the need for browsers to download the font before rendering text and makes the theme more performant. System fonts are listed with the available fonts, noted with a System badge, and will show under the System fonts category in the theme editor font picker.

If you choose to use system fonts, then the font that’s used to render text will depend on the user’s operating system. There are three generic system font types. The following are examples of fonts within those types:

mono - Menlo, Consolas, Monaco, Liberation Mono, and Lucida Console
sans-serif - BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, and Helvetica Neue
serif - Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, and Source Serif Pro
Custom fonts
Anchor link to section titled "Custom fonts"

If you want to use a font that's not included in Shopify's font library, then you can use fonts from third party solutions like Typekit.

With most third party font solutions, you have the following options for including the font in your theme:

Reference the font through the third party's hosting
Upload the font files to your theme

If you include custom fonts in your theme and want to provide merchants with the ability to choose the font, then you need to create a setting for the selection, such as a select setting. You can then reference the setting value in your CSS when defining which font to use for the associated elements.

Third party hosted fonts
Anchor link to section titled "Third party hosted fonts"

If a font is hosted with the third party, then they'll usually provide a <link> tag to include the font in your theme:

Copy
1
<link rel="stylesheet" href="[font-url]">

Tip

The <link> tag is often included in theme.liquid, or your chosen layout file.

Host fonts in your theme
Anchor link to section titled "Host fonts in your theme"

If you have your own font files, then follow these steps to include the font in your theme:

Non-admin
Anchor link to section titled "Non-admin"

If you're planning on pushing your theme to a store using Shopify CLI, uploading a theme ZIP file, using the Shopify GitHub integration, or distributing the font with a theme through the Shopify Theme Store, then you should store the font in the assets folder of the theme. These steps should be performed in a local code editor, not the admin code editor.

Add the font files to the assets directory.

Create a @font-face CSS rule so that you can reference the font. Use the asset_url filter to output the URL for the font file:

Copy
1
2
3
4
@font-face {
  font-family: "Font name";
  src: url("{{ '[font-file-name]' | asset_url }}") format("[font-format]");
}

Shopify admin
Anchor link to section titled "Shopify admin"

If you want to add a font to an existing theme through the Shopify admin, then you should store your font in the Files section of the Shopify admin. This is because uploading some types of fonts to the assets directory through the admin code editor might lead to file corruption.

Upload the font files to the Content > Files section of the Shopify admin.

Create a @font-face CSS rule so that you can reference the font. Use the file_url filter to output the URL for the font file:

Copy
1
2
3
4
@font-face {
  font-family: "Font name";
  src: url("{{ '[font-file-name]' | file_url }}") format("[font-format]");
}

Add Shopify fonts to your theme
Anchor link to section titled "Add Shopify fonts to your theme"

The following outlines how to use fonts from the Shopify font library in your theme:

Add a font_picker type setting to allow merchants to choose their font in the theme editor. The value of this setting is returned as a font object.
Use one of the following font filters to load the chosen font, or any of its variants:
Use the font_face filter to insert the default @font-face declaration.
Use the font_url filter to access a CDN URL, so that you can create a custom @font-face declaration.
Use the font_modify filter to access font variants of the same family. Examples are bold and italic stylings.
Reference the chosen font to set any specific CSS stylings, such as font-family, font-weight, and font-style.
Available fonts
Anchor link to section titled "Available fonts"

The following fonts are free to use on all Shopify online stores:

MonoSystem
More info
Mono
1 variant
Sans-serifSystem
More info
Sans-serif
1 variant
SerifSystem
More info
Serif
1 variant
Abel
More info
Abel
1 variant
Abril Fatface
More info
Abril Fatface
1 variant
Alegreya
More info
Alegreya
10 variants
Alegreya Sans
More info
Alegreya Sans
14 variants
AleoNew
More info
Aleo
18 variants
Amiri
More info
Amiri
4 variants
Anonymous Pro
More info
Anonymous Pro
4 variants
Arapey
More info
Arapey
2 variants
Archivo
More info
Archivo
8 variants
Archivo Narrow
More info
Archivo Narrow
8 variants
Arimo
More info
Arimo
4 variants
ArsenalNew
More info
Arsenal
4 variants
Arvo
More info
Arvo
4 variants
Asap
More info
Asap
8 variants
Assistant
More info
Assistant
6 variants
Asul
More info
Asul
2 variants
BarlowNew
More info
Barlow
18 variants
BesleyNew
More info
Besley
12 variants
BevanNew
More info
Bevan
2 variants
Bitter
More info
Bitter
3 variants
Bodoni ModaNew
More info
Bodoni Moda
12 variants
Bricolage GrotesqueNew
More info
Bricolage Grotesque
7 variants
Cabin
More info
Cabin
8 variants
Cardo
More info
Cardo
3 variants
Catamaran
More info
Catamaran
9 variants
Chivo
More info
Chivo
8 variants
Cormorant
More info
Cormorant
10 variants
Courier New
More info
Courier New
4 variants
Crimson Text
More info
Crimson Text
6 variants
DM Sans
More info
DM Sans
6 variants
Domine
More info
Domine
2 variants
Dosis
More info
Dosis
7 variants
EB GaramondNew
More info
EB Garamond
10 variants
Eczar
More info
Eczar
5 variants
FahkwangNew
More info
Fahkwang
12 variants
FigtreeNew
More info
Figtree
14 variants
Fira Sans
More info
Fira Sans
18 variants
Fjalla One
More info
Fjalla One
1 variant
FrauncesNew
More info
Fraunces
12 variants
Garamond
More info
Garamond
4 variants
GlutenNew
More info
Gluten
9 variants
GrandstanderNew
More info
Grandstander
18 variants
Hepta SlabNew
More info
Hepta Slab
9 variants
IBM Plex Sans
More info
IBM Plex Sans
14 variants
Inconsolata
More info
Inconsolata
2 variants
Inknut Antiqua
More info
Inknut Antiqua
7 variants
Instrument SansNew
More info
Instrument Sans
8 variants
Inter
More info
Inter
9 variants
Josefin Sans
More info
Josefin Sans
10 variants
Josefin Slab
More info
Josefin Slab
10 variants
JostNew
More info
Jost
18 variants
Kalam
More info
Kalam
3 variants
Karla
More info
Karla
4 variants
Kaushan ScriptNew
More info
Kaushan Script
1 variant
Klee OneNew
More info
Klee One
2 variants
Kreon
More info
Kreon
3 variants
Lato
More info
Lato
18 variants
Libre Baskerville
More info
Libre Baskerville
3 variants
Libre BodoniNew
More info
Libre Bodoni
8 variants
Libre Caslon TextNew
More info
Libre Caslon Text
3 variants
Libre Franklin
More info
Libre Franklin
18 variants
Lobster Two
More info
Lobster Two
4 variants
Lora
More info
Lora
4 variants
Lucida Grande
More info
Lucida Grande
4 variants
ManualeNew
More info
Manuale
12 variants
Maven Pro
More info
Maven Pro
4 variants
MerriweatherNew
More info
Merriweather
8 variants
Merriweather Sans
More info
Merriweather Sans
8 variants
Monaco
More info
Monaco/Lucida Console
4 variants
Montserrat
More info
Montserrat
18 variants
Muli
More info
Muli
14 variants
Neuton
More info
Neuton
6 variants
Newsreader
More info
Newsreader
14 variants
Nobile
More info
Nobile
6 variants
Noto Sans DisplayNew
More info
Noto Sans Display
18 variants
Noto Serif
More info
Noto Serif
4 variants
Nunito
More info
Nunito
14 variants
Nunito Sans
More info
Nunito Sans
14 variants
Old Standard TT
More info
Old Standard TT
3 variants
Open Sans
More info
Open Sans
10 variants
Open Sans Condensed
More info
Open Sans Condensed Light
3 variants
Oswald
More info
Oswald
6 variants
Ovo
More info
Ovo
1 variant
Pacifico
More info
Pacifico
1 variant
Palatino
More info
Palatino
4 variants
PetronaNew
More info
Petrona
18 variants
Pinyon ScriptNew
More info
Pinyon Script
1 variant
PlatypiNew
More info
Platypi
12 variants
Playball
More info
Playball
1 variant
PlayfairNew
More info
Playfair
14 variants
Playfair Display
More info
Playfair Display
6 variants
Playpen SansNew
More info
Playpen Sans
8 variants
Poppins
More info
Poppins
18 variants
Prompt
More info
Prompt
18 variants
Proza Libre
More info
Proza Libre
10 variants
PT Sans
More info
PT Sans
4 variants
PT Serif
More info
PT Serif
4 variants
Quantico
More info
Quantico
4 variants
Quattrocento Sans
More info
Quattrocento Sans
4 variants
Questrial
More info
Questrial
1 variant
Quicksand
More info
Quicksand
4 variants
Rajdhani
More info
Rajdhani
5 variants
Raleway
More info
Raleway
18 variants
RasaNew
More info
Rasa
10 variants
Roboto
More info
Roboto
12 variants
Roboto Condensed
More info
Roboto Condensed
6 variants
Roboto Mono
More info
Roboto Mono
10 variants
Roboto Slab
More info
Roboto Slab
4 variants
Rubik
More info
Rubik
10 variants
SairaNew
More info
Saira
18 variants
Shadows Into Light
More info
Shadows Into Light
1 variant
Smooch
More info
Smooch
1 variant
Source Code Pro
More info
Source Code Pro
7 variants
Source Sans Pro
More info
Source Sans Pro
12 variants
Space Mono
More info
Space Mono
4 variants
Syne
More info
Syne
5 variants
Tenor Sans
More info
Tenor Sans
1 variant
Times New Roman
More info
Times New Roman
4 variants
Titillium Web
More info
Titillium Web
11 variants
TomorrowNew
More info
Tomorrow
18 variants
Trebuchet MS
More info
Trebuchet MS
4 variants
TrirongNew
More info
Trirong
18 variants
Ubuntu
More info
Ubuntu
8 variants
Unica One
More info
Unica One
1 variant
UnifrakturCookNew
More info
UnifrakturCook Bold
1 variant
UnifrakturMaguntiaNew
More info
UnifrakturMaguntia
1 variant
Work Sans
More info
Work Sans
9 variants
YrsaNew
More info
Yrsa
10 variants
Zilla SlabNew
More info
Zilla Slab
10 variants
日本語 BIZ UDP明朝
More info
日本語 BIZ UDP明朝
2 variants
日本語 Dela ゴシック One
More info
日本語 Dela ゴシック One
1 variant
日本語 Hina 明朝
More info
日本語 Hina 明朝
1 variant
日本語 Kaisei Decol
More info
日本語 Kaisei Decol
3 variants
日本語 Kaisei Opti
More info
日本語 Kaisei Opti
3 variants
日本語 Kaisei Tokumin
More info
日本語 Kaisei Tokumin
4 variants
日本語 M PLUS 1
More info
日本語 M PLUS 1
9 variants
日本語 M PLUS Rounded 1c
More info
日本語 M PLUS Rounded 1c
7 variants
日本語 Mochiy Pop P One
More info
日本語 Mochiy Pop P One
1 variant
日本語 Murecho
More info
日本語 Murecho
9 variants
日本語 Noto Sans Japanese
More info
日本語 Noto Sans Japanese
9 variants
日本語 Noto Serif Japanese
More info
日本語 Noto Serif Japanese
7 variants
日本語 Shippori 明朝
More info
日本語 Shippori 明朝
5 variants
日本語 Zen Kaku ゴシック New
More info
日本語 Zen Kaku ゴシック New
5 variants
日本語 Zen Kurenaido
More info
日本語 Zen Kurenaido
1 variant
日本語 Zen Maru ゴシック
More info
日本語 Zen Maru ゴシック
5 variants
日本語 Zen Old 明朝
More info
日本語 Zen Old 明朝
5 variants
Deprecated fonts
Anchor link to section titled "Deprecated fonts"

As part of a broader move towards open-source fonts, and in an effort to refine our font offerings, we have deprecated some fonts in our library.

Note

If your theme uses any of the deprecated fonts, then you must replace your default font for each preset. Our recommended font replacements maintain a similar style to the deprecating font, or you can choose any other available font from our collection.

Merchants who are currently using deprecated fonts will be prompted to make updates at a later date.

AgmenaDeprecated
More info
Agmena
8 variants
Recommended replacement: Alegreya
AkkoDeprecated
More info
Akko
12 variants
Recommended replacement: Titillium Web
AlfieDeprecated
More info
Alfie
1 variant
Recommended replacement: Rancho
AmericanaDeprecated
More info
Americana
4 variants
Recommended replacement: Trirong
Antique OliveDeprecated
More info
Antique Olive
5 variants
Recommended replacement: Noto Sans Display
ArmataDeprecated
More info
Armata
1 variant
Recommended replacement: Titillium Web
Avenir NextDeprecated
More info
Avenir Next
16 variants
Recommended replacement: Figtree
Avenir Next RoundedDeprecated
More info
Avenir Next Rounded
8 variants
Recommended replacement: Nunito
AzbukaDeprecated
More info
Azbuka
13 variants
Recommended replacement: Saira
Basic CommercialDeprecated
More info
Basic Commercial
8 variants
Recommended replacement: Instrument Sans
Basic Commercial Soft RoundedDeprecated
More info
Basic Commercial Soft Rounded
3 variants
Recommended replacement: Nunito
Baskerville No 2Deprecated
More info
Baskerville No 2
4 variants
Recommended replacement: Libre Baskerville
Bauer BodoniDeprecated
More info
Bauer Bodoni
6 variants
Recommended replacement: Bodoni Moda
BeefcakesDeprecated
More info
Beefcakes
2 variants
Recommended replacement: Gluten
Bembo BookDeprecated
More info
Bembo Book
4 variants
Recommended replacement: EB Garamond
Bernhard ModernDeprecated
More info
Bernhard Modern
4 variants
Recommended replacement: Sorts Mill Goudy
Bio RhymeDeprecated
More info
Bio Rhyme
5 variants
Recommended replacement: Hepta Slab
Bodoni PosterDeprecated
More info
Bodoni Poster Black
2 variants
Recommended replacement: Bodoni Moda
BurlingameDeprecated
More info
Burlingame
18 variants
Recommended replacement: Saira
CachetDeprecated
More info
Cachet
16 variants
Recommended replacement: Titillium Web
CardamonDeprecated
More info
Cardamon
8 variants
Recommended replacement: Crimson Pro
Carter SansDeprecated
More info
Carter Sans
8 variants
Recommended replacement: Alegreya Sans
Caslon BoldDeprecated
More info
Caslon Bold
2 variants
Recommended replacement: Libre Caslon Text
Caslon Old FaceDeprecated
More info
Caslon Old Face
3 variants
Recommended replacement: Libre Caslon Text
CentaurDeprecated
More info
Centaur
4 variants
Recommended replacement: Alegreya
Century GothicDeprecated
More info
Century Gothic
4 variants
Recommended replacement: Poppins
Chong ModernDeprecated
More info
Chong Modern
6 variants
Recommended replacement: Arsenal
Claire NewsDeprecated
More info
Claire News Light
2 variants
Recommended replacement: Besley
Cooper BTDeprecated
More info
Cooper BT Medium
8 variants
Recommended replacement: Fraunces
DaytonaDeprecated
More info
Daytona
10 variants
Recommended replacement: Titillium Web
DIN Neuzeit GroteskDeprecated
More info
DIN Neuzeit Grotesk Light
2 variants
Recommended replacement: Jost
DIN NextDeprecated
More info
DIN Next
14 variants
Recommended replacement: Barlow
DIN Next SlabDeprecated
More info
DIN Next Slab
14 variants
Recommended replacement: Zilla Slab
ElectraDeprecated
More info
Electra
4 variants
Recommended replacement: Crimson Pro
Eurostile NextDeprecated
More info
Eurostile Next
10 variants
Recommended replacement: Saira
FF MetaDeprecated
More info
FF Meta
16 variants
Recommended replacement: Fira Sans
FF Meta SerifDeprecated
More info
FF Meta Serif
12 variants
Recommended replacement: Yrsa
FF TisaDeprecated
More info
FF Tisa
14 variants
Recommended replacement: Merriweather
FF Tisa SansDeprecated
More info
FF Tisa Sans
14 variants
Recommended replacement: Cabin
FF UnitDeprecated
More info
FF Unit
14 variants
Recommended replacement: Fira Sans
FF Unit RoundedDeprecated
More info
FF Unit Rounded
12 variants
Recommended replacement: Nunito
FF Unit SlabDeprecated
More info
FF Unit Slab
14 variants
Recommended replacement: Roboto Slab
FS KimDeprecated
More info
FS Kim
10 variants
Recommended replacement: Platypi
FS KoopmanDeprecated
More info
FS Koopman
14 variants
Recommended replacement: Instrument Sans
FS SienaDeprecated
More info
FS Siena
14 variants
Recommended replacement: Fahkwang
Fette GotischDeprecated
More info
Fette Gotisch
1 variant
Recommended replacement: Unifraktur Maguntia
Friz QuadrataDeprecated
More info
Friz Quadrata
4 variants
Recommended replacement: Platypi
Frutiger SerifDeprecated
More info
Frutiger Serif
10 variants
Recommended replacement: Platypi
FuturaDeprecated
More info
Futura
13 variants
Recommended replacement: Jost
Futura BlackDeprecated
More info
Futura Black
1 variant
Recommended replacement: Plaster
Geometric 415Deprecated
More info
Geometric 415
6 variants
Recommended replacement: Jost
Georgia ProDeprecated
More info
Georgia Pro
10 variants
Recommended replacement: Georgia (system)
Gill Sans NovaDeprecated
More info
Gill Sans Nova
16 variants
Recommended replacement: Cabin
GlegooDeprecated
More info
Glegoo
2 variants
Recommended replacement: Roboto Slab
Goudy Old StyleDeprecated
More info
Goudy Old Style
5 variants
Recommended replacement: Alegreya
Harmonia SansDeprecated
More info
Harmonia Sans
10 variants
Recommended replacement: Poppins
HelveticaDeprecated
More info
Helvetica
8 variants
Recommended replacement: Instrument Sans
Hope SansDeprecated
More info
Hope Sans
12 variants
Recommended replacement: Chivo
Humanist 521Deprecated
More info
Humanist 521
8 variants
Recommended replacement: Cabin
ITC Avant Garde GothicDeprecated
More info
ITC Avant Garde Gothic
10 variants
Recommended replacement: Poppins
ITC BenguiatDeprecated
More info
ITC Benguiat
6 variants
Recommended replacement: Fraunces
ITC Berkeley Old StyleDeprecated
More info
ITC Berkeley Old Style
8 variants
Recommended replacement: Crimson Pro
ITC Bodoni SeventytwoDeprecated
More info
ITC Bodoni Seventytwo
4 variants
Recommended replacement: Libre Bodoni
ITC Bodoni TwelveDeprecated
More info
ITC Bodoni Twelve
4 variants
Recommended replacement: Libre Bodoni
ITC Caslon No 224Deprecated
More info
ITC Caslon No 224
8 variants
Recommended replacement: Lora
ITC CharterDeprecated
More info
ITC Charter
6 variants
Recommended replacement: Rasa
ITC CheltenhamDeprecated
More info
ITC Cheltenham
8 variants
Recommended replacement: Fraunces
ITC ClearfaceDeprecated
More info
ITC Clearface
8 variants
Recommended replacement: Fraunces
ITC ConduitDeprecated
More info
ITC Conduit
14 variants
Recommended replacement: Barlow
ITC EspritDeprecated
More info
ITC Esprit
8 variants
Recommended replacement: Source Serif 4
ITC Founders CaslonDeprecated
More info
ITC Founders Caslon
2 variants
Recommended replacement: Libre Caslon Text
ITC Franklin GothicDeprecated
More info
ITC Franklin Gothic
8 variants
Recommended replacement: Archivo
ITC GalliardDeprecated
More info
ITC Galliard
8 variants
Recommended replacement: Alegreya
ITC GammaDeprecated
More info
ITC Gamma
8 variants
Recommended replacement: Source Serif 4
ITC Goudy SansDeprecated
More info
ITC Goudy Sans
8 variants
Recommended replacement: Proza Libre
ITC JohnstonDeprecated
More info
ITC Johnston Medium
6 variants
Recommended replacement: Cabin
ITC Mendoza RomanDeprecated
More info
ITC Mendoza Roman
6 variants
Recommended replacement: Alegreya
ITC Modern No 216Deprecated
More info
ITC Modern No 216 Medium
8 variants
Recommended replacement: Bodoni Moda
ITC New BaskervilleDeprecated
More info
ITC New Baskerville
8 variants
Recommended replacement: Libre Baskerville
ITC New EspritDeprecated
More info
ITC New Esprit
8 variants
Recommended replacement: Source Serif 4
ITC New VeljovicDeprecated
More info
ITC New Veljovic
10 variants
Recommended replacement: Newsreader
ITC NovareseDeprecated
More info
ITC Novarese
7 variants
Recommended replacement: Fraunces
ITC Officina SansDeprecated
More info
ITC Officina Sans
10 variants
Recommended replacement: Fira Sans
ITC Officina SerifDeprecated
More info
ITC Officina Serif
10 variants
Recommended replacement: Roboto Slab
ITC SteppDeprecated
More info
ITC Stepp
8 variants
Recommended replacement: Playfair Display
ITC Stone HumanistDeprecated
More info
ITC Stone Humanist Medium
6 variants
Recommended replacement: Proza Libre
ITC Stone InformalDeprecated
More info
ITC Stone Informal
6 variants
Recommended replacement: Petrona
ITC Stone Sans IIDeprecated
More info
ITC Stone Sans II
12 variants
Recommended replacement: Open Sans
ITC Stone SerifDeprecated
More info
ITC Stone Serif
6 variants
Recommended replacement: Source Serif 4
ITC TapiocaDeprecated
More info
ITC Tapioca Medium
1 variant
Recommended replacement: Nanum Pen Script
Joanna NovaDeprecated
More info
Joanna Nova
18 variants
Recommended replacement: Rasa
Joanna Sans NovaDeprecated
More info
Joanna Sans Nova
16 variants
Recommended replacement: Cabin
KairosDeprecated
More info
Kairos
16 variants
Recommended replacement: Bevan
LaurentianDeprecated
More info
Laurentian
5 variants
Recommended replacement: EB Garamond
LibelleDeprecated
More info
Libelle
1 variant
Recommended replacement: Monsieur La Doulaise
Linotype DidotDeprecated
More info
Linotype Didot
4 variants
Recommended replacement: Libre Bodoni
Linotype GianottenDeprecated
More info
Linotype Gianotten
11 variants
Recommended replacement: Bodoni Moda
Linotype ReallyDeprecated
More info
Linotype Really Medium
4 variants
Recommended replacement: Source Serif 4
Linotype Syntax SerifDeprecated
More info
Linotype Syntax Serif
12 variants
Recommended replacement: Crimson Pro
LobsterDeprecated
More info
Lobster
1 variant
Recommended replacement: Lobster Two
LuciaDeprecated
More info
Lucia
1 variant
Recommended replacement: Pinyon Script
Luthersche FrakturDeprecated
More info
Luthersche Fraktur
1 variant
Recommended replacement: Unifraktur Maguntia
MaderaDeprecated
More info
Madera
16 variants
Recommended replacement: Jost
MalabarDeprecated
More info
Malabar
6 variants
Recommended replacement: Source Code Pro
Mariposa SansDeprecated
More info
Mariposa Sans
5 variants
Recommended replacement: Proza Libre
MegrimDeprecated
More info
Megrim
1 variant
Recommended replacement: Bricolage Grotesque
MeliorDeprecated
More info
Melior
4 variants
Recommended replacement: Libre Bodoni
MemphisDeprecated
More info
Memphis Medium
7 variants
Recommended replacement: Hepta Slab
Memphis Soft RoundedDeprecated
More info
Memphis Soft Rounded Medium
3 variants
Recommended replacement: Hepta Slab
Mentor SansDeprecated
More info
Mentor Sans
8 variants
Recommended replacement: Proza Libre
Metro NovaDeprecated
More info
Metro Nova
14 variants
Recommended replacement: Open Sans
Modern No 20Deprecated
More info
Modern No 20
2 variants
Recommended replacement: Bodoni Moda
Monotype BaskervilleDeprecated
More info
Monotype Baskerville
6 variants
Recommended replacement: Crimson Pro
Monotype BodoniDeprecated
More info
Monotype Bodoni
10 variants
Recommended replacement: Bodoni Moda
Monotype Century Old StyleDeprecated
More info
Monotype Century Old Style Medium
4 variants
Recommended replacement: Crimson Pro
Monotype GoudyDeprecated
More info
Monotype Goudy
5 variants
Recommended replacement: Fraunces
Monotype Goudy ModernDeprecated
More info
Monotype Goudy Modern
4 variants
Recommended replacement: Fraunces
Monotype Italian Old StyleDeprecated
More info
Monotype Italian Old Style
4 variants
Recommended replacement: Crimson Pro
Monotype New ClarendonDeprecated
More info
Monotype New Clarendon Medium
2 variants
Recommended replacement: Besley
Monotype News GothicDeprecated
More info
Monotype News Gothic
4 variants
Recommended replacement: Archivo
Monotype SabonDeprecated
More info
Monotype Sabon
4 variants
Recommended replacement: EB Garamond
Mouse MemoirsDeprecated
More info
Mouse Memoirs
1 variant
Recommended replacement: Grandstander
Mundo SansDeprecated
More info
Mundo Sans
14 variants
Recommended replacement: Lato
Neo SansDeprecated
More info
Neo Sans
12 variants
Recommended replacement: Titillium Web
Neue AachenDeprecated
More info
Neue Aachen
18 variants
Recommended replacement: Roboto Slab
Neue Frutiger 1450Deprecated
More info
Neue Frutiger 1450
8 variants
Recommended replacement: Open Sans
Neue Haas UnicaDeprecated
More info
Neue Haas Unica
18 variants
Recommended replacement: Instrument Sans
Neue PlakDeprecated
More info
Neue Plak
12 variants
Recommended replacement: Instrument Sans
Neue SwiftDeprecated
More info
Neue Swift
10 variants
Recommended replacement: Manuale
Neuzeit OfficeDeprecated
More info
Neuzeit Office
4 variants
Recommended replacement: Instrument Sans
Neuzeit Office Soft RoundedDeprecated
More info
Neuzeit Office Soft Rounded
2 variants
Recommended replacement: Nunito
Neuzeit SDeprecated
More info
Neuzeit S
2 variants
Recommended replacement: Instrument Sans
New Century SchoolbookDeprecated
More info
New Century Schoolbook
4 variants
Recommended replacement: Besley
News 702Deprecated
More info
News 702
4 variants
Recommended replacement: Source Serif 4
News 705Deprecated
More info
News 705
4 variants
Recommended replacement: Source Serif 4
News CycleDeprecated
More info
News Cycle
2 variants
Recommended replacement: Roboto Condensed
News Gothic No 2Deprecated
More info
News Gothic No 2
12 variants
Recommended replacement: Archivo
News PlantinDeprecated
More info
News Plantin
4 variants
Recommended replacement: Source Serif 4
Noticia TextDeprecated
More info
Noticia Text
4 variants
Recommended replacement: Noto Serif
Optima novaDeprecated
More info
Optima nova
14 variants
Recommended replacement: Proza Libre
OxygenDeprecated
More info
Oxygen
3 variants
Recommended replacement: Open Sans
ParmaDeprecated
More info
Parma
3 variants
Recommended replacement: Libre Bodoni
PerpetuaDeprecated
More info
Perpetua
4 variants
Recommended replacement: Source Serif 4
PlantinDeprecated
More info
Plantin
8 variants
Recommended replacement: Source Serif 4
PMN CaeciliaDeprecated
More info
PMN Caecilia
8 variants
Recommended replacement: Aleo
PrataDeprecated
More info
Prata
1 variant
Recommended replacement: Libre Bodoni
PT MonoDeprecated
More info
PT Mono
1 variant
Recommended replacement: Anonymous Pro
PT Sans NarrowDeprecated
More info
PT Sans Narrow
2 variants
Recommended replacement: Open Sans
QuattrocentoDeprecated
More info
Quattrocento
2 variants
Recommended replacement: Platypi
Quire SansDeprecated
More info
Quire Sans
18 variants
Recommended replacement: Fira Sans
Really No 2Deprecated
More info
Really No 2
14 variants
Recommended replacement: Source Serif 4
RighteousDeprecated
More info
Righteous
1 variant
Recommended replacement: Mulish
RockwellDeprecated
More info
Rockwell
5 variants
Recommended replacement: Zilla Slab
Sabon NextDeprecated
More info
Sabon Next
10 variants
Recommended replacement: EB Garamond
Sackers Square GothicDeprecated
More info
Sackers Square Gothic
1 variant
Recommended replacement: Tomorrow
SagrantinoDeprecated
More info
Sagrantino
1 variant
Recommended replacement: Kaushan Script
SceneDeprecated
More info
Scene
12 variants
Recommended replacement: Roboto
ScherzoDeprecated
More info
Scherzo
6 variants
Recommended replacement: Yrsa
Slabo 13pxDeprecated
More info
Slabo 13px
1 variant
Recommended replacement: Roboto Slab
SlateDeprecated
More info
Slate
12 variants
Recommended replacement: Source Sans 3
SohoDeprecated
More info
Soho
18 variants
Recommended replacement: Titillium Web
Soho GothicDeprecated
More info
Soho Gothic
14 variants
Recommended replacement: Titillium Web
Stempel SchneidlerDeprecated
More info
Stempel Schneidler
10 variants
Recommended replacement: Platypi
Swiss 721Deprecated
More info
Swiss 721
14 variants
Recommended replacement: Instrument Sans
Swiss 721 RoundedDeprecated
More info
Swiss 721 Rounded Bold
2 variants
Recommended replacement: Nunito
TiemannDeprecated
More info
Tiemann
2 variants
Recommended replacement: Bodoni Moda
TinosDeprecated
More info
Tinos
4 variants
Recommended replacement: PT Serif
Trade GothicDeprecated
More info
Trade Gothic
6 variants
Recommended replacement: Archivo
Trade Gothic NextDeprecated
More info
Trade Gothic Next
8 variants
Recommended replacement: Archivo
Twentieth CenturyDeprecated
More info
Twentieth Century
12 variants
Recommended replacement: Jost
Univers NextDeprecated
More info
Univers Next
18 variants
Recommended replacement: Instrument Sans
Univers Next TypewriterDeprecated
More info
Univers Next Typewriter
4 variants
Recommended replacement: Source Code Pro
UnnaDeprecated
More info
Unna
4 variants
Recommended replacement: Libre Bodoni
ValaDeprecated
More info
Vala
1 variant
Recommended replacement: Lobster Two
VarelaDeprecated
More info
Varela
1 variant
Recommended replacement: Nunito Sans
Varela RoundDeprecated
More info
Varela Round
1 variant
Recommended replacement: Nunito
Verdana ProDeprecated
More info
Verdana Pro
10 variants
Recommended replacement: Verdana (system)
VidalokaDeprecated
More info
Vidaloka
1 variant
Recommended replacement: Playfair Display
VolkhovDeprecated
More info
Volkhov
4 variants
Recommended replacement: Merriweather
VollkornDeprecated
More info
Vollkorn
8 variants
Recommended replacement: PT Serif
WazaDeprecated
More info
Waza
1 variant
Recommended replacement: Pinyon Script
WolaDeprecated
More info
Wola
1 variant
Recommended replacement: Kalam
YsobelDeprecated
More info
Ysobel
8 variants
Recommended replacement: Source Serif 4
ZurichDeprecated
More info
Zurich
9 variants
Recommended replacement: Instrument Sans
Zurich ExtendedDeprecated
More info
Zurich Extended
4 variants
Recommended replacement: Prompt
ON THIS PAGE
Shopify font library
System fonts
Custom fonts
Add Shopify fonts to your theme
Available fonts
Deprecated fonts
Updates
Developer changelog
Shopify Partners Slack
Shopify Editions
Business growth
Shopify Partners Program
Shopify App Store
Shopify Academy
Legal
Terms of service
API terms of use
Privacy policy
Partners Program Agreement
Shopify
About Shopify
Shopify Plus
Careers
Investors
Press and media
.dev Assistant

Shopify uses cookies to provide necessary site functionality and improve your experience. By using our website, you agree to our privacy policy
 and our cookie policy
.

OK
