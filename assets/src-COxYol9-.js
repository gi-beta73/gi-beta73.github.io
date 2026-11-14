import{o as e,t}from"./rolldown-runtime-C0FnF6B9.js";import{i as n,n as r,r as i}from"./DatabaseContext-ClKIKkmJ.js";import{Lr as a,_ as o,_r as s,d as c,f as l,g as u,m as d,nt as f,p,t as m,u as h}from"./useTranslation-C0CXZ-Cu.js";import{t as g}from"./Link-CBDufWPm.js";import{n as _,t as v}from"./Tabs-DNMcjtri.js";import{t as y}from"./SqBadge-CfnUrlcO.js";import{t as b}from"./CodeBlock-b0uU-tSu.js";import{a as x,l as S,r as C}from"./dist-BiezwG5C.js";import{t as w}from"./PageHeader-BW4v6Tjl.js";import{F as T,h as E,l as D}from"./src-CzNMlSsN.js";import{n as O}from"./weapon-BdRH2tVr.js";import{t as k}from"./src-BUEVywuP.js";import{t as A}from"./useDatabase-yHpkB7qh.js";import{t as j}from"./util-CIuJoRXW.js";import{et as M,st as N,w as P}from"./index-SCer6MzY.js";var F=e(t((e=>{var t=f();Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(r()),i=s();e.default=(0,n.default)((0,i.jsx)(`path`,{d:`M16.01 11H4v2h12.01v3L20 12l-3.99-4z`}),`ArrowRightAlt`)}))()),I=e(a());function L(){let{params:{currentTab:e}}=S(`/doc/:currentTab`)??{params:{currentTab:``}};return p(u,{display:`flex`,flexDirection:`column`,gap:1,children:[l(w,{title:`Documentation`,actions:l(y,{color:`info`,children:`Version 3`})}),l(h,{children:l(d,{children:p(N,{container:!0,spacing:1,children:[l(N,{item:!0,xs:12,md:2,children:l(h,{bgt:`light`,sx:{height:`100%`},children:p(v,{orientation:`vertical`,value:e,"aria-label":`Documentation Navigation`,sx:{borderRight:1,borderColor:`divider`},children:[l(_,{label:`Overview`,value:``,component:M,to:``}),l(_,{label:`Key naming convention`,value:`KeyNaming`,component:M,to:`KeyNaming`}),l(_,{label:l(`code`,{children:`StatKey`}),value:`StatKey`,component:M,to:`StatKey`}),l(_,{label:l(`code`,{children:`ArtifactSetKey`}),value:`ArtifactSetKey`,component:M,to:`ArtifactSetKey`}),l(_,{label:l(`code`,{children:`CharacterKey`}),value:`CharacterKey`,component:M,to:`CharacterKey`}),l(_,{label:l(`code`,{children:`WeaponKey`}),value:`WeaponKey`,component:M,to:`WeaponKey`}),l(_,{label:l(`code`,{children:`MaterialKey`}),value:`MaterialKey`,component:M,to:`MaterialKey`}),l(_,{label:`Version History`,value:`VersionHistory`,component:M,to:`VersionHistory`})]})})}),l(N,{item:!0,xs:12,md:10,children:l(h,{bgt:`light`,sx:{height:`100%`},children:l(d,{children:l(I.Suspense,{fallback:l(i,{variant:`rectangular`,width:`100%`,height:600}),children:p(x,{children:[l(C,{index:!0,element:l(H,{})}),l(C,{path:`/VersionHistory`,element:l(Y,{})}),l(C,{path:`/MaterialKey`,element:l(J,{})}),l(C,{path:`/ArtifactSetKey`,element:l(G,{})}),l(C,{path:`/WeaponKey`,element:l(q,{})}),l(C,{path:`/CharacterKey`,element:l(K,{})}),l(C,{path:`/StatKey`,element:l(W,{})}),l(C,{path:`/KeyNaming`,element:l(U,{})})]})})})})})]})})})]})}var R=`interface IGOOD {
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
}`;function H(){return p(c,{children:[l(o,{gutterBottom:!0,variant:`h4`,children:`Genshin Open Object Description (GOOD)`}),p(o,{gutterBottom:!0,children:[l(`strong`,{children:`GOOD`}),` is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion.`]}),l(o,{gutterBottom:!0,children:`Stellar Optimizer's database export conforms to this format. For compatibility with other GOOD tools, exports keep the source name shown in the examples below.`}),l(b,{text:R}),l(`br`,{}),l(o,{gutterBottom:!0,variant:`h4`,children:`Artifact data representation`}),l(b,{text:z}),l(`br`,{}),l(o,{gutterBottom:!0,variant:`h4`,children:`Weapon data representation`}),l(b,{text:B}),l(`br`,{}),l(o,{gutterBottom:!0,variant:`h4`,children:`Character data representation`}),l(b,{text:V})]})}function U(){return p(h,{children:[l(d,{children:l(o,{children:`Key Naming Convention`})}),l(n,{}),p(d,{children:[p(o,{gutterBottom:!0,children:[`The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in `,l(`strong`,{children:`PascalCase`}),`. This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)`]}),p(o,{gutterBottom:!0,children:[` `,`To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:`]}),p(o,{children:[l(`code`,{children:`Gladiator's Finale`}),` `,l(F.default,{sx:{verticalAlign:`bottom`}}),` `,l(`code`,{children:`GladiatorsFinale`})]}),p(o,{children:[l(`code`,{children:`Spirit Locket of Boreas`}),` `,l(F.default,{sx:{verticalAlign:`bottom`}}),` `,l(`code`,{children:`SpiritLocketOfBoreas`})]}),p(o,{children:[l(`code`,{children:`"The Catch"`}),` `,l(F.default,{sx:{verticalAlign:`bottom`}}),` `,l(`code`,{children:`TheCatch`})]})]})]})}function W(){let{t:e}=m(`statKey_gen`),t=`type StatKey\n  = ${[`hp`,`hp_`,`atk`,`atk_`,`def`,`def_`,`eleMas`,`enerRech_`,`heal_`,`critRate_`,`critDMG_`,`physical_dmg_`,`anemo_dmg_`,`geo_dmg_`,`electro_dmg_`,`hydro_dmg_`,`pyro_dmg_`,`cryo_dmg_`,`dendro_dmg_`].map(t=>`"${t}" //${e(t)}${j(t)}`).join(`
  | `)}`;return p(c,{children:[l(o,{gutterBottom:!0,variant:`h4`,children:`StatKey`}),l(b,{text:t})]})}function G(){let{t:e}=m(`artifactNames_gen`),t=`type ArtifactSetKey\n  = ${[...new Set(T)].sort().map(t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`).join(`
  | `)}`;return p(c,{children:[l(o,{gutterBottom:!0,variant:`h4`,children:`ArtifactSetKey`}),l(b,{text:t})]})}function K(){let{t:e}=m(`charNames_gen`),t=A(),{gender:n}=P(),r=`type CharacterKey\n  = ${[...new Set(D)].sort().map(r=>`"${r}" //${e(`charNames_gen:${E(t.chars.LocationToCharacterKey(r),n)}`)}`).join(`
  | `)}`;return p(c,{children:[l(o,{gutterBottom:!0,variant:`h4`,children:`CharacterKey`}),l(b,{text:r})]})}function q(){let{t:e}=m(`weaponNames_gen`),t=`type WeaponKey\n  = ${[...new Set(O)].sort().map(t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`).join(`
  | `)}`;return p(c,{children:[l(o,{gutterBottom:!0,variant:`h4`,children:`WeaponKey`}),l(b,{text:t})]})}function J(){let{t:e}=m(`material_gen`),t=`type MaterialKey\n  = ${Object.keys(k.material).sort().map(t=>`"${t}" // ${e(`${t}.name`)}`).join(`
  | `)}`;return p(c,{children:[l(o,{gutterBottom:!0,variant:`h4`,children:`MaterialKey`}),p(o,{gutterBottom:!0,children:[`The item names are taken from the english translation, and then converted into`,` `,l(g,{component:M,to:`KeyNaming`,children:l(`code`,{children:`PascalCase`})}),`.`]}),l(b,{text:t})]})}function Y(){return p(u,{display:`flex`,flexDirection:`column`,gap:2,children:[l(o,{gutterBottom:!0,variant:`h4`,children:`Version History`}),p(h,{children:[l(d,{children:l(o,{children:`Version 1`})}),l(n,{}),l(d,{children:p(o,{children:[`Created general `,l(`code`,{children:`IGOOD`}),` format with character, weapon, artifact fields.`]})})]}),p(h,{children:[l(d,{children:l(o,{children:`Version 2`})}),l(n,{}),l(d,{children:p(o,{children:[`Adds `,l(`code`,{children:`materials`}),` field to `,l(`code`,{children:`IGOOD`}),`. All other fields remain the same. V2 is backwards compatible with V1.`]})})]}),p(h,{children:[l(d,{children:l(o,{children:`Version 3`})}),l(n,{}),l(d,{children:p(o,{children:[`Adds new fields to `,l(`code`,{children:`IArtifact`}),` to represent new in-game properties, store initial rolls for reroll information, and help differentiate between 3 and 4-line starts for 5* artifacts. All other fields remain the same. V3 is backwards compatible with V2.`,l(`br`,{}),`New fields for `,l(`code`,{children:`IArtifact`}),`:`,` `,l(`code`,{children:`totalRolls, astralMark, elixirCrafted, unactivatedSubstats`}),l(`br`,{}),`New field for `,l(`code`,{children:`ISubstat`}),`: `,l(`code`,{children:`initialValue`})]})})]})]})}export{L as default};