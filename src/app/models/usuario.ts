import { User } from "@angular/fire/auth"

export type Usuario = {
    uid:            string
    displayName:    string
    email:          string
    emailVerified:  boolean
    photoURL:       string
    refreshToken:   string
}
export const Usuario = (firebase: any): Usuario => {
    return {
        uid:            firebase.uid,
        displayName:    firebase.displayName ?? '',
        email:          firebase.email ?? '',
        emailVerified:  firebase.emailVerified,
        photoURL:       firebase.photoURL ?? '',
        refreshToken:   firebase.refreshToken
    }
}