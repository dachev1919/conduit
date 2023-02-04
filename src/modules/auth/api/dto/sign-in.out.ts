export interface ISignInOutDTO {
    user: User;
}

interface User {
    email: string;
    password: string;
}