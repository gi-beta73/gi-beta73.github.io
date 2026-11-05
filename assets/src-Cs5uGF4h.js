import{o as e,t}from"./rolldown-runtime-C0FnF6B9.js";import{i as n,n as r,r as i}from"./DatabaseContext-Du3BpbIS.js";import{Or as a,a as o,c as s,cr as c,i as l,l as u,n as d,o as f,q as p,r as m,t as h}from"./CardThemed-C36am6QE.js";import{t as g}from"./useTranslation-_KxiUouL.js";import{t as _}from"./Link-DjhKS71g.js";import{t as v}from"./CodeBlock-BIJ4sLDO.js";import{t as y}from"./SqBadge-DCbrlM67.js";import{a as b,l as x,r as S}from"./dist-CxSODm1O.js";import{F as C,h as w,l as T}from"./src-DVKJ0cRx.js";import{n as E}from"./weapon-bSqgPeer.js";import{t as D}from"./src-PqPupvQQ.js";import{t as O}from"./useDatabase-CQevh1xy.js";import{t as k}from"./util-CIuJoRXW.js";import{H as A,R as j,V as M,h as N}from"./index-DCqVaNYm.js";var P=e(t((e=>{var t=p();Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(r()),i=c();e.default=(0,n.default)((0,i.jsx)(`path`,{d:`M16.01 11H4v2h12.01v3L20 12l-3.99-4z`}),`ArrowRightAlt`)}))()),F=e(a());function I(){let{params:{currentTab:e}}=x(`/doc/:currentTab`)??{params:{currentTab:``}};return l(h,{children:[l(o,{container:!0,sx:{px:2,py:1},children:[m(o,{item:!0,flexGrow:1,children:m(u,{variant:`h6`,children:`Documentation`})}),m(o,{item:!0,children:m(u,{variant:`h6`,children:m(y,{color:`info`,children:`Version 3`})})})]}),m(n,{}),m(f,{children:l(o,{container:!0,spacing:1,children:[m(o,{item:!0,xs:12,md:2,children:m(h,{bgt:`light`,sx:{height:`100%`},children:l(M,{orientation:`vertical`,value:e,"aria-label":`Documentation Navigation`,sx:{borderRight:1,borderColor:`divider`},children:[m(A,{label:`Overview`,value:``,component:j,to:``}),m(A,{label:`Key naming convention`,value:`KeyNaming`,component:j,to:`KeyNaming`}),m(A,{label:m(`code`,{children:`StatKey`}),value:`StatKey`,component:j,to:`StatKey`}),m(A,{label:m(`code`,{children:`ArtifactSetKey`}),value:`ArtifactSetKey`,component:j,to:`ArtifactSetKey`}),m(A,{label:m(`code`,{children:`CharacterKey`}),value:`CharacterKey`,component:j,to:`CharacterKey`}),m(A,{label:m(`code`,{children:`WeaponKey`}),value:`WeaponKey`,component:j,to:`WeaponKey`}),m(A,{label:m(`code`,{children:`MaterialKey`}),value:`MaterialKey`,component:j,to:`MaterialKey`}),m(A,{label:`Version History`,value:`VersionHistory`,component:j,to:`VersionHistory`})]})})}),m(o,{item:!0,xs:12,md:10,children:m(h,{bgt:`light`,sx:{height:`100%`},children:m(f,{children:m(F.Suspense,{fallback:m(i,{variant:`rectangular`,width:`100%`,height:600}),children:l(b,{children:[m(S,{index:!0,element:m(V,{})}),m(S,{path:`/VersionHistory`,element:m(J,{})}),m(S,{path:`/MaterialKey`,element:m(q,{})}),m(S,{path:`/ArtifactSetKey`,element:m(W,{})}),m(S,{path:`/WeaponKey`,element:m(K,{})}),m(S,{path:`/CharacterKey`,element:m(G,{})}),m(S,{path:`/StatKey`,element:m(U,{})}),m(S,{path:`/KeyNaming`,element:m(H,{})})]})})})})})]})})]})}var L=`interface IGOOD {
  format: "GOOD" // A way for people to recognize this format.
  version: number // GOOD API version.
  source: string // The app that generates this data.
  characters?: ICharacter[]
  artifacts?: IArtifact[]
  weapons?: IWeapon[]
  materials?: { // Added in version 2
    [key:MaterialKey]: number
  }
}`,R=`interface IArtifact {
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

type SlotKey = "flower" | "plume" | "sands" | "goblet" | "circlet"`,z=`interface IWeapon {
  key: WeaponKey //"CrescentPike"
  level: number //1-90 inclusive
  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80
  refinement: number //1-5 inclusive
  location: CharacterKey | "" //where "" means not equipped.
  lock: boolean //Whether the weapon is locked in game.
}`,B=`interface ICharacter {
  key: CharacterKey //e.g. "Rosaria"
  level: number //1-100 inclusive
  constellation: number //0-6 inclusive
  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80
  talent: { //does not include boost from constellations. 1-15 inclusive
    auto: number
    skill: number
    burst: number
  }
}`;function V(){return l(d,{children:[m(u,{gutterBottom:!0,variant:`h4`,children:`Genshin Open Object Description (GOOD)`}),l(u,{gutterBottom:!0,children:[m(`strong`,{children:`GOOD`}),` is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion.`]}),m(u,{gutterBottom:!0,children:`As of version 6.0.0, Genshin Optimizer's database export conforms to this format.`}),m(v,{text:L}),m(`br`,{}),m(u,{gutterBottom:!0,variant:`h4`,children:`Artifact data representation`}),m(v,{text:R}),m(`br`,{}),m(u,{gutterBottom:!0,variant:`h4`,children:`Weapon data representation`}),m(v,{text:z}),m(`br`,{}),m(u,{gutterBottom:!0,variant:`h4`,children:`Character data representation`}),m(v,{text:B})]})}function H(){return l(h,{children:[m(f,{children:m(u,{children:`Key Naming Convention`})}),m(n,{}),l(f,{children:[l(u,{gutterBottom:!0,children:[`The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in `,m(`strong`,{children:`PascalCase`}),`. This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)`]}),l(u,{gutterBottom:!0,children:[` `,`To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:`]}),l(u,{children:[m(`code`,{children:`Gladiator's Finale`}),` `,m(P.default,{sx:{verticalAlign:`bottom`}}),` `,m(`code`,{children:`GladiatorsFinale`})]}),l(u,{children:[m(`code`,{children:`Spirit Locket of Boreas`}),` `,m(P.default,{sx:{verticalAlign:`bottom`}}),` `,m(`code`,{children:`SpiritLocketOfBoreas`})]}),l(u,{children:[m(`code`,{children:`"The Catch"`}),` `,m(P.default,{sx:{verticalAlign:`bottom`}}),` `,m(`code`,{children:`TheCatch`})]})]})]})}function U(){let{t:e}=g(`statKey_gen`),t=`type StatKey\n  = ${[`hp`,`hp_`,`atk`,`atk_`,`def`,`def_`,`eleMas`,`enerRech_`,`heal_`,`critRate_`,`critDMG_`,`physical_dmg_`,`anemo_dmg_`,`geo_dmg_`,`electro_dmg_`,`hydro_dmg_`,`pyro_dmg_`,`cryo_dmg_`,`dendro_dmg_`].map(t=>`"${t}" //${e(t)}${k(t)}`).join(`
  | `)}`;return l(d,{children:[m(u,{gutterBottom:!0,variant:`h4`,children:`StatKey`}),m(v,{text:t})]})}function W(){let{t:e}=g(`artifactNames_gen`),t=`type ArtifactSetKey\n  = ${[...new Set(C)].sort().map(t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`).join(`
  | `)}`;return l(d,{children:[m(u,{gutterBottom:!0,variant:`h4`,children:`ArtifactSetKey`}),m(v,{text:t})]})}function G(){let{t:e}=g(`charNames_gen`),t=O(),{gender:n}=N(),r=`type CharacterKey\n  = ${[...new Set(T)].sort().map(r=>`"${r}" //${e(`charNames_gen:${w(t.chars.LocationToCharacterKey(r),n)}`)}`).join(`
  | `)}`;return l(d,{children:[m(u,{gutterBottom:!0,variant:`h4`,children:`CharacterKey`}),m(v,{text:r})]})}function K(){let{t:e}=g(`weaponNames_gen`),t=`type WeaponKey\n  = ${[...new Set(E)].sort().map(t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`).join(`
  | `)}`;return l(d,{children:[m(u,{gutterBottom:!0,variant:`h4`,children:`WeaponKey`}),m(v,{text:t})]})}function q(){let{t:e}=g(`material_gen`),t=`type MaterialKey\n  = ${Object.keys(D.material).sort().map(t=>`"${t}" // ${e(`${t}.name`)}`).join(`
  | `)}`;return l(d,{children:[m(u,{gutterBottom:!0,variant:`h4`,children:`MaterialKey`}),l(u,{gutterBottom:!0,children:[`The item names are taken from the english translation, and then converted into`,` `,m(_,{component:j,to:`KeyNaming`,children:m(`code`,{children:`PascalCase`})}),`.`]}),m(v,{text:t})]})}function J(){return l(s,{display:`flex`,flexDirection:`column`,gap:2,children:[m(u,{gutterBottom:!0,variant:`h4`,children:`Version History`}),l(h,{children:[m(f,{children:m(u,{children:`Version 1`})}),m(n,{}),m(f,{children:l(u,{children:[`Created general `,m(`code`,{children:`IGOOD`}),` format with character, weapon, artifact fields.`]})})]}),l(h,{children:[m(f,{children:m(u,{children:`Version 2`})}),m(n,{}),m(f,{children:l(u,{children:[`Adds `,m(`code`,{children:`materials`}),` field to `,m(`code`,{children:`IGOOD`}),`. All other fields remain the same. V2 is backwards compatible with V1.`]})})]}),l(h,{children:[m(f,{children:m(u,{children:`Version 3`})}),m(n,{}),m(f,{children:l(u,{children:[`Adds new fields to `,m(`code`,{children:`IArtifact`}),` to represent new in-game properties, store initial rolls for reroll information, and help differentiate between 3 and 4-line starts for 5* artifacts. All other fields remain the same. V3 is backwards compatible with V2.`,m(`br`,{}),`New fields for `,m(`code`,{children:`IArtifact`}),`:`,` `,m(`code`,{children:`totalRolls, astralMark, elixirCrafted, unactivatedSubstats`}),m(`br`,{}),`New field for `,m(`code`,{children:`ISubstat`}),`: `,m(`code`,{children:`initialValue`})]})})]})]})}export{I as default};