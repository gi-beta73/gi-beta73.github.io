import{o as e,t}from"./rolldown-runtime-C0FnF6B9.js";import{i as n,n as r,o as i,r as a}from"./DatabaseContext-C2OrScdj.js";import{Lr as o,_ as s,_r as c,d as l,f as u,g as d,m as f,nt as p,p as m,t as h,u as g}from"./useTranslation-C0CXZ-Cu.js";import{t as _}from"./Link-CBDufWPm.js";import{n as v,t as y}from"./Tabs-C6mA0GRu.js";import{t as b}from"./SqBadge-CfnUrlcO.js";import{t as x}from"./CodeBlock-DHyIMJqe.js";import{a as S,l as C,r as w}from"./dist-BiezwG5C.js";import{t as T}from"./PageHeader-BW4v6Tjl.js";import{F as E,h as D,l as O}from"./src-D-yXFpP3.js";import{n as k}from"./weapon-CmpV28w3.js";import{n as A,t as j}from"./useDBMeta-BcF-ALvO.js";import{t as M}from"./useDatabase-nYjP7CJ0.js";import{t as N}from"./util-CIuJoRXW.js";import{In as P,On as F}from"./index-st6UBX9b.js";var I=t((e=>{var t=p();Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(r()),i=c();e.default=(0,n.default)((0,i.jsx)(`path`,{d:`M16.01 11H4v2h12.01v3L20 12l-3.99-4z`}),`ArrowRightAlt`)})),L=e(o()),R=e(I()),z=`https://stellaroptimizer.com/#/teams/import?data=z.<base64url(deflateRaw(JSON))>`;function B(){return u(g,{children:m(f,{sx:{display:`flex`,flexDirection:`column`,gap:1.5},children:[u(s,{variant:`h5`,children:`Team links`}),u(s,{children:`A team link opens a team from another site in Stellar Optimizer: its members, their builds and its rotation. The player imports it as a new team, then runs it on those builds or switches to their own. No server or API is needed: the team rides in the link.`}),u(x,{text:z}),u(s,{children:`The format (fields, rules, rotation syntax and code to make the link) is on its own page.`}),u(`div`,{children:u(i,{variant:`outlined`,color:`inherit`,href:`/import-spec/`,target:`_blank`,rel:`noopener`,children:`Team link format`})})]})})}function V(){let{params:{currentTab:e}}=C(`/doc/:currentTab`)??{params:{currentTab:``}};return m(d,{display:`flex`,flexDirection:`column`,gap:1,children:[u(T,{title:`Documentation`,actions:u(b,{color:`info`,children:`Version 3`})}),u(g,{children:u(f,{children:m(P,{container:!0,spacing:1,children:[u(P,{item:!0,xs:12,md:2,children:u(g,{bgt:`light`,sx:{height:`100%`},children:m(y,{orientation:`vertical`,value:e,"aria-label":`Documentation Navigation`,sx:{borderRight:1,borderColor:`divider`},children:[u(v,{label:`Overview`,value:``,component:F,to:``}),u(v,{label:`Key naming convention`,value:`KeyNaming`,component:F,to:`KeyNaming`}),u(v,{label:u(`code`,{children:`StatKey`}),value:`StatKey`,component:F,to:`StatKey`}),u(v,{label:u(`code`,{children:`ArtifactSetKey`}),value:`ArtifactSetKey`,component:F,to:`ArtifactSetKey`}),u(v,{label:u(`code`,{children:`CharacterKey`}),value:`CharacterKey`,component:F,to:`CharacterKey`}),u(v,{label:u(`code`,{children:`WeaponKey`}),value:`WeaponKey`,component:F,to:`WeaponKey`}),u(v,{label:u(`code`,{children:`MaterialKey`}),value:`MaterialKey`,component:F,to:`MaterialKey`}),u(v,{label:`Team links`,value:`TeamLink`,component:F,to:`TeamLink`}),u(v,{label:`Version History`,value:`VersionHistory`,component:F,to:`VersionHistory`})]})})}),u(P,{item:!0,xs:12,md:10,children:u(g,{bgt:`light`,sx:{height:`100%`},children:u(f,{children:u(L.Suspense,{fallback:u(a,{variant:`rectangular`,width:`100%`,height:600}),children:m(S,{children:[u(w,{index:!0,element:u(K,{})}),u(w,{path:`/VersionHistory`,element:u($,{})}),u(w,{path:`/MaterialKey`,element:u(Q,{})}),u(w,{path:`/ArtifactSetKey`,element:u(Y,{})}),u(w,{path:`/WeaponKey`,element:u(Z,{})}),u(w,{path:`/CharacterKey`,element:u(X,{})}),u(w,{path:`/StatKey`,element:u(J,{})}),u(w,{path:`/KeyNaming`,element:u(q,{})}),u(w,{path:`/TeamLink`,element:u(B,{})})]})})})})})]})})})]})}var H=`interface IGOOD {
  format: "GOOD" // A way for people to recognize this format.
  version: number // GOOD API version.
  source: string // The app that generates this data.
  characters?: ICharacter[]
  artifacts?: IArtifact[]
  weapons?: IWeapon[]
  materials?: { // Added in version 2
    [key:MaterialKey]: number
  }
}`,U=`interface IArtifact {
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

type SlotKey = "flower" | "plume" | "sands" | "goblet" | "circlet"`,W=`interface IWeapon {
  key: WeaponKey //"CrescentPike"
  level: number //1-90 inclusive
  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80
  refinement: number //1-5 inclusive
  location: CharacterKey | "" //where "" means not equipped.
  lock: boolean //Whether the weapon is locked in game.
}`,G=`interface ICharacter {
  key: CharacterKey //e.g. "Rosaria"
  level: number //1-100 inclusive
  constellation: number //0-6 inclusive
  ascension: number //0-6 inclusive. need to disambiguate 80/90 or 80/80
  talent: { //does not include boost from constellations. 1-15 inclusive
    auto: number
    skill: number
    burst: number
  }
}`;function K(){return m(l,{children:[u(s,{gutterBottom:!0,variant:`h4`,children:`Genshin Open Object Description (GOOD)`}),m(s,{gutterBottom:!0,children:[u(`strong`,{children:`GOOD`}),` is a data format description to map Genshin Data into a parsable JSON. This is intended to be a standardized format to allow Genshin developers/programmers to transfer data without needing manual conversion.`]}),u(s,{gutterBottom:!0,children:`Stellar Optimizer's database export conforms to this format. For compatibility with other GOOD tools, exports keep the source name shown in the examples below.`}),u(x,{text:H}),u(`br`,{}),u(s,{gutterBottom:!0,variant:`h4`,children:`Artifact data representation`}),u(x,{text:U}),u(`br`,{}),u(s,{gutterBottom:!0,variant:`h4`,children:`Weapon data representation`}),u(x,{text:W}),u(`br`,{}),u(s,{gutterBottom:!0,variant:`h4`,children:`Character data representation`}),u(x,{text:G})]})}function q(){return m(g,{children:[u(f,{children:u(s,{children:`Key Naming Convention`})}),u(n,{}),m(f,{children:[m(s,{gutterBottom:!0,children:[`The keys in the GOOD format, like Artifact sets, weapon keys, character keys, are all in `,u(`strong`,{children:`PascalCase`}),`. This makes the name easy to derive from the in-game text, assuming no renames occur. If a rename is needed, then the standard will have to increment versions. (Last change was in 1.2 when the Prototype weapons were renamed)`]}),m(s,{gutterBottom:!0,children:[` `,`To derive the PascalKey from a specific name, remove all symbols from the name, and Capitalize each word:`]}),m(s,{children:[u(`code`,{children:`Gladiator's Finale`}),` `,u(R.default,{sx:{verticalAlign:`bottom`}}),` `,u(`code`,{children:`GladiatorsFinale`})]}),m(s,{children:[u(`code`,{children:`Spirit Locket of Boreas`}),` `,u(R.default,{sx:{verticalAlign:`bottom`}}),` `,u(`code`,{children:`SpiritLocketOfBoreas`})]}),m(s,{children:[u(`code`,{children:`"The Catch"`}),` `,u(R.default,{sx:{verticalAlign:`bottom`}}),` `,u(`code`,{children:`TheCatch`})]})]})]})}function J(){let{t:e}=h(`statKey_gen`),t=`type StatKey\n  = ${[`hp`,`hp_`,`atk`,`atk_`,`def`,`def_`,`eleMas`,`enerRech_`,`heal_`,`critRate_`,`critDMG_`,`physical_dmg_`,`anemo_dmg_`,`geo_dmg_`,`electro_dmg_`,`hydro_dmg_`,`pyro_dmg_`,`cryo_dmg_`,`dendro_dmg_`].map(t=>`"${t}" //${e(t)}${N(t)}`).join(`
  | `)}`;return m(l,{children:[u(s,{gutterBottom:!0,variant:`h4`,children:`StatKey`}),u(x,{text:t})]})}function Y(){let{t:e}=h(`artifactNames_gen`),t=`type ArtifactSetKey\n  = ${[...new Set(E)].sort().map(t=>`"${t}" //${e(`artifactNames_gen:${t}`)}`).join(`
  | `)}`;return m(l,{children:[u(s,{gutterBottom:!0,variant:`h4`,children:`ArtifactSetKey`}),u(x,{text:t})]})}function X(){let{t:e}=h(`charNames_gen`),t=M(),{gender:n}=j(),r=`type CharacterKey\n  = ${[...new Set(O)].sort().map(r=>`"${r}" //${e(`charNames_gen:${D(t.chars.LocationToCharacterKey(r),n)}`)}`).join(`
  | `)}`;return m(l,{children:[u(s,{gutterBottom:!0,variant:`h4`,children:`CharacterKey`}),u(x,{text:r})]})}function Z(){let{t:e}=h(`weaponNames_gen`),t=`type WeaponKey\n  = ${[...new Set(k)].sort().map(t=>`"${t}" //${e(`weaponNames_gen:${t}`)}`).join(`
  | `)}`;return m(l,{children:[u(s,{gutterBottom:!0,variant:`h4`,children:`WeaponKey`}),u(x,{text:t})]})}function Q(){let{t:e}=h(`material_gen`),t=`type MaterialKey\n  = ${Object.keys(A.material).sort().map(t=>`"${t}" // ${e(`${t}.name`)}`).join(`
  | `)}`;return m(l,{children:[u(s,{gutterBottom:!0,variant:`h4`,children:`MaterialKey`}),m(s,{gutterBottom:!0,children:[`The item names are taken from the english translation, and then converted into`,` `,u(_,{component:F,to:`KeyNaming`,children:u(`code`,{children:`PascalCase`})}),`.`]}),u(x,{text:t})]})}function $(){return m(d,{display:`flex`,flexDirection:`column`,gap:2,children:[u(s,{gutterBottom:!0,variant:`h4`,children:`Version History`}),m(g,{children:[u(f,{children:u(s,{children:`Version 1`})}),u(n,{}),u(f,{children:m(s,{children:[`Created general `,u(`code`,{children:`IGOOD`}),` format with character, weapon, artifact fields.`]})})]}),m(g,{children:[u(f,{children:u(s,{children:`Version 2`})}),u(n,{}),u(f,{children:m(s,{children:[`Adds `,u(`code`,{children:`materials`}),` field to `,u(`code`,{children:`IGOOD`}),`. All other fields remain the same. V2 is backwards compatible with V1.`]})})]}),m(g,{children:[u(f,{children:u(s,{children:`Version 3`})}),u(n,{}),u(f,{children:m(s,{children:[`Adds new fields to `,u(`code`,{children:`IArtifact`}),` to represent new in-game properties, store initial rolls for reroll information, and help differentiate between 3 and 4-line starts for 5* artifacts. All other fields remain the same. V3 is backwards compatible with V2.`,u(`br`,{}),`New fields for `,u(`code`,{children:`IArtifact`}),`:`,` `,u(`code`,{children:`totalRolls, astralMark, elixirCrafted, unactivatedSubstats`}),u(`br`,{}),`New field for `,u(`code`,{children:`ISubstat`}),`: `,u(`code`,{children:`initialValue`})]})})]})]})}export{V as default};