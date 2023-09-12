import { User } from "../model/user/user.model";

export interface LoginResponse {
    access_token: string;
    user: User;
}
