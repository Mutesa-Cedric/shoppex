import React from 'react'

function profile() {
    let logout = () => {

    }
    return (
        <div className='w-full h-screen'>
            <div>
                <h1>Your Profile</h1>
                <div>

                </div>
            </div>
            <div>
                <h1>
                    your recent activities
                </h1>
                <div>

                </div>
            </div>
            <div>
                <h1>
                    statistics
                </h1>
                <div>

                </div>
            </div>
            <div>
                <button className='px-4 py-2 bg-red-500' onClick={() => logout()}>
                    logout
                </button>
            </div>
        </div>
    )
}
export default profile