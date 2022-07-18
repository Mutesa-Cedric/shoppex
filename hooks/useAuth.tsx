// imports
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
    signInWithPopup,
} from 'firebase/auth'
import { async } from '@firebase/util'
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { auth, provider } from '../firebase'

interface IAuth {
    user: User | null
    signUp: (email: string, password: string) => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    signUpWithGoogle: () => Promise<void>
    loginWithGoogle: () => Promise<void>
    error: string | null
    loading: boolean
    initialLoading: boolean
}


// imports

const AuthContext = createContext<IAuth>({
    user: null,
    signUp: async () => { },
    signIn: async () => { },
    logout: async () => { },
    signUpWithGoogle: async () => { },
    loginWithGoogle: async () => { },
    error: null,
    loading: false,
    initialLoading: true
})
interface AuthProviderProps {
    children: React.ReactNode
}

//this is my custom hook that will be used to authenticate the user
export function AuthProvider({ children }: AuthProviderProps) {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [initialLoading, setInitialLoading] = useState(true);

    // User is authenticated
    useEffect(
        () =>
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // Logged in...
                    setUser(user)
                    setLoading(false)
                    setInitialLoading(false)
                } else {
                    // Not logged in...
                    setUser(null)
                    setLoading(true)
                    router.push('/welcome')
                    setTimeout(() => {
                        setInitialLoading(false)
                    }, 700)
                }
            }),
        [auth]
    )
    // User is authenticated


    const router = useRouter();
    // signup function
    const signUp = async (email: string, password: string) => {
        setLoading(true);

        // creating a use with email and password
        //this is a function from firebase that will create a user with email and password
        //it receives auth,email and password as parameters

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                console.log(user);
                router.push('/items');
                setLoading(false)
            }).catch((err) => {
                alert(err.message);
            }).finally(() => {
                setLoading(false);
            })
    }
    // signup function

    // signin function
    const signIn = async (email: string, password: string) => {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setLoading(false)
                setUser(userCredential.user);
                router.push('/items');
            }).catch((err) => {
                setError(err.message);
            }).finally(() => {
                setLoading(false);
            })
    }
    //signin function

    //logout function

    const logout = async () => {
        setLoading(true);
        await signOut(auth).then(() => {
            // setLoading(false);
            setUser(null);
            router.push('/');
        }).catch((err) => {
            setError(err.message);
        }).finally(() => {
            setLoading(false);
        })
    }

    //logout function

    // signup with google
    const signUpWithGoogle = async () => {
        setLoading(true);
        await signInWithPopup(auth, provider)
            .then((userCredential) => {
                setUser(userCredential.user);
                router.push('/items');
            }
            ).catch((err) => {
                setError(err.message);
            }
            ).finally(() => {
                setLoading(false);
            }
            )
    }
    // signup with google

    // login with google

    const loginWithGoogle = async () => {
        setLoading(true);
        await signInWithPopup(auth, provider)
            .then((userCredential) => {
                setUser(userCredential.user);
                router.push('/items');
            }
            ).catch((err) => {
                setError(err.message);
            }
            ).finally(() => {
                setLoading(false);
            }
            )
    }

    // login with google


    //useMemo to increase performance
    const memoedValue = useMemo(() => ({
        user, signUp, signIn, loading, logout, error, loginWithGoogle, signUpWithGoogle, initialLoading
    }), [user, loading, error, initialLoading])
    //useMemo to increase performance

    //returning context to share info accross page
    return (<AuthContext.Provider value={memoedValue}>
        {children}
    </AuthContext.Provider>);
    //returning context to share info accross page

}

export default function useAuth() {
    return useContext(AuthContext);
}