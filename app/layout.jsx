import React, { Children } from 'react'
import "@styles/globals.css"



export const metdata = {
    title: "Promtopia",
    descripton: "Discover and Share Ai Prompts"
}
const RootLayout = ({ children }) => {
    return (
        <html lang='en' >

            <body>
                <div className='main'>
                    <div className='gradient'></div>
                </div>

                <main className='app'>
                    {children}
                </main>
            </body>

        </html>
    )
}

export default RootLayout