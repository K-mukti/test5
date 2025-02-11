// import logos from "../../assets/nav/logo-videobelajar.png";
// import profile from "../../assets/nav/Avatar.png";
// import vector from "../../assets/nav/Vector.png";
// import React, { useState } from "react";

// const Nav = () => {
//   // Navbar untuk halaman Login dan Register
//   return (
//     <div className="flex justify-between items-center w-full hp:px-0 hp:py-4 lg:py-3 lg:px-[100px]">
//       {/* Logo */}
//       <a href="/">
//         <img src={logos} alt="logo-videobelajar" className="cursor-pointer" />
//       </a>

//       {/* Button Login */}
//     </div>
//   );
// };

// const NavHome = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Menggunakan useState untuk dropdown

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen); // Toggle state dropdown
//   };

//   return (
//     <div className="fixed top-0 left-0 z-50 bg-white flex w-full hp:px-6 hp:py-4 sm:px-[30px] sm:py-3 sm:gap-6 lg:px-[120px] lg:gap-9 shadow-md">
//       <div className="flex justify-between items-center w-[1120px]">
//         <img src={logos} alt="logo-videobelajar" className="cursor-pointer" />

//         {/* Tautan Kategori untuk layar besar */}
//         <a className="text-home hidden lg:block sm:block hp:hidden" href="#">
//           Kategori
//         </a>

//         {/* Icon dropdown untuk layar mobile */}
//         <img
//           src={vector}
//           alt="vector"
//           className="block lg:hidden sm:hidden hp:block cursor-pointer"
//           onClick={toggleDropdown}
//         />
//       </div>
      
//       {/* Gambar profil untuk layar besar */}
//       <img
//         src={profile}
//         alt="profile"
//         className="cursor-pointer hidden hp:hidden sm:block lg:block"
//       />

//       <button
//         className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-all"
//         onClick={() => (window.location.href = "/login")}
//       >
//         Login
//       </button>

//       {/* Dropdown menu */}
//       {isDropdownOpen && (
//         <ul className="absolute text-home top-full right-0 bg-white shadow-lg rounded-md py-2 w-[200px]">
//           <li>
//             <a
//               className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500"
//               href="#"
//             >
//               Semua Kelas
//             </a>
//           </li>
//           <li>
//             <a
//               className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500"
//               href="#"
//             >
//               Pemasaran
//             </a>
//           </li>
//           <li>
//             <a
//               className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500"
//               href="#"
//             >
//               Desain
//             </a>
//           </li>
//           <li>
//             <a
//               className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500"
//               href="#"
//             >
//               Pengembangan Diri
//             </a>
//           </li>
//           <li>
//             <a
//               className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500"
//               href="#"
//             >
//               Bisnis
//             </a>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Nav;
// export { NavHome };



import React, { useState } from "react";

const NavHome = ({ fullname, email }) => { // Terima data sebagai props
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="fixed top-0 left-0 z-50 bg-white flex w-full hp:px-6 hp:py-4 sm:px-[30px] sm:py-3 sm:gap-6 lg:px-[120px] lg:gap-9 shadow-md">
            <div className="flex justify-between items-center w-[1120px]">
                <img src={"logo.png"} alt="logo-videobelajar" className="cursor-pointer" />
                
                <a className="text-home hidden lg:block sm:block hp:hidden" href="#">
                    Kategori
                </a>

                <img
                    src={"vector.png"}
                    alt="vector"
                    className="block lg:hidden sm:hidden hp:block cursor-pointer"
                    onClick={toggleDropdown}
                />
            </div>
            
            {/* Jika user sudah mengisi fullname, tampilkan di navbar */}
            {fullname ? (
                <div className="text-gray-700 font-semibold">
                    Halo, {fullname}!
                </div>
            ) : (
                <button
                    className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-all"
                    onClick={() => (window.location.href = "/login")}
                >
                    Login
                </button>
            )}

            {isDropdownOpen && (
                <ul className="absolute text-home top-full right-0 bg-white shadow-lg rounded-md py-2 w-[200px]">
                    <li><a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Semua Kelas</a></li>
                    <li><a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Pemasaran</a></li>
                    <li><a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Desain</a></li>
                    <li><a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Pengembangan Diri</a></li>
                    <li><a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Bisnis</a></li>
                </ul>
            )}
        </div>
    );
};

export { NavHome };
