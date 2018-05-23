export const getValueProp=(value=``)=>(props={})=>
  Object.keys(props).reduce((actions, prop)=>({
    ...actions,
    [prop]: props[prop][value]
  }), {});