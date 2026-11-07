import{o as e,t}from"./rolldown-runtime-C0FnF6B9.js";import{i as n,n as r,r as i}from"./DatabaseContext-eaSWAXC5.js";import{Ir as a,_ as o,d as s,f as c,g as l,gr as u,m as d,p as f,t as p,tt as m,u as h}from"./useTranslation-B6SzyOea.js";import{n as g,t as _}from"./Tabs-Cxdh_FlB.js";import{t as v}from"./SqBadge-PRoPioi1.js";import{t as y}from"./CodeBlock-CRTO8Dcm.js";import{a as b,l as x,r as S}from"./dist-oyw2yDy7.js";import{t as C}from"./PageHeader-BCaXtuvr.js";import{F as w,h as T,l as E}from"./src-C5rAC8xo.js";import{n as D}from"./weapon-8Umijmg-.js";import{t as O}from"./src-zeNo01Gm.js";import{t as k}from"./useDatabase-DOsGxo9H.js";import{t as A}from"./util-CIuJoRXW.js";import{J as j,V as M,_ as N,q as P}from"./index-BEJKf7-a.js";var F=e(t((e=>{var t=m();Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(r()),i=u();e.default=(0,n.default)((0,i.jsx)(`path`,{d:`M16.01 11H4v2h12.01v3L20 12l-3.99-4z`}),`ArrowRightAlt`)}))()),I=e(a());function L(){let{params:{currentTab:e}}=x(`/doc/:currentTab`)??{params:{currentTab:``}};return f(l,{display:`flex`,flexDirection:`column`,gap:1,children:[c(C,{title:`Documentation`,actions:c(v,{color:`info`,children:`Version 3`})}),c(h,{children:c(d,{children:f(j,{container:!0,spacing:1,children:[c(j,{item:!0,xs:12,md:2,children:c(h,{bgt:`light`,sx:{height:`100%`},children:f(_,{orientation:`vertical`,value:e,"aria-label":`Documentation Navigation`,sx:{borderRight:1,borderColor:`divider`},children:[c(g,{label:`Overview`,value:``,component:M,to:``}),c(g,{label:`Key naming convention`,value:`KeyNaming`,component:M,to:`KeyNaming`}),c(g,{label:c(`code`,{children:`StatKey`}),value:`StatKey`,component:M,to:`StatKey`}),c(g,{label:c(`code`,{children:`ArtifactSetKey`}),value:`ArtifactSetKey`,component:M,to:`ArtifactSetKey`}),c(g,{label:c(`code`,{children:`CharacterKey`}),value:`CharacterKey`,component:M,to:`CharacterKey`}),c(g,{label:c(`code`,{children:`WeaponKey`}),value:`WeaponKey`,component:M,to:`WeaponKey`}),c(g,{label:c(`code`,{children:`MaterialKey`}),value:`MaterialKey`,component:M,to:`MaterialKey`}),c(g,{label:`Version History`,value:`VersionHistory`,component:M,to:`VersionHistory`})]})})}),c(j,{item:!0,xs:12,md:10,children:c(h,{bgt:`light`,sx:{height:`100%`},children:c(d,{children:c(I.Suspense,{fallback:c(i,{variant:`rectangular`,width:`100%`,height:600}),children:f(b,{children:[c(S,{index:!0,element:c(H,{})}),c(S,{path:`/VersionHistory`,element:c(Y,{})}),c(S,{path:`/MaterialKey`,element:c(J,{})}),c(S,{path:`/ArtifactSetKey`,element:c(G,{})}),c(S,{path:`/WeaponKey`,element:c(q,{})}),c(S,{path:`/CharacterKey`,element:c(K,{})}),c(S,{path:`/StatKey`,element:c(W,{})}),c(S,{path:`/KeyNaming`,element:c(U,{})})]})})})})})]})})})]})}var R=`interface IGOOD {
  format: "GOOD" // A way for people to recognize this format.
  version: number // GOOD API version.
  source: string // The app that generates this data.
  characters?: ICharacter[]
  artifacts?: IArtifact[]
  weapons?: IWeapon[]
  materials?: { // Added in version 2
    [key:MaterialKey]: number
  }
}`,z=`interface IArtifact {
  setKey: SetKey //e.g. "GladiatorsFinale"
  slotKey: SlotKey //e.g. "plume"
  level: number //0-20 inclusive
  rarity: number //1-5 inclusive
  mainStatKey: StatKey
  location: CharacterKey|"" //where "" means not equipped.
  lock: boolean //Whether the artifact is locked in game.
  substats: ISubstat[]
  // Below are new to GOOD 3
  totalRolls?: number // 3-9 for valid 5* artifacts; includes starting rolls
  astralMark?: boolean // Favorite star in-game
  elixirCrafted?: boolean // Flag for if the artifact was created using Sanctifying Elixir. This guarantees the main stat + 2 additional rolls on the first 2 substats
  unactivatedSubstats?: ISubstat[] // Unactivated substat(s). Once a substat is activated, it should be moved to \`substats\` instead
}

interface ISubstat {
  key: StatKey //e.g. "critDMG_"
  value: number //e.g. 19.4
  // Below is new to GOOD 3
  initialValue?: number // Initial roll of the artifact, if it is known. This includes the first roll of this stat, even if it was not revealed initially e.g. from \`unactivatedSubstats\`
}

type SlotKey = "flower" | "plume" | "sands" | "goblet" | "circlet"`,B=`interface IWeapon {
  key: WeaponKey //"CrescentPike"
  level: number //1-90 inclusive
  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80
  refinement: number //1-5 inclusive
  location: CharacterKey | "" //where "" means not equipped.
  lock: boolean //Whether the weapon is locked in game.
}`,V=`interface ICharacter {
  key: CharacterKey //e.g. "Rosaria"
  level: number //1-100 inclusive
  constellation: number //0-6 inclusive
  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80
  talent: { //does not include boost from constellations. 1-15 inclusive
    auto: number
    skill: number
    burst: number
  }
}`;function H(){return f(s,{children:[c(o,{gutterBottom:!0,variant:`h4`,children:`Genshin Open Object Description (GOOD)`}),f(o,{gutterBottom:!0,children:[c(`strong`,{children:`GOOD`}),` is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion.`]}),c(o,{gutterBottom:!0,children:`Stellar Optimizer's database export conforms to this format. For compatibility with other GOOD tools, exports keep the source name shown in the examples below.`}),c(y,{text:R}),c(`br`,{}),c(o,{gutterBottom:!0,variant:`h4`,children:`Artifact data representation`}),c(y,{text:z}),c(`br`,{}),c(o,{gutterBottom:!0,variant:`h4`,children:`Weapon data representation`}),c(y,{text:B}),c(`br`,{}),c(o,{gutterBottom:!0,variant:`h4`,children:`Character data representation`}),c(y,{text:V})]})}function U(){return f(h,{children:[c(d,{children:c(o,{children:`Key Naming Convention`})}),c(n,{}),f(d,{children:[f(o,{gutterBottom:!0,children:[`The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in `,c(`strong`,{children:`PascalCase`}),`. This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)`]}),f(o,{gutterBottom:!0,children:[` `,`To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:`]}),f(o,{children:[c(`code`,{children:`Gladiator's Finale`}),` `,c(F.default,{sx:{verticalAlign:`bottom`}}),` `,c(`code`,{children:`GladiatorsFinale`})]}),f(o,{children:[c(`code`,{children:`Spirit Locket of Boreas`}),` `,c(F.default,{sx:{verticalAlign:`bottom`}}),` `,c(`code`,{children:`SpiritLocketOfBoreas`})]}),f(o,{children:[c(`code`,{children:`"The Catch"`}),` `,c(F.default,{sx:{verticalAlign:`bottom`}}),` `,c(`code`,{children:`TheCatch`})]})]})]})}function W(){let{t:e}=p(`statKey_gen`),t=`type StatKey\n  = ${[`hp`,`hp_`,`atk`,`atk_`,`def`,`def_`,`eleMas`,`enerRech_`,`heal_`,`critRate_`,`critDMG_`,`physical_dmg_`,`anemo_dmg_`,`geo_dmg_`,`electro_dmg_`,`hydro_dmg_`,`pyro_dmg_`,`cryo_dmg_`,`dendro_dmg_`].map(t=>`"${t}" //${e(t)}${A(t)}`).join(`
  | `)}`;return f(s,{children:[c(o,{gutterBottom:!0,variant:`h4`,children:`StatKey`}),c(y,{text:t})]})}function G(){let{t:e}=p(`artifactNames_gen`),t=`type ArtifactSetKey\n  = ${[...new Set(w)].sort().map(t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`).join(`
  | `)}`;return f(s,{children:[c(o,{gutterBottom:!0,variant:`h4`,children:`ArtifactSetKey`}),c(y,{text:t})]})}function K(){let{t:e}=p(`charNames_gen`),t=k(),{gender:n}=N(),r=`type CharacterKey\n  = ${[...new Set(E)].sort().map(r=>`"${r}" //${e(`charNames_gen:${T(t.chars.LocationToCharacterKey(r),n)}`)}`).join(`
  | `)}`;return f(s,{children:[c(o,{gutterBottom:!0,variant:`h4`,children:`CharacterKey`}),c(y,{text:r})]})}function q(){let{t:e}=p(`weaponNames_gen`),t=`type WeaponKey\n  = ${[...new Set(D)].sort().map(t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`).join(`
  | `)}`;return f(s,{children:[c(o,{gutterBottom:!0,variant:`h4`,children:`WeaponKey`}),c(y,{text:t})]})}function J(){let{t:e}=p(`material_gen`),t=`type MaterialKey\n  = ${Object.keys(O.material).sort().map(t=>`"${t}" // ${e(`${t}.name`)}`).join(`
  | `)}`;return f(s,{children:[c(o,{gutterBottom:!0,variant:`h4`,children:`MaterialKey`}),f(o,{gutterBottom:!0,children:[`The item names are taken from the english translation, and then converted into`,` `,c(P,{component:M,to:`KeyNaming`,children:c(`code`,{children:`PascalCase`})}),`.`]}),c(y,{text:t})]})}function Y(){return f(l,{display:`flex`,flexDirection:`column`,gap:2,children:[c(o,{gutterBottom:!0,variant:`h4`,children:`Version History`}),f(h,{children:[c(d,{children:c(o,{children:`Version 1`})}),c(n,{}),c(d,{children:f(o,{children:[`Created general `,c(`code`,{children:`IGOOD`}),` format with character, weapon, artifact fields.`]})})]}),f(h,{children:[c(d,{children:c(o,{children:`Version 2`})}),c(n,{}),c(d,{children:f(o,{children:[`Adds `,c(`code`,{children:`materials`}),` field to `,c(`code`,{children:`IGOOD`}),`. All other fields remain the same. V2 is backwards compatible with V1.`]})})]}),f(h,{children:[c(d,{children:c(o,{children:`Version 3`})}),c(n,{}),c(d,{children:f(o,{children:[`Adds new fields to `,c(`code`,{children:`IArtifact`}),` to represent new in-game properties, store initial rolls for reroll information, and help differentiate between 3 and 4-line starts for 5* artifacts. All other fields remain the same. V3 is backwards compatible with V2.`,c(`br`,{}),`New fields for `,c(`code`,{children:`IArtifact`}),`:`,` `,c(`code`,{children:`totalRolls, astralMark, elixirCrafted, unactivatedSubstats`}),c(`br`,{}),`New field for `,c(`code`,{children:`ISubstat`}),`: `,c(`code`,{children:`initialValue`})]})})]})]})}export{L as default};