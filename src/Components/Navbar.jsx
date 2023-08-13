import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import logoImg from './logo-img.png' // Import the image

const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      zIndex='100'
      sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
    >

      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logoImg} alt="logo" height={45}/> {/* Use the imported image */}
      </Link>

      <SearchBar />
    </Stack>
  )
}

export default Navbar


// import React from 'react'
// import { Stack } from '@mui/material'
// import { Link } from 'react-router-dom'
// // import { logo } from "../utils/constant"
// import SearchBar from './SearchBar'

// const Navbar = () => {
//   return (
//     <Stack
//       direction='row'
//       alignItems='center'
//       p={2}
//       zIndex='100'
//       sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
//     >

//       <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
//         {/* <img src={logo} alt="logo" height={45} /> */}
//         {/* <img src="D:/Full-Stack Projects/Resume and Portfolio Projects/youtube-2.0/src/Components/logo-img.jpg" alt="logo" /> */}
//         <img src="../src/Components/logo-img.jpg" alt="logo" />
//       </Link>

//       <SearchBar/>
//     </Stack>
//   )
// }

// export default Navbar
