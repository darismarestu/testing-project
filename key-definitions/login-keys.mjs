class LoginKeys {
    loginForm = `//*[@id="login-form"]`
    inputUsername = `//*[@id="username"]`;
    inputPassword = `//*[@id="password"]`;

    inpatientWard = `//*[@id="Inpatient Ward"]`;
    isolationWard = `//*[@id="Isolation Ward"]`;  
    laboratory = `//*[@id="Laboratory"]`;  
    outpatientClinic = `//*[@id="Outpatient Clinic"]`;  
    pharmacy = `//*[@id="Pharmacy"]`;  
    registrationDesk= `//*[@id="Registration Desk"]`; 

    loginButton = `//*[@id="loginButton"]`;    
}
const loginKeys = new LoginKeys();
export default loginKeys;