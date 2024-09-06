import React from 'react'

const About = () => {
  return (
    <section
      name="about"
      className='w-full h-screen'
    >
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>About this company</h2>
          <p className='py-6 text-3xl text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <p className='mt-20 text-xl'> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique dui et dapibus lobortis. Vivamus semper, augue vel congue rutrum, velit nibh lobortis eros, eget blandit risus nisl ac lectus. Nam dictum libero vitae velit convallis, ut rhoncus quam tincidunt. Quisque quis dolor quis enim auctor maximus id sit amet arcu. Nunc rutrum rhoncus magna non lacinia.
        </p>
        
        <p className='mt-20 text-xl'> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique dui et dapibus lobortis. Vivamus semper, augue vel congue rutrum, velit nibh lobortis eros, eget blandit risus nisl ac lectus. Nam dictum libero vitae velit convallis, ut rhoncus quam tincidunt. Quisque quis dolor quis enim auctor maximus id sit amet arcu. Nunc rutrum rhoncus magna non lacinia.
        </p>
      </div>

    </section>
  )
}

export default About