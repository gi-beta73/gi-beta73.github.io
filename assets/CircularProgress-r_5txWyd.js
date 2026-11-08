import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{An as t,B as n,Dn as r,Dr as i,En as a,Er as o,H as s,I as c,Ir as l,Mn as u,Nn as d,R as f,Tr as p,Tt as m,V as h,_r as g,br as _,gr as v,kn as y,vr as b,wr as x,wt as S,z as C}from"./useTranslation-BGRQLB-9.js";var w=e(l());i(),p();var T=e(v());d(),S(),h(),n(),c(),a(),y();function E(e){return t(`MuiCircularProgress`,e)}r(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`circle`,`circleDeterminate`,`circleIndeterminate`,`circleDisableShrink`]),b();var D=[`className`,`color`,`disableShrink`,`size`,`style`,`thickness`,`value`,`variant`],O=e=>e,k,A,j,M,N=44,P=_(k||=O`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`),F=_(A||=O`
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
`),I=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e,a={root:[`root`,n,`color${C(r)}`],svg:[`svg`],circle:[`circle`,`circle${C(n)}`,i&&`circleDisableShrink`]};return m(a,E,t)},L=s(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${C(n.color)}`]]}})(({ownerState:e,theme:t})=>o({display:`inline-block`},e.variant===`determinate`&&{transition:t.transitions.create(`transform`)},e.color!==`inherit`&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>e.variant===`indeterminate`&&g(j||=O`
      animation: ${0} 1.4s linear infinite;
    `,P)),R=s(`svg`,{name:`MuiCircularProgress`,slot:`Svg`,overridesResolver:(e,t)=>t.svg})({display:`block`}),z=s(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,t[`circle${C(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>o({stroke:`currentColor`},e.variant===`determinate`&&{transition:t.transitions.create(`stroke-dashoffset`)},e.variant===`indeterminate`&&{strokeDasharray:`80px, 200px`,strokeDashoffset:0}),({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink&&g(M||=O`
      animation: ${0} 1.4s ease-in-out infinite;
    `,F)),B=w.forwardRef(function(e,t){let n=f({props:e,name:`MuiCircularProgress`}),{className:r,color:i=`primary`,disableShrink:a=!1,size:s=40,style:c,thickness:l=3.6,value:d=0,variant:p=`indeterminate`}=n,m=x(n,D),h=o({},n,{color:i,disableShrink:a,size:s,thickness:l,value:d,variant:p}),g=I(h),_={},v={},y={};if(p===`determinate`){let e=2*Math.PI*((N-l)/2);_.strokeDasharray=e.toFixed(3),y[`aria-valuenow`]=Math.round(d),_.strokeDashoffset=`${((100-d)/100*e).toFixed(3)}px`,v.transform=`rotate(-90deg)`}return(0,T.jsx)(L,o({className:u(g.root,r),style:o({width:s,height:s},v,c),ownerState:h,ref:t,role:`progressbar`},y,m,{children:(0,T.jsx)(R,{className:g.svg,ownerState:h,viewBox:`${N/2} ${N/2} ${N} ${N}`,children:(0,T.jsx)(z,{className:g.circle,style:_,ownerState:h,cx:N,cy:N,r:(N-l)/2,fill:`none`,strokeWidth:l})})}))});export{B as t};