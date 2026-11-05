import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{An as t,B as n,Dn as r,Dr as i,Er as a,Et as o,H as s,L as c,Lr as l,Nn as u,On as d,Or as f,Pn as p,Tr as m,Tt as h,U as g,V as _,_r as v,jn as y,vr as b,xr as x,yr as S,z as C}from"./useTranslation-BSALappx.js";var w=e(l());f(),a();var T=e(v());p(),h(),s(),_(),c(),r(),t();function E(e){return y(`MuiCircularProgress`,e)}d(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`circle`,`circleDeterminate`,`circleIndeterminate`,`circleDisableShrink`]),S();var D=[`className`,`color`,`disableShrink`,`size`,`style`,`thickness`,`value`,`variant`],O=e=>e,k,A,j,M,N=44,P=x(k||=O`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`),F=x(A||=O`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`),I=e=>{let{classes:t,variant:r,color:i,disableShrink:a}=e,s={root:[`root`,r,`color${n(i)}`],svg:[`svg`],circle:[`circle`,`circle${n(r)}`,a&&`circleDisableShrink`]};return o(s,E,t)},L=g(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`color${n(r.color)}`]]}})(({ownerState:e,theme:t})=>i({display:`inline-block`},e.variant===`determinate`&&{transition:t.transitions.create(`transform`)},e.color!==`inherit`&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>e.variant===`indeterminate`&&b(j||=O`
      animation: ${0} 1.4s linear infinite;
    `,P)),R=g(`svg`,{name:`MuiCircularProgress`,slot:`Svg`,overridesResolver:(e,t)=>t.svg})({display:`block`}),z=g(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.circle,t[`circle${n(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>i({stroke:`currentColor`},e.variant===`determinate`&&{transition:t.transitions.create(`stroke-dashoffset`)},e.variant===`indeterminate`&&{strokeDasharray:`80px, 200px`,strokeDashoffset:0}),({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink&&b(M||=O`
      animation: ${0} 1.4s ease-in-out infinite;
    `,F)),B=w.forwardRef(function(e,t){let n=C({props:e,name:`MuiCircularProgress`}),{className:r,color:a=`primary`,disableShrink:o=!1,size:s=40,style:c,thickness:l=3.6,value:d=0,variant:f=`indeterminate`}=n,p=m(n,D),h=i({},n,{color:a,disableShrink:o,size:s,thickness:l,value:d,variant:f}),g=I(h),_={},v={},y={};if(f===`determinate`){let e=2*Math.PI*((N-l)/2);_.strokeDasharray=e.toFixed(3),y[`aria-valuenow`]=Math.round(d),_.strokeDashoffset=`${((100-d)/100*e).toFixed(3)}px`,v.transform=`rotate(-90deg)`}return(0,T.jsx)(L,i({className:u(g.root,r),style:i({width:s,height:s},v,c),ownerState:h,ref:t,role:`progressbar`},y,p,{children:(0,T.jsx)(R,{className:g.svg,ownerState:h,viewBox:`${N/2} ${N/2} ${N} ${N}`,children:(0,T.jsx)(z,{className:g.circle,style:_,ownerState:h,cx:N,cy:N,r:(N-l)/2,fill:`none`,strokeWidth:l})})}))});export{B as t};