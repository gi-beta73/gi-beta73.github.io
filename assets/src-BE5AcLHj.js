import{n as e,s as t}from"./prop-types-C98rxrTl.js";import{Bt as n,C as r,Tt as i,g as a}from"./src-C7sv5Ugr.js";import{$t as o,D as s,Fr as c,K as l,La as u,Nt as d,On as f,Ot as p,an as m,ct as h,fn as g,ft as _,in as v,n as y,nn as b,on as x,ot as S,tn as C,wn as w,x as T,xa as E,yn as D,zn as O}from"./src-XWNgFoi7.js";import{t as k}from"./Link-CiXfjbvz.js";import{Jr as A,V as j,Wr as M,ei as N}from"./index-Bo42PfFl.js";var P=t(e((e=>{var t=c();Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(C()),r=E();e.default=(0,n.default)((0,r.jsx)(`path`,{d:`M16.01 11H4v2h12.01v3L20 12l-3.99-4z`}),`ArrowRightAlt`)}))()),F=t(u());function I(){let{params:{currentTab:e}}=_(`/doc/:currentTab`)??{params:{currentTab:``}};return x(b,{children:[x(D,{container:!0,sx:{px:2,py:1},children:[m(D,{item:!0,flexGrow:1,children:m(O,{variant:`h6`,children:`Documentation`})}),m(D,{item:!0,children:m(O,{variant:`h6`,children:m(p,{color:`info`,children:`Version 3`})})})]}),m(n,{}),m(w,{children:x(D,{container:!0,spacing:1,children:[m(D,{item:!0,xs:12,md:2,children:m(b,{bgt:`light`,sx:{height:`100%`},children:x(A,{orientation:`vertical`,value:e,"aria-label":`Documentation Navigation`,sx:{borderRight:1,borderColor:`divider`},children:[m(N,{label:`Overview`,value:``,component:M,to:``}),m(N,{label:`Key naming convention`,value:`KeyNaming`,component:M,to:`KeyNaming`}),m(N,{label:m(`code`,{children:`StatKey`}),value:`StatKey`,component:M,to:`StatKey`}),m(N,{label:m(`code`,{children:`ArtifactSetKey`}),value:`ArtifactSetKey`,component:M,to:`ArtifactSetKey`}),m(N,{label:m(`code`,{children:`CharacterKey`}),value:`CharacterKey`,component:M,to:`CharacterKey`}),m(N,{label:m(`code`,{children:`WeaponKey`}),value:`WeaponKey`,component:M,to:`WeaponKey`}),m(N,{label:m(`code`,{children:`MaterialKey`}),value:`MaterialKey`,component:M,to:`MaterialKey`}),m(N,{label:`Version History`,value:`VersionHistory`,component:M,to:`VersionHistory`})]})})}),m(D,{item:!0,xs:12,md:10,children:m(b,{bgt:`light`,sx:{height:`100%`},children:m(w,{children:m(F.Suspense,{fallback:m(g,{variant:`rectangular`,width:`100%`,height:600}),children:x(h,{children:[m(S,{index:!0,element:m(V,{})}),m(S,{path:`/VersionHistory`,element:m(J,{})}),m(S,{path:`/MaterialKey`,element:m(q,{})}),m(S,{path:`/ArtifactSetKey`,element:m(W,{})}),m(S,{path:`/WeaponKey`,element:m(K,{})}),m(S,{path:`/CharacterKey`,element:m(G,{})}),m(S,{path:`/StatKey`,element:m(U,{})}),m(S,{path:`/KeyNaming`,element:m(H,{})})]})})})})})]})})]})}var L=`interface IGOOD {
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
}`;function V(){return x(v,{children:[m(O,{gutterBottom:!0,variant:`h4`,children:`Genshin Open Object Description (GOOD)`}),x(O,{gutterBottom:!0,children:[m(`strong`,{children:`GOOD`}),` is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion.`]}),m(O,{gutterBottom:!0,children:`As of version 6.0.0, Genshin Optimizer's database export conforms to this format.`}),m(o,{text:L}),m(`br`,{}),m(O,{gutterBottom:!0,variant:`h4`,children:`Artifact data representation`}),m(o,{text:R}),m(`br`,{}),m(O,{gutterBottom:!0,variant:`h4`,children:`Weapon data representation`}),m(o,{text:z}),m(`br`,{}),m(O,{gutterBottom:!0,variant:`h4`,children:`Character data representation`}),m(o,{text:B})]})}function H(){return x(b,{children:[m(w,{children:m(O,{children:`Key Naming Convention`})}),m(n,{}),x(w,{children:[x(O,{gutterBottom:!0,children:[`The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in `,m(`strong`,{children:`PascalCase`}),`. This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)`]}),x(O,{gutterBottom:!0,children:[` `,`To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:`]}),x(O,{children:[m(`code`,{children:`Gladiator's Finale`}),` `,m(P.default,{sx:{verticalAlign:`bottom`}}),` `,m(`code`,{children:`GladiatorsFinale`})]}),x(O,{children:[m(`code`,{children:`Spirit Locket of Boreas`}),` `,m(P.default,{sx:{verticalAlign:`bottom`}}),` `,m(`code`,{children:`SpiritLocketOfBoreas`})]}),x(O,{children:[m(`code`,{children:`"The Catch"`}),` `,m(P.default,{sx:{verticalAlign:`bottom`}}),` `,m(`code`,{children:`TheCatch`})]})]})]})}function U(){let{t:e}=d(`statKey_gen`),t=`type StatKey\n  = ${[`hp`,`hp_`,`atk`,`atk_`,`def`,`def_`,`eleMas`,`enerRech_`,`heal_`,`critRate_`,`critDMG_`,`physical_dmg_`,`anemo_dmg_`,`geo_dmg_`,`electro_dmg_`,`hydro_dmg_`,`pyro_dmg_`,`cryo_dmg_`,`dendro_dmg_`].map(t=>`"${t}" //${e(t)}${j(t)}`).join(`
  | `)}`;return x(v,{children:[m(O,{gutterBottom:!0,variant:`h4`,children:`StatKey`}),m(o,{text:t})]})}function W(){let{t:e}=d(`artifactNames_gen`),t=`type ArtifactSetKey\n  = ${[...new Set(l)].sort().map(t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`).join(`
  | `)}`;return x(v,{children:[m(O,{gutterBottom:!0,variant:`h4`,children:`ArtifactSetKey`}),m(o,{text:t})]})}function G(){let{t:e}=d(`charNames_gen`),t=r(),{gender:n}=a(),i=`type CharacterKey\n  = ${[...new Set(T)].sort().map(r=>`"${r}" //${e(`charNames_gen:${s(t.chars.LocationToCharacterKey(r),n)}`)}`).join(`
  | `)}`;return x(v,{children:[m(O,{gutterBottom:!0,variant:`h4`,children:`CharacterKey`}),m(o,{text:i})]})}function K(){let{t:e}=d(`weaponNames_gen`),t=`type WeaponKey\n  = ${[...new Set(y)].sort().map(t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`).join(`
  | `)}`;return x(v,{children:[m(O,{gutterBottom:!0,variant:`h4`,children:`WeaponKey`}),m(o,{text:t})]})}function q(){let{t:e}=d(`material_gen`),t=`type MaterialKey\n  = ${Object.keys(i.material).sort().map(t=>`"${t}" // ${e(`${t}.name`)}`).join(`
  | `)}`;return x(v,{children:[m(O,{gutterBottom:!0,variant:`h4`,children:`MaterialKey`}),x(O,{gutterBottom:!0,children:[`The item names are taken from the english translation, and then converted into`,` `,m(k,{component:M,to:`KeyNaming`,children:m(`code`,{children:`PascalCase`})}),`.`]}),m(o,{text:t})]})}function J(){return x(f,{display:`flex`,flexDirection:`column`,gap:2,children:[m(O,{gutterBottom:!0,variant:`h4`,children:`Version History`}),x(b,{children:[m(w,{children:m(O,{children:`Version 1`})}),m(n,{}),m(w,{children:x(O,{children:[`Created general `,m(`code`,{children:`IGOOD`}),` format with character, weapon, artifact fields.`]})})]}),x(b,{children:[m(w,{children:m(O,{children:`Version 2`})}),m(n,{}),m(w,{children:x(O,{children:[`Adds `,m(`code`,{children:`materials`}),` field to `,m(`code`,{children:`IGOOD`}),`. All other fields remain the same. V2 is backwards compatible with V1.`]})})]}),x(b,{children:[m(w,{children:m(O,{children:`Version 3`})}),m(n,{}),m(w,{children:x(O,{children:[`Adds new fields to `,m(`code`,{children:`IArtifact`}),` to represent new in-game properties, store initial rolls for reroll information, and help differentiate between 3 and 4-line starts for 5* artifacts. All other fields remain the same. V3 is backwards compatible with V2.`,m(`br`,{}),`New fields for `,m(`code`,{children:`IArtifact`}),`:`,` `,m(`code`,{children:`totalRolls, astralMark, elixirCrafted, unactivatedSubstats`}),m(`br`,{}),`New field for `,m(`code`,{children:`ISubstat`}),`: `,m(`code`,{children:`initialValue`})]})})]})]})}export{I as default};