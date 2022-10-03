import {codeZoneInputFilteration} from './codeZoneInputFilteration';
import {helper} from './helper';

export const codeZoneFormValidation=(inputs)=>{
//console.log(inputs);
inputs.forEach((input)=>{
    codeZoneInputFilteration(input);
})
return helper.buildSchema();
}