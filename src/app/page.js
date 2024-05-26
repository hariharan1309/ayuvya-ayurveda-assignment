// import Image from "next/image";
import Popup from "./components/Popup";
const wifiIcon = {
  __html: `<svg height="512px" id="Layer_1" class="h-5 w-5" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M256.1,96L256.1,96c-79.9,0-155.7,29.9-213.9,84.1L32,189.6l9.9,9.8l32.3,32l9.3,9.2l9.6-8.8 c44.5-40.9,102.3-63.5,162.8-63.5c60.5,0,118.4,22.6,162.8,63.5l9.6,8.8l9.3-9.2l32.3-32l9.9-9.8l-10.2-9.5 C411.6,125.9,335.7,96,256.1,96z"/><path d="M397.4,256.4c-38.8-35.1-88.9-54.4-141.1-54.4h-0.1h-0.3h-8.5l-0.1,0.2c-49.2,2-96,21.1-132.6,54.2l-10.5,9.5l10.1,10 l32.7,32.4l9.1,9l9.6-8.4c25.3-22.2,57.4-34.5,90.3-34.5c33.1,0,65.2,12.3,90.5,34.5l9.6,8.4l9.1-9l32.7-32.4l10.1-10L397.4,256.4z "/><path d="M256.2,416l9.6-9.5l52.8-52.2l10.6-10.5l-11.6-9.5c-15.4-11.4-32.4-20-61.5-20c-29,0-44.9,9.4-61.5,20l-11.5,9.5l10.6,10.5 l52.8,52.2L256.2,416z"/></g></svg>`
};

const networkIcon = {
  __html: `<svg enable-background="new 0 0 128 128" class="h-4 w-4" height="128px" id="Layer_1" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M18.863,86.36h-5.974C7.98,86.36,4,90.326,4,95.218v19.915c0,4.897,3.98,8.86,8.889,8.86h5.974 c4.909,0,8.889-3.963,8.889-8.86V95.218C27.751,90.326,23.771,86.36,18.863,86.36z" fill="#232323"/><path d="M51.299,63.884h-7.034c-4.907,0-8.887,3.966-8.887,8.858v1.405v39.586v1.404 c0,4.896,3.98,8.859,8.887,8.859h7.034c4.909,0,8.889-3.963,8.889-8.859v-1.404V74.147v-1.405 C60.188,67.85,56.208,63.884,51.299,63.884z" fill="#232323"/><path d="M83.206,41.401H76.17c-4.905,0-8.886,3.967-8.886,8.86v2.833v59.213v2.833c0,4.897,3.98,8.86,8.886,8.86 h7.036c4.909,0,8.888-3.963,8.888-8.86v-2.833V53.094v-2.833C92.094,45.369,88.115,41.401,83.206,41.401z" fill="#232323"/><path d="M115.114,18.922h-7.036c-4.906,0-8.886,3.967-8.886,8.86v25.312v36.733v25.313 c0,4.897,3.979,8.86,8.886,8.86h7.036c4.909,0,8.886-3.963,8.886-8.86V89.827V53.094V27.782 C124,22.889,120.023,18.922,115.114,18.922z" fill="#232323"/></g></svg>`
};

const closeIcon = {
  __html: `<svg style="enable-background:new 0 0 24 24;" class="h-7 w-7" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css"> .st0{opacity:0.2;fill:none;stroke:#000000;stroke-width:5.000000e-02;stroke-miterlimit:10;} </style><g id="grid_system"/><g id="_icons"><path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4 l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z"/></g></svg>`
};

const batteryIcon = {
  __html: `<svg height="512" viewBox="0 0 512 512" width="512" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg"><title/><rect height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" width="400" x="32" y="144"/><rect height="114.14" rx="4" ry="4" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" width="292.63" x="85.69" y="198.93"/><line style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" x1="480" x2="480" y1="218.67" y2="293.33"/></svg>`
};

export default function Home() {
  return (
      <main className="bg-white min-h-screen w-full flex items-center justify-center text-gray-800">
          <section className="flex flex-col w-[min(100%,420px)]  px-4 py-2 border m-1 rounded-[30px] h-full">
              <div className="flex flex-row w-full justify-between">
                <span className="font-medium">08:45</span>
                <div className="flex flex-row gap-1">
                  <div dangerouslySetInnerHTML={networkIcon} />
                  <div dangerouslySetInnerHTML={wifiIcon} />
                  <div dangerouslySetInnerHTML={batteryIcon} />
                </div>
                  
              </div>
              <section className="flex flex-col gap-2">
                  <div dangerouslySetInnerHTML={closeIcon}  className="py-1 cursor-pointer"/>
                  <Popup />
              </section>
          </section>      
      </main>
  );
}
