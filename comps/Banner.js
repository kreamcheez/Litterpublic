import { ethers } from 'ethers'
import { shplubAddress } from '../config'
import Shplub from '../public/Kittens.json'
import IMAGES from './Kittens.js';

export default function Banner() {

    async function mintNFT() {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner()
        const tokenContract = new ethers.Contract(shplubAddress, Shplub.abi, signer)
        const tx = await tokenContract.publicMint(3)
        await tx.wait()

        console.log(tx)
    }

  return (
    <div className="lg:h-160 h-60 max-w-full relative" id="home">
      <main className="">
        <div className="text-center lg:text-massive text-white uppercase text-8xl">
          <h1 className="font-minecraft">Meow</h1>
        </div>
        <div className="flex justify-center items-center absolute inset-x-0 bottom-0">
          <div><img src={ IMAGES.kittenBlack.src } alt="" /></div>
          <div><img src={ IMAGES.kittenBlue.src } alt="" /></div>
          <div><img src={ IMAGES.kittenBrown.src } alt="" /></div>
          <div className="hidden sm:block"><img src={ IMAGES.kittenOrange.src } alt="" /></div>
          <div className="hidden sm:block"><img src={ IMAGES.kittenPink.src } alt="" /></div>
          <div className="hidden sm:block"><img src={ IMAGES.kittenWhite.src } alt="" /></div>
          
        </div>
      </main>
    </div>
  )
}
