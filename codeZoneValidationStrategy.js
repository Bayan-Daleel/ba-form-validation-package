export const codeZoneValidationStrategy={
required:(inputValue,rule)=>{
if(rule.value && !inputValue){
    return rule.errMsg;
   // console.error(rule.errMsg);
}
},
maxLength:(inputValue,rule)=>{
if(inputValue.length >rule.value || !inputValue){
    return rule.errMsg;
}
},
minLength:(inputValue,rule)=>{
    if(inputValue.length < rule.value || !inputValue){
        return rule.errMsg;
    }
},
}