# form validation package

 this is simple form validation package .

## Installation

Using npm.

```bash
npm install --save ba-form-validation-package
```

## Usage

index.html
```
<form>
<label >Username</label>
<input type="text" name="username"/>
<br/>
<label >Password</label>
<input type="password" name="password"/>
<br/>
<button type="submit"  id="submitForm">submit</button>
</form>
```

app.js

```
document.querySelector('#submitForm')
.addEventListener('click',(e)=>{
    e.preventDefault();
    const myForm =codeZoneFormValidation([
      {
name: 'username',
rules:[
    {name: 'required', value:true ,errMsg: 'this input is required'},
    {name: 'maxLength', value:10 ,errMsg: 'maxLength error'},
]
      },
      
      {
        name: 'password',
      rules:[
          {name: 'required', value:true ,errMsg: 'this input is required'},
          {name: 'minLength', value:5 ,errMsg: 'minLength error'},
      ]

    }

    ]);
console.log(myForm);
});
```