export const keyMirror=(keys={}, prefix=`action`)=>
  Object.keys(keys).reduce((mirror, action)=>({
    ...mirror,
    [action]: `${prefix}_${action}`
  }), {});

export { getValueProp } from '../utils';