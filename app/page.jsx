import Feed from '@component/feed'
import React from 'react'

const page = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>
                Discover & Share
                <br />
                <span className='orange_gradient'>
                    AI-Powered Prompts
                </span>
                <p className='desc text-center'>
                    promtopia is an ope-source AI prompting tool
                    for modern world to discover, create
                    and share creative prompts
                </p>
            </h1>

            <Feed />




        </section>
    )
}

export default page