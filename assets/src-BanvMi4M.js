import{n as e,s as t}from"./prop-types-C98rxrTl.js";import{D as n,Jr as r,K as i,Kt as a,Ln as o,Mn as s,Pa as c,Qn as l,Tn as u,Tt as d,Vn as f,Vt as p,Xa as m,_n as h,fn as g,hn as _,mn as v,n as y,vn as b,x,xt as S,yn as C,yt as w}from"./src-CaWo0eSX.js";import{C as T,Tt as E,g as D,ln as O}from"./src-Bzzksudt.js";import{t as k}from"./Link-DUZwuZ_5.js";import{V as A,Xr as j,ei as M,oi as N}from"./index-DPMC5AgJ.js";var P=t(e((e=>{var t=r();Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(v()),i=c();e.default=(0,n.default)((0,i.jsx)(`path`,{d:`M16.01 11H4v2h12.01v3L20 12l-3.99-4z`}),`ArrowRightAlt`)}))()),F=t(m());function I(){let{params:{currentTab:e}}=d(`/doc/:currentTab`)??{params:{currentTab:``}};return C(_,{children:[C(s,{container:!0,sx:{px:2,py:1},children:[b(s,{item:!0,flexGrow:1,children:b(l,{variant:`h6`,children:`Documentation`})}),b(s,{item:!0,children:b(l,{variant:`h6`,children:b(p,{color:`info`,children:`Version 3`})})})]}),b(O,{}),b(o,{children:C(s,{container:!0,spacing:1,children:[b(s,{item:!0,xs:12,md:2,children:b(_,{bgt:`light`,sx:{height:`100%`},children:C(M,{orientation:`vertical`,value:e,"aria-label":`Documentation Navigation`,sx:{borderRight:1,borderColor:`divider`},children:[b(N,{label:`Overview`,value:``,component:j,to:``}),b(N,{label:`Key naming convention`,value:`KeyNaming`,component:j,to:`KeyNaming`}),b(N,{label:b(`code`,{children:`StatKey`}),value:`StatKey`,component:j,to:`StatKey`}),b(N,{label:b(`code`,{children:`ArtifactSetKey`}),value:`ArtifactSetKey`,component:j,to:`ArtifactSetKey`}),b(N,{label:b(`code`,{children:`CharacterKey`}),value:`CharacterKey`,component:j,to:`CharacterKey`}),b(N,{label:b(`code`,{children:`WeaponKey`}),value:`WeaponKey`,component:j,to:`WeaponKey`}),b(N,{label:b(`code`,{children:`MaterialKey`}),value:`MaterialKey`,component:j,to:`MaterialKey`}),b(N,{label:`Version History`,value:`VersionHistory`,component:j,to:`VersionHistory`})]})})}),b(s,{item:!0,xs:12,md:10,children:b(_,{bgt:`light`,sx:{height:`100%`},children:b(o,{children:b(F.Suspense,{fallback:b(u,{variant:`rectangular`,width:`100%`,height:600}),children:C(S,{children:[b(w,{index:!0,element:b(V,{})}),b(w,{path:`/VersionHistory`,element:b(J,{})}),b(w,{path:`/MaterialKey`,element:b(q,{})}),b(w,{path:`/ArtifactSetKey`,element:b(W,{})}),b(w,{path:`/WeaponKey`,element:b(K,{})}),b(w,{path:`/CharacterKey`,element:b(G,{})}),b(w,{path:`/StatKey`,element:b(U,{})}),b(w,{path:`/KeyNaming`,element:b(H,{})})]})})})})})]})})]})}var L=`interface IGOOD {
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
}`;function V(){return C(h,{children:[b(l,{gutterBottom:!0,variant:`h4`,children:`Genshin Open Object Description (GOOD)`}),C(l,{gutterBottom:!0,children:[b(`strong`,{children:`GOOD`}),` is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion.`]}),b(l,{gutterBottom:!0,children:`As of version 6.0.0, Genshin Optimizer's database export conforms to this format.`}),b(g,{text:L}),b(`br`,{}),b(l,{gutterBottom:!0,variant:`h4`,children:`Artifact data representation`}),b(g,{text:R}),b(`br`,{}),b(l,{gutterBottom:!0,variant:`h4`,children:`Weapon data representation`}),b(g,{text:z}),b(`br`,{}),b(l,{gutterBottom:!0,variant:`h4`,children:`Character data representation`}),b(g,{text:B})]})}function H(){return C(_,{children:[b(o,{children:b(l,{children:`Key Naming Convention`})}),b(O,{}),C(o,{children:[C(l,{gutterBottom:!0,children:[`The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in `,b(`strong`,{children:`PascalCase`}),`. This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)`]}),C(l,{gutterBottom:!0,children:[` `,`To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:`]}),C(l,{children:[b(`code`,{children:`Gladiator's Finale`}),` `,b(P.default,{sx:{verticalAlign:`bottom`}}),` `,b(`code`,{children:`GladiatorsFinale`})]}),C(l,{children:[b(`code`,{children:`Spirit Locket of Boreas`}),` `,b(P.default,{sx:{verticalAlign:`bottom`}}),` `,b(`code`,{children:`SpiritLocketOfBoreas`})]}),C(l,{children:[b(`code`,{children:`"The Catch"`}),` `,b(P.default,{sx:{verticalAlign:`bottom`}}),` `,b(`code`,{children:`TheCatch`})]})]})]})}function U(){let{t:e}=a(`statKey_gen`),t=`type StatKey\n  = ${[`hp`,`hp_`,`atk`,`atk_`,`def`,`def_`,`eleMas`,`enerRech_`,`heal_`,`critRate_`,`critDMG_`,`physical_dmg_`,`anemo_dmg_`,`geo_dmg_`,`electro_dmg_`,`hydro_dmg_`,`pyro_dmg_`,`cryo_dmg_`,`dendro_dmg_`].map(t=>`"${t}" //${e(t)}${A(t)}`).join(`
  | `)}`;return C(h,{children:[b(l,{gutterBottom:!0,variant:`h4`,children:`StatKey`}),b(g,{text:t})]})}function W(){let{t:e}=a(`artifactNames_gen`),t=`type ArtifactSetKey\n  = ${[...new Set(i)].sort().map(t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`).join(`
  | `)}`;return C(h,{children:[b(l,{gutterBottom:!0,variant:`h4`,children:`ArtifactSetKey`}),b(g,{text:t})]})}function G(){let{t:e}=a(`charNames_gen`),t=T(),{gender:r}=D(),i=`type CharacterKey\n  = ${[...new Set(x)].sort().map(i=>`"${i}" //${e(`charNames_gen:${n(t.chars.LocationToCharacterKey(i),r)}`)}`).join(`
  | `)}`;return C(h,{children:[b(l,{gutterBottom:!0,variant:`h4`,children:`CharacterKey`}),b(g,{text:i})]})}function K(){let{t:e}=a(`weaponNames_gen`),t=`type WeaponKey\n  = ${[...new Set(y)].sort().map(t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`).join(`
  | `)}`;return C(h,{children:[b(l,{gutterBottom:!0,variant:`h4`,children:`WeaponKey`}),b(g,{text:t})]})}function q(){let{t:e}=a(`material_gen`),t=`type MaterialKey\n  = ${Object.keys(E.material).sort().map(t=>`"${t}" // ${e(`${t}.name`)}`).join(`
  | `)}`;return C(h,{children:[b(l,{gutterBottom:!0,variant:`h4`,children:`MaterialKey`}),C(l,{gutterBottom:!0,children:[`The item names are taken from the english translation, and then converted into`,` `,b(k,{component:j,to:`KeyNaming`,children:b(`code`,{children:`PascalCase`})}),`.`]}),b(g,{text:t})]})}function J(){return C(f,{display:`flex`,flexDirection:`column`,gap:2,children:[b(l,{gutterBottom:!0,variant:`h4`,children:`Version History`}),C(_,{children:[b(o,{children:b(l,{children:`Version 1`})}),b(O,{}),b(o,{children:C(l,{children:[`Created general `,b(`code`,{children:`IGOOD`}),` format with character, weapon, artifact fields.`]})})]}),C(_,{children:[b(o,{children:b(l,{children:`Version 2`})}),b(O,{}),b(o,{children:C(l,{children:[`Adds `,b(`code`,{children:`materials`}),` field to `,b(`code`,{children:`IGOOD`}),`. All other fields remain the same. V2 is backwards compatible with V1.`]})})]}),C(_,{children:[b(o,{children:b(l,{children:`Version 3`})}),b(O,{}),b(o,{children:C(l,{children:[`Adds new fields to `,b(`code`,{children:`IArtifact`}),` to represent new in-game properties, store initial rolls for reroll information, and help differentiate between 3 and 4-line starts for 5* artifacts. All other fields remain the same. V3 is backwards compatible with V2.`,b(`br`,{}),`New fields for `,b(`code`,{children:`IArtifact`}),`:`,` `,b(`code`,{children:`totalRolls, astralMark, elixirCrafted, unactivatedSubstats`}),b(`br`,{}),`New field for `,b(`code`,{children:`ISubstat`}),`: `,b(`code`,{children:`initialValue`})]})})]})]})}export{I as default};