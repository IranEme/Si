'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import '../css/Header.css'


function Header() {

    

    return (
        <header>
        <div>
                  <img src= "https://img.freepik.com/premium-vector/old-computer-with-mouse-keyboard-vector-flat-illustration_444100-53.jpg" alt="Descripción de la imagen"     style={{ width: '200px', height: '200px' }} />
        </div>
        <nav>
            <ul className='flex justify-evenly uppercase'>
            <li>
            <Link href={'/home'}><img src= "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/387499978_180504655094952_5613452537244660798_n.png?stp=cp0_dst-png&_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=3J2KFhpDFy8AX8UXSQD&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdT3A6NcTp4y_qD9d723-KPUxwG-svjy-TkFX-bL4rMnOA&oe=654EFAE6" alt="Descripción de la imagen"     style={{ width: '50px', height: '20px' }} /></Link>
            </li>
                <li>
                    <Link href={'/ejercicio02 '}><img src= "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/368447934_249599544336753_9064674888501810104_n.png?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=5hXRlyUqc5MAX8fQzGz&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdQ9FdYO75SRvgrA9y_9QcbPZeeORQdFHg8qXES7Nvytuw&oe=654F1771" alt="Descripción de la imagen"     style={{ width: '100px', height: '20px' }} /></Link>
                    
                </li>
                <li>
                    <Link href={'/ejercicio03'}><img src= "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/386465594_1351467738830022_8641056391542566750_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=qWVx2GWmjBQAX9D2fGX&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdQOaexUp5syhrJZGg5_Xg5gikr4r9gz3Oba_POvtWUZmw&oe=654F0903" alt="Descripción de la imagen"     style={{ width: '100px', height: '20px' }} /></Link>
                </li>
                <li>
                    <Link href={'/ejercicio01'}><img src= "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/387657229_3527429394197540_3162916007770768826_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=MjdM4zQTSLgAX8VJfgg&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdRCUuty1gR_3doc5-D1CsSUf7q6Xpp1lUFMt4FHI2MYcQ&oe=654EEFEF" alt="Descripción de la imagen"     style={{ width: '100px', height: '20px' }} /></Link>
                </li>
                <li>
                    <Link href={'/ejercicio04'}><img src= "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/387549376_195188750271412_6100605591638336849_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=o8fn5vunWt8AX-DqN_H&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdSlTrNWhb-P7JrL5LV3Lue5l5uuHL33MZPAgywVNIrOqA&oe=654F0BC1" alt="Descripción de la imagen"     style={{ width: '100px', height: '20px' }} /></Link>
                </li>
            </ul>
        </nav>
    </header>
    );
  }


  
  
  export default Header;

  