# Coaching
## Requirement
node js
git

## Common setup

Clone the repo and install the dependencies.

```bash
git clone  https://github.com/utkarshgubrelay2000/EklavyaCoaching.git
cd Student.nodejs
```

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm run start:dev
```

Open [http://localhost:4000](http://localhost:4000) and take a look around.
## Api's-->>>>>


  #### SignIn->
   ###### Request type-: Post,
   ##### Url:url/signin,
   ######  Details:  find email in UserSchema and then it  compare password with bcrypt.js..if password matchs then it send response as code:success and token which is generarted with   the help of jsonwebtoken.
   ######   Body-include-: {email:string,password:string,}
 ##### Response:{code:'signed in successfully',token:jwttoken,email,name}

  ##### important:validation applied 


   ####  SignUp->
   ###### Request type-: Post,
   ######  Url:url/signup,
   ######  Body-include-: {
   ###### name, email, mobile, password,  }
   ######  
  ###### Response:{student saved succesfully}
  ##### important:validation applied 
