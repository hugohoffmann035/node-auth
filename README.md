# **NODE.JS API**

## **Required**
- Node >= 14.15.3 & npm >= 6.14.9
- Git

## **Dependencies**
- bcrypt
- body-parser
- cors
- dotenv
- express
- jsonwebtoken
- nodemon
- uuid

## **Features**
- Autentication JWT
- Register new User

## **How to use?**

### **Settings**
1. Run: `git clone https://github.com/hugohoffmann035/node-auth.git`
2. Enter the folder: `cd node-auth`
3. Install all dependencies: `npm install` or `yarn`
4. Run project: `npm run start` or `yarn start`

## **Routes**
### **Register**
- #### **METHOD POST:** http://localhost:3333/api/register **body**: { email: '', password: '' }
### **Login**
- #### **METHOD GET:** http://localhost:3333/api/login **body**: { email: '', password: '' }