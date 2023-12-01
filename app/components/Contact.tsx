import React from 'react'

const Contact = () => {
  return (
    <section
        id='contact'
        //className='max-w-contentContainer h-full mx-auto py-10 cl:py-32 flex flex-col gap-6 items-center justify-center'
        className='w-full'
    >
        <div className="my-5 pb-10 md:pt-10 md:pb-8">

            <h1 className="text-4xl font-bold text-pink-500">
                Contact
            </h1>

            <p className='py-6'>
                My inbox is always open and looking for new opportunities. 
                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            
            <a href="mailto:cindy.ogidi@gmail.com">
                <button className='px-4 py-3 border border-pink-500 mt-2 text-sm text-gray-50 bg-pink-500 tracking-wider rounded-md hover:bg-pink-400 duration-300 shadow-2xl'> 
                    Say Hello
                </button>

            </a>

        </div>

    </section>
  )
}

export default Contact;